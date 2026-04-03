import { useState, useCallback } from 'react'
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore'
import { db } from '../config/firebase'
import type { Booking, BookingStatus, PaymentStatus } from '../types'

interface BookingsState {
  bookings: Booking[]
  loading: boolean
  error: string | null
}

interface UseBookingsReturn extends BookingsState {
  fetchUserBookings: (userId: string) => Promise<void>
  fetchBookingById: (id: string) => Promise<Booking | null>
  createBooking: (bookingData: CreateBookingData) => Promise<string>
  updateBookingStatus: (id: string, status: BookingStatus) => Promise<void>
  updatePaymentStatus: (id: string, paymentStatus: PaymentStatus) => Promise<void>
}

interface CreateBookingData {
  userId: string
  workshopId: string
  scheduleDate: string
  scheduleTime: string
  participants: number
  totalPrice: number
  notes?: string
}

const generateBookingNumber = (): string => {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `WB-${timestamp}-${random}`
}

const convertTimestamp = (timestamp: Timestamp): Date => {
  return timestamp.toDate()
}

const convertBooking = (doc: { id: string; data: () => Record<string, unknown> }): Booking => {
  const data = doc.data()
  return {
    ...data,
    id: doc.id,
    createdAt: data.createdAt ? convertTimestamp(data.createdAt as Timestamp) : new Date(),
    updatedAt: data.updatedAt ? convertTimestamp(data.updatedAt as Timestamp) : new Date(),
  } as Booking
}

export const useBookings = (): UseBookingsReturn => {
  const [state, setState] = useState<BookingsState>({
    bookings: [],
    loading: false,
    error: null,
  })

  const fetchUserBookings = useCallback(async (userId: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const bookingsRef = collection(db, 'bookings')
      const q = query(bookingsRef, where('userId', '==', userId), orderBy('createdAt', 'desc'))

      const snapshot = await getDocs(q)
      const bookings = snapshot.docs.map(convertBooking)

      setState({
        bookings,
        loading: false,
        error: null,
      })
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch bookings',
      }))
    }
  }, [])

  const fetchBookingById = useCallback(async (id: string): Promise<Booking | null> => {
    try {
      const docRef = doc(db, 'bookings', id)
      const snapshot = await getDoc(docRef)

      if (snapshot.exists()) {
        return convertBooking({ id: snapshot.id, data: () => snapshot.data() })
      }
      return null
    } catch (error) {
      console.error('Error fetching booking:', error)
      return null
    }
  }, [])

  const createBooking = useCallback(async (bookingData: CreateBookingData): Promise<string> => {
    const bookingNumber = generateBookingNumber()

    const newBooking = {
      bookingNumber,
      userId: bookingData.userId,
      workshopId: bookingData.workshopId,
      scheduleDate: bookingData.scheduleDate,
      scheduleTime: bookingData.scheduleTime,
      participants: bookingData.participants,
      totalPrice: bookingData.totalPrice,
      status: 'pending' as BookingStatus,
      paymentStatus: 'unpaid' as PaymentStatus,
      notes: bookingData.notes || null,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    }

    const docRef = await addDoc(collection(db, 'bookings'), newBooking)
    return docRef.id
  }, [])

  const updateBookingStatus = useCallback(async (id: string, status: BookingStatus) => {
    const docRef = doc(db, 'bookings', id)
    await updateDoc(docRef, {
      status,
      updatedAt: serverTimestamp(),
    })
  }, [])

  const updatePaymentStatus = useCallback(async (id: string, paymentStatus: PaymentStatus) => {
    const docRef = doc(db, 'bookings', id)
    await updateDoc(docRef, {
      paymentStatus,
      updatedAt: serverTimestamp(),
    })
  }, [])

  return {
    ...state,
    fetchUserBookings,
    fetchBookingById,
    createBooking,
    updateBookingStatus,
    updatePaymentStatus,
  }
}
