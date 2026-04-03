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
  limit,
  startAfter,
  DocumentSnapshot,
  Timestamp,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../config/firebase'
import type { Inspiration } from '../types'

interface InspirationsState {
  inspirations: Inspiration[]
  loading: boolean
  error: string | null
  hasMore: boolean
  lastDoc: DocumentSnapshot | null
}

interface UseInspirationsReturn extends InspirationsState {
  fetchInspirations: (reset?: boolean) => Promise<void>
  fetchPublishedInspirations: () => Promise<void>
  fetchInspirationById: (id: string) => Promise<Inspiration | null>
  fetchInspirationBySlug: (slug: string) => Promise<Inspiration | null>
  fetchInspirationsByTag: (tag: string) => Promise<void>
  addInspiration: (inspiration: Omit<Inspiration, 'id' | 'createdAt' | 'updatedAt'>) => Promise<string>
  updateInspiration: (id: string, updates: Partial<Inspiration>) => Promise<void>
  deleteInspiration: (id: string) => Promise<void>
  publishInspiration: (id: string) => Promise<void>
  unpublishInspiration: (id: string) => Promise<void>
}

const INSPIRATIONS_PER_PAGE = 10

const convertTimestamp = (timestamp: Timestamp): Date => {
  return timestamp.toDate()
}

const convertInspiration = (docData: { id: string; data: () => Record<string, unknown> }): Inspiration => {
  const data = docData.data()
  return {
    ...data,
    id: docData.id,
    publishedAt: data.publishedAt ? convertTimestamp(data.publishedAt as Timestamp) : undefined,
    createdAt: data.createdAt ? convertTimestamp(data.createdAt as Timestamp) : new Date(),
    updatedAt: data.updatedAt ? convertTimestamp(data.updatedAt as Timestamp) : new Date(),
  } as Inspiration
}

export const useInspirations = (): UseInspirationsReturn => {
  const [state, setState] = useState<InspirationsState>({
    inspirations: [],
    loading: false,
    error: null,
    hasMore: true,
    lastDoc: null,
  })

  const fetchInspirations = useCallback(async (reset = false) => {
    setState((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const inspirationsRef = collection(db, 'inspirations')
      const q = query(
        inspirationsRef,
        orderBy('createdAt', 'desc'),
        limit(INSPIRATIONS_PER_PAGE),
        ...(reset || !state.lastDoc ? [] : [startAfter(state.lastDoc)])
      )

      const snapshot = await getDocs(q)
      const inspirations = snapshot.docs.map(convertInspiration)
      const lastDoc = snapshot.docs[snapshot.docs.length - 1]

      setState((prev) => ({
        ...prev,
        inspirations: reset ? inspirations : [...prev.inspirations, ...inspirations],
        loading: false,
        hasMore: snapshot.docs.length === INSPIRATIONS_PER_PAGE,
        lastDoc,
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch inspirations',
      }))
    }
  }, [state.lastDoc])

  const fetchPublishedInspirations = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const inspirationsRef = collection(db, 'inspirations')
      const q = query(
        inspirationsRef,
        where('published', '==', true),
        orderBy('publishedAt', 'desc')
      )

      const snapshot = await getDocs(q)
      const inspirations = snapshot.docs.map(convertInspiration)

      setState((prev) => ({
        ...prev,
        inspirations,
        loading: false,
        hasMore: false,
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch published inspirations',
      }))
    }
  }, [])

  const fetchInspirationById = useCallback(async (id: string): Promise<Inspiration | null> => {
    try {
      const docRef = doc(db, 'inspirations', id)
      const snapshot = await getDoc(docRef)

      if (snapshot.exists()) {
        return convertInspiration({ id: snapshot.id, data: () => snapshot.data() })
      }
      return null
    } catch (error) {
      console.error('Error fetching inspiration:', error)
      return null
    }
  }, [])

  const fetchInspirationBySlug = useCallback(async (slug: string): Promise<Inspiration | null> => {
    try {
      const inspirationsRef = collection(db, 'inspirations')
      const q = query(
        inspirationsRef,
        where('slug', '==', slug),
        where('published', '==', true),
        limit(1)
      )

      const snapshot = await getDocs(q)
      if (!snapshot.empty) {
        return convertInspiration({
          id: snapshot.docs[0].id,
          data: () => snapshot.docs[0].data(),
        })
      }
      return null
    } catch (error) {
      console.error('Error fetching inspiration by slug:', error)
      return null
    }
  }, [])

  const fetchInspirationsByTag = useCallback(async (tag: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const inspirationsRef = collection(db, 'inspirations')
      const q = query(
        inspirationsRef,
        where('tags', 'array-contains', tag),
        where('published', '==', true),
        orderBy('publishedAt', 'desc')
      )

      const snapshot = await getDocs(q)
      const inspirations = snapshot.docs.map(convertInspiration)

      setState((prev) => ({
        ...prev,
        inspirations,
        loading: false,
        hasMore: false,
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch inspirations',
      }))
    }
  }, [])

  const addInspiration = useCallback(
    async (inspiration: Omit<Inspiration, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
      const docRef = await addDoc(collection(db, 'inspirations'), {
        ...inspiration,
        publishedAt: inspiration.published ? serverTimestamp() : null,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
      return docRef.id
    },
    []
  )

  const updateInspiration = useCallback(async (id: string, updates: Partial<Inspiration>) => {
    const docRef = doc(db, 'inspirations', id)
    await updateDoc(docRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    })
  }, [])

  const deleteInspiration = useCallback(async (id: string) => {
    await deleteDoc(doc(db, 'inspirations', id))
  }, [])

  const publishInspiration = useCallback(async (id: string) => {
    const docRef = doc(db, 'inspirations', id)
    await updateDoc(docRef, {
      published: true,
      publishedAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    })
  }, [])

  const unpublishInspiration = useCallback(async (id: string) => {
    const docRef = doc(db, 'inspirations', id)
    await updateDoc(docRef, {
      published: false,
      updatedAt: serverTimestamp(),
    })
  }, [])

  return {
    ...state,
    fetchInspirations,
    fetchPublishedInspirations,
    fetchInspirationById,
    fetchInspirationBySlug,
    fetchInspirationsByTag,
    addInspiration,
    updateInspiration,
    deleteInspiration,
    publishInspiration,
    unpublishInspiration,
  }
}
