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
  Timestamp,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../config/firebase'
import type { Arrangement, EventType } from '../types'

interface ArrangementsState {
  arrangements: Arrangement[]
  loading: boolean
  error: string | null
}

interface UseArrangementsReturn extends ArrangementsState {
  fetchArrangements: () => Promise<void>
  fetchActiveArrangements: () => Promise<void>
  fetchArrangementById: (id: string) => Promise<Arrangement | null>
  fetchArrangementsByEventType: (eventType: EventType) => Promise<void>
  addArrangement: (arrangement: Omit<Arrangement, 'id' | 'createdAt' | 'updatedAt'>) => Promise<string>
  updateArrangement: (id: string, updates: Partial<Arrangement>) => Promise<void>
  deleteArrangement: (id: string) => Promise<void>
}

const convertTimestamp = (timestamp: Timestamp): Date => {
  return timestamp.toDate()
}

const convertArrangement = (docData: { id: string; data: () => Record<string, unknown> }): Arrangement => {
  const data = docData.data()
  return {
    ...data,
    id: docData.id,
    createdAt: data.createdAt ? convertTimestamp(data.createdAt as Timestamp) : new Date(),
    updatedAt: data.updatedAt ? convertTimestamp(data.updatedAt as Timestamp) : new Date(),
  } as Arrangement
}

export const useArrangements = (): UseArrangementsReturn => {
  const [state, setState] = useState<ArrangementsState>({
    arrangements: [],
    loading: false,
    error: null,
  })

  const fetchArrangements = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const arrangementsRef = collection(db, 'arrangements')
      const q = query(arrangementsRef, orderBy('createdAt', 'desc'))

      const snapshot = await getDocs(q)
      const arrangements = snapshot.docs.map(convertArrangement)

      setState((prev) => ({
        ...prev,
        arrangements,
        loading: false,
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch arrangements',
      }))
    }
  }, [])

  const fetchActiveArrangements = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const arrangementsRef = collection(db, 'arrangements')
      const q = query(
        arrangementsRef,
        where('active', '==', true),
        orderBy('createdAt', 'desc')
      )

      const snapshot = await getDocs(q)
      const arrangements = snapshot.docs.map(convertArrangement)

      setState((prev) => ({
        ...prev,
        arrangements,
        loading: false,
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch active arrangements',
      }))
    }
  }, [])

  const fetchArrangementById = useCallback(async (id: string): Promise<Arrangement | null> => {
    try {
      const docRef = doc(db, 'arrangements', id)
      const snapshot = await getDoc(docRef)

      if (snapshot.exists()) {
        return convertArrangement({ id: snapshot.id, data: () => snapshot.data() })
      }
      return null
    } catch (error) {
      console.error('Error fetching arrangement:', error)
      return null
    }
  }, [])

  const fetchArrangementsByEventType = useCallback(async (eventType: EventType) => {
    setState((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const arrangementsRef = collection(db, 'arrangements')
      const q = query(
        arrangementsRef,
        where('eventType', '==', eventType),
        where('active', '==', true),
        orderBy('createdAt', 'desc')
      )

      const snapshot = await getDocs(q)
      const arrangements = snapshot.docs.map(convertArrangement)

      setState((prev) => ({
        ...prev,
        arrangements,
        loading: false,
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch arrangements',
      }))
    }
  }, [])

  const addArrangement = useCallback(
    async (arrangement: Omit<Arrangement, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
      const docRef = await addDoc(collection(db, 'arrangements'), {
        ...arrangement,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
      return docRef.id
    },
    []
  )

  const updateArrangement = useCallback(async (id: string, updates: Partial<Arrangement>) => {
    const docRef = doc(db, 'arrangements', id)
    await updateDoc(docRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    })
  }, [])

  const deleteArrangement = useCallback(async (id: string) => {
    await deleteDoc(doc(db, 'arrangements', id))
  }, [])

  return {
    ...state,
    fetchArrangements,
    fetchActiveArrangements,
    fetchArrangementById,
    fetchArrangementsByEventType,
    addArrangement,
    updateArrangement,
    deleteArrangement,
  }
}
