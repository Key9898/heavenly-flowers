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
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore'
import { db } from '../config/firebase'
import type { Product, ProductCategory } from '../types'

interface ProductsState {
  products: Product[]
  loading: boolean
  error: string | null
  hasMore: boolean
  lastDoc: DocumentSnapshot | null
}

interface UseProductsReturn extends ProductsState {
  fetchProducts: (reset?: boolean) => Promise<void>
  fetchProductById: (id: string) => Promise<Product | null>
  fetchProductsByCategory: (category: ProductCategory) => Promise<void>
  fetchFeaturedProducts: () => Promise<void>
  searchProducts: (searchTerm: string) => Promise<void>
  addProduct: (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => Promise<string>
  updateProduct: (id: string, updates: Partial<Product>) => Promise<void>
  deleteProduct: (id: string) => Promise<void>
}

const PRODUCTS_PER_PAGE = 12

const convertTimestamp = (timestamp: Timestamp): Date => {
  return timestamp.toDate()
}

const convertProduct = (docData: { id: string; data: () => Record<string, unknown> }): Product => {
  const data = docData.data()
  return {
    ...data,
    id: docData.id,
    createdAt: data.createdAt ? convertTimestamp(data.createdAt as Timestamp) : new Date(),
    updatedAt: data.updatedAt ? convertTimestamp(data.updatedAt as Timestamp) : new Date(),
  } as Product
}

export const useProducts = (): UseProductsReturn => {
  const [state, setState] = useState<ProductsState>({
    products: [],
    loading: false,
    error: null,
    hasMore: true,
    lastDoc: null,
  })

  const fetchProducts = useCallback(async (reset = false) => {
    setState((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const productsRef = collection(db, 'products')
      const q = query(
        productsRef,
        orderBy('createdAt', 'desc'),
        limit(PRODUCTS_PER_PAGE),
        ...(reset || !state.lastDoc ? [] : [startAfter(state.lastDoc)])
      )

      const snapshot = await getDocs(q)
      const products = snapshot.docs.map(convertProduct)
      const lastDoc = snapshot.docs[snapshot.docs.length - 1]

      setState((prev) => ({
        ...prev,
        products: reset ? products : [...prev.products, ...products],
        loading: false,
        hasMore: snapshot.docs.length === PRODUCTS_PER_PAGE,
        lastDoc,
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch products',
      }))
    }
  }, [state.lastDoc])

  const fetchProductById = useCallback(async (id: string): Promise<Product | null> => {
    try {
      const docRef = doc(db, 'products', id)
      const snapshot = await getDoc(docRef)

      if (snapshot.exists()) {
        return convertProduct({ id: snapshot.id, data: () => snapshot.data() })
      }
      return null
    } catch (error) {
      console.error('Error fetching product:', error)
      return null
    }
  }, [])

  const fetchProductsByCategory = useCallback(async (category: ProductCategory) => {
    setState((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const productsRef = collection(db, 'products')
      const q = query(productsRef, where('category', '==', category), orderBy('createdAt', 'desc'))

      const snapshot = await getDocs(q)
      const products = snapshot.docs.map(convertProduct)

      setState((prev) => ({
        ...prev,
        products,
        loading: false,
        hasMore: false,
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch products',
      }))
    }
  }, [])

  const fetchFeaturedProducts = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const productsRef = collection(db, 'products')
      const q = query(productsRef, where('featured', '==', true), orderBy('createdAt', 'desc'))

      const snapshot = await getDocs(q)
      const products = snapshot.docs.map(convertProduct)

      setState((prev) => ({
        ...prev,
        products,
        loading: false,
        hasMore: false,
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch featured products',
      }))
    }
  }, [])

  const searchProducts = useCallback(async (searchTerm: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const productsRef = collection(db, 'products')
      const q = query(productsRef, orderBy('name'), limit(50))

      const snapshot = await getDocs(q)
      const allProducts = snapshot.docs.map(convertProduct)

      const filteredProducts = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.tags?.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      )

      setState((prev) => ({
        ...prev,
        products: filteredProducts,
        loading: false,
        hasMore: false,
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Search failed',
      }))
    }
  }, [])

  const addProduct = useCallback(
    async (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> => {
      const docRef = await addDoc(collection(db, 'products'), {
        ...product,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
      return docRef.id
    },
    []
  )

  const updateProduct = useCallback(async (id: string, updates: Partial<Product>) => {
    const docRef = doc(db, 'products', id)
    await updateDoc(docRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    })
  }, [])

  const deleteProduct = useCallback(async (id: string) => {
    await deleteDoc(doc(db, 'products', id))
  }, [])

  return {
    ...state,
    fetchProducts,
    fetchProductById,
    fetchProductsByCategory,
    fetchFeaturedProducts,
    searchProducts,
    addProduct,
    updateProduct,
    deleteProduct,
  }
}
