import { useState, useCallback } from 'react'
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore'
import { db } from '../config/firebase'
import type { Workshop, WorkshopSchedule } from '../types'

interface WorkshopsState {
  workshops: Workshop[]
  loading: boolean
  error: string | null
}

interface UseWorkshopsReturn extends WorkshopsState {
  fetchWorkshops: () => Promise<void>
  fetchActiveWorkshops: () => Promise<void>
  fetchWorkshopById: (id: string) => Promise<Workshop | null>
  addWorkshop: (workshop: Omit<Workshop, 'id' | 'createdAt' | 'updatedAt'>) => Promise<string>
  updateWorkshop: (id: string, updates: Partial<Workshop>) => Promise<void>
  deleteWorkshop: (id: string) => Promise<void>
  updateSchedule: (id: string, schedule: WorkshopSchedule[]) => Promise<void>
}

const convertTimestamp = (timestamp: Timestamp): Date => {
  return timestamp.toDate()
}

const convertWorkshop = (doc: { id: string; data: () => Record<string, unknown> }): Workshop => {
  const data = doc.data()
  return {
    ...data,
    id: doc.id,
    createdAt: data.createdAt ? convertTimestamp(data.createdAt as Timestamp) : new Date(),
    updatedAt: data.updatedAt ? convertTimestamp(data.updatedAt as Timestamp) : new Date(),
  } as Workshop
}

export const useWorkshops = (): UseWorkshopsReturn => {
  const [state, setState] = useState<WorkshopsState>({
    workshops: [],
    loading: false,
    error: null,
  })

  const fetchWorkshops = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const workshopsRef = collection(db, 'workshops')
      const q = query(workshopsRef, orderBy('createdAt', 'desc'))

      const snapshot = await getDocs(q)
      const workshops = snapshot.docs.map(convertWorkshop)

      setState({
        workshops,
        loading: false,
        error: null,
      })
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch workshops',
      }))
    }
  }, [])

  const fetchActiveWorkshops = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const workshopsRef = collection(db, 'workshops')
      const q = query(workshopsRef, where('active', '==', true), orderBy('createdAt', 'desc'))

      const snapshot = await getDocs(q)
      const workshops = snapshot.docs.map(convertWorkshop)

      setState({
        workshops,
        loading: false,
        error: null,
      })
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch workshops',
      }))
    }
  }, [])

  const fetchWorkshopById = useCallback(async (id: string): Promise<Workshop | null> => {
    try {
      const docRef = doc(db, 'workshops', id)
      const snapshot = await getDoc(docRef)

      if (snapshot.exists()) {
        return convertWorkshop({ id: snapshot.id, data: () => snapshot.data() })
      }
      return null
    } catch (error) {
      console.error('Error fetching workshop:', error)
      return null
    }
  }, [])

  const addWorkshop = useCallback(
    async (workshop: Omit<Workshop, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
      const docRef = await addDoc(collection(db, 'workshops'), {
        ...workshop,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
      return docRef.id
    },
    []
  )

  const updateWorkshop = useCallback(async (id: string, updates: Partial<Workshop>) => {
    const docRef = doc(db, 'workshops', id)
    await updateDoc(docRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    })
  }, [])

  const deleteWorkshop = useCallback(async (id: string) => {
    await deleteDoc(doc(db, 'workshops', id))
  }, [])

  const updateSchedule = useCallback(async (id: string, schedule: WorkshopSchedule[]) => {
    const docRef = doc(db, 'workshops', id)
    await updateDoc(docRef, {
      schedule,
      updatedAt: serverTimestamp(),
    })
  }, [])

  return {
    ...state,
    fetchWorkshops,
    fetchActiveWorkshops,
    fetchWorkshopById,
    addWorkshop,
    updateWorkshop,
    deleteWorkshop,
    updateSchedule,
  }
}
