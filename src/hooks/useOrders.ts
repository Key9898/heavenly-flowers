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
import type { Order, OrderItem, ShippingInfo, OrderStatus, PaymentStatus } from '../types'

interface OrdersState {
  orders: Order[]
  loading: boolean
  error: string | null
}

interface UseOrdersReturn extends OrdersState {
  fetchUserOrders: (userId: string) => Promise<void>
  fetchOrderById: (id: string) => Promise<Order | null>
  createOrder: (orderData: CreateOrderData) => Promise<string>
  updateOrderStatus: (id: string, status: OrderStatus) => Promise<void>
  updatePaymentStatus: (id: string, paymentStatus: PaymentStatus) => Promise<void>
}

interface CreateOrderData {
  userId: string
  items: OrderItem[]
  subtotal: number
  deliveryFee: number
  total: number
  shippingInfo: ShippingInfo
  notes?: string
}

const generateOrderNumber = (): string => {
  const timestamp = Date.now().toString(36).toUpperCase()
  const random = Math.random().toString(36).substring(2, 6).toUpperCase()
  return `HF-${timestamp}-${random}`
}

const convertTimestamp = (timestamp: Timestamp): Date => {
  return timestamp.toDate()
}

const convertOrder = (doc: { id: string; data: () => Record<string, unknown> }): Order => {
  const data = doc.data()
  return {
    ...data,
    id: doc.id,
    createdAt: data.createdAt ? convertTimestamp(data.createdAt as Timestamp) : new Date(),
    updatedAt: data.updatedAt ? convertTimestamp(data.updatedAt as Timestamp) : new Date(),
  } as Order
}

export const useOrders = (): UseOrdersReturn => {
  const [state, setState] = useState<OrdersState>({
    orders: [],
    loading: false,
    error: null,
  })

  const fetchUserOrders = useCallback(async (userId: string) => {
    setState((prev) => ({ ...prev, loading: true, error: null }))

    try {
      const ordersRef = collection(db, 'orders')
      const q = query(ordersRef, where('userId', '==', userId), orderBy('createdAt', 'desc'))

      const snapshot = await getDocs(q)
      const orders = snapshot.docs.map(convertOrder)

      setState({
        orders,
        loading: false,
        error: null,
      })
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch orders',
      }))
    }
  }, [])

  const fetchOrderById = useCallback(async (id: string): Promise<Order | null> => {
    try {
      const docRef = doc(db, 'orders', id)
      const snapshot = await getDoc(docRef)

      if (snapshot.exists()) {
        return convertOrder({ id: snapshot.id, data: () => snapshot.data() })
      }
      return null
    } catch (error) {
      console.error('Error fetching order:', error)
      return null
    }
  }, [])

  const createOrder = useCallback(async (orderData: CreateOrderData): Promise<string> => {
    const orderNumber = generateOrderNumber()

    const newOrder = {
      orderNumber,
      userId: orderData.userId,
      items: orderData.items,
      subtotal: orderData.subtotal,
      deliveryFee: orderData.deliveryFee,
      total: orderData.total,
      status: 'pending' as OrderStatus,
      paymentStatus: 'unpaid' as PaymentStatus,
      shippingInfo: orderData.shippingInfo,
      notes: orderData.notes || null,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    }

    const docRef = await addDoc(collection(db, 'orders'), newOrder)
    return docRef.id
  }, [])

  const updateOrderStatus = useCallback(async (id: string, status: OrderStatus) => {
    const docRef = doc(db, 'orders', id)
    await updateDoc(docRef, {
      status,
      updatedAt: serverTimestamp(),
    })
  }, [])

  const updatePaymentStatus = useCallback(async (id: string, paymentStatus: PaymentStatus) => {
    const docRef = doc(db, 'orders', id)
    await updateDoc(docRef, {
      paymentStatus,
      updatedAt: serverTimestamp(),
    })
  }, [])

  return {
    ...state,
    fetchUserOrders,
    fetchOrderById,
    createOrder,
    updateOrderStatus,
    updatePaymentStatus,
  }
}
