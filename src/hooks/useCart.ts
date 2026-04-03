import { useState, useCallback, useEffect } from 'react'
import type { Product, CartItem, Cart } from '../types'

const CART_STORAGE_KEY = 'heavenly_flowers_cart'

interface UseCartReturn {
  cart: Cart
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  subtotal: number
}

const loadCartFromStorage = (): Cart => {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (error) {
    console.error('Error loading cart from storage:', error)
  }
  return { items: [], subtotal: 0 }
}

const saveCartToStorage = (cart: Cart): void => {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  } catch (error) {
    console.error('Error saving cart to storage:', error)
  }
}

export const useCart = (): UseCartReturn => {
  const [cart, setCart] = useState<Cart>(loadCartFromStorage)

  useEffect(() => {
    saveCartToStorage(cart)
  }, [cart])

  const calculateSubtotal = (items: CartItem[]): number => {
    return items.reduce((total, item) => total + item.product.price * item.quantity, 0)
  }

  const addItem = useCallback((product: Product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.items.findIndex((item) => item.product.id === product.id)

      let newItems: CartItem[]
      if (existingItemIndex >= 0) {
        newItems = prevCart.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        newItems = [...prevCart.items, { product, quantity }]
      }

      return {
        items: newItems,
        subtotal: calculateSubtotal(newItems),
      }
    })
  }, [])

  const removeItem = useCallback((productId: string) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter((item) => item.product.id !== productId)
      return {
        items: newItems,
        subtotal: calculateSubtotal(newItems),
      }
    })
  }, [])

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }

    setCart((prevCart) => {
      const newItems = prevCart.items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )

      return {
        items: newItems,
        subtotal: calculateSubtotal(newItems),
      }
    })
  }, [removeItem])

  const clearCart = useCallback(() => {
    setCart({ items: [], subtotal: 0 })
  }, [])

  const totalItems = cart.items.reduce((total, item) => total + item.quantity, 0)

  return {
    cart,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    subtotal: cart.subtotal,
  }
}
