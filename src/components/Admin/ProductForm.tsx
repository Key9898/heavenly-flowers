import { useState, useEffect } from 'react'
import { useProducts } from '../../hooks/useProducts'
import type { Product, ProductCategory, FlowerType, ProductColor, OccasionType } from '../../types'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import logo from '../../assets/Logo/logo.svg'

interface ProductFormProps {
  onNavigate: (page: string) => void
  editProduct?: Product | null
  onClose: () => void
}

const PRODUCT_CATEGORIES: { value: ProductCategory; label: string }[] = [
  { value: 'bouquet', label: 'Bouquet' },
  { value: 'arrangement', label: 'Arrangement' },
  { value: 'single', label: 'Single Stem' },
  { value: 'bundle', label: 'Bundle' },
  { value: 'subscription', label: 'Subscription' },
]

const FLOWER_TYPES: { value: FlowerType; label: string }[] = [
  { value: 'roses', label: 'Roses' },
  { value: 'tulips', label: 'Tulips' },
  { value: 'lilies', label: 'Lilies' },
  { value: 'orchids', label: 'Orchids' },
  { value: 'sunflowers', label: 'Sunflowers' },
  { value: 'forget-me-not', label: 'Forget Me Not' },
  { value: 'carnations', label: 'Carnations' },
  { value: 'daisies', label: 'Daisies' },
  { value: 'peonies', label: 'Peonies' },
  { value: 'mixed-bouquet', label: 'Mixed Bouquet' },
]

const PRODUCT_COLORS: { value: ProductColor; label: string }[] = [
  { value: 'red', label: 'Red' },
  { value: 'white', label: 'White' },
  { value: 'pink', label: 'Pink' },
  { value: 'yellow', label: 'Yellow' },
  { value: 'blue', label: 'Blue' },
  { value: 'orange', label: 'Orange' },
  { value: 'purple', label: 'Purple' },
  { value: 'mixed-colors', label: 'Mixed Colors' },
]

const OCCASION_TYPES: { value: OccasionType; label: string }[] = [
  { value: 'birthday', label: 'Birthday' },
  { value: 'anniversary', label: 'Anniversary' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'graduation', label: 'Graduation' },
  { value: 'valentines-day', label: "Valentine's Day" },
  { value: 'mothers-day', label: "Mother's Day" },
  { value: 'fathers-day', label: "Father's Day" },
  { value: 'corporate', label: 'Corporate' },
  { value: 'congratulations', label: 'Congratulations' },
  { value: 'apology', label: 'Apology' },
  { value: 'just-because', label: 'Just Because' },
]

interface FormData {
  name: string
  nameTh: string
  nameFr: string
  description: string
  descriptionTh: string
  price: string
  images: string
  category: ProductCategory | ''
  flowerType: FlowerType | ''
  color: ProductColor | ''
  occasion: OccasionType | ''
  tags: string
  inStock: boolean
  featured: boolean
}

const initialFormData: FormData = {
  name: '',
  nameTh: '',
  nameFr: '',
  description: '',
  descriptionTh: '',
  price: '',
  images: '',
  category: '',
  flowerType: '',
  color: '',
  occasion: '',
  tags: '',
  inStock: true,
  featured: false,
}

export default function ProductForm({ onNavigate, editProduct, onClose }: ProductFormProps) {
  const { addProduct, updateProduct, loading } = useProducts()
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  useEffect(() => {
    if (editProduct) {
      setFormData({
        name: editProduct.name,
        nameTh: editProduct.nameTh || '',
        nameFr: editProduct.nameFr || '',
        description: editProduct.description,
        descriptionTh: editProduct.descriptionTh || '',
        price: editProduct.price.toString(),
        images: editProduct.images.join('\n'),
        category: editProduct.category,
        flowerType: editProduct.flowerType || '',
        color: editProduct.color || '',
        occasion: editProduct.occasion || '',
        tags: editProduct.tags?.join(', ') || '',
        inStock: editProduct.inStock,
        featured: editProduct.featured || false,
      })
    }
  }, [editProduct])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Product name is required'
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required'
    }

    if (!formData.price.trim()) {
      newErrors.price = 'Price is required'
    } else if (isNaN(parseFloat(formData.price)) || parseFloat(formData.price) <= 0) {
      newErrors.price = 'Price must be a positive number'
    }

    if (!formData.category) {
      newErrors.category = 'Category is required'
    }

    if (!formData.images.trim()) {
      newErrors.images = 'At least one image URL is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitMessage(null)

    if (!validateForm()) {
      return
    }

    try {
      const productData = {
        name: formData.name.trim(),
        nameTh: formData.nameTh.trim() || undefined,
        nameFr: formData.nameFr.trim() || undefined,
        description: formData.description.trim(),
        descriptionTh: formData.descriptionTh.trim() || undefined,
        price: parseFloat(formData.price),
        images: formData.images
          .split('\n')
          .map((url) => url.trim())
          .filter((url) => url),
        category: formData.category as ProductCategory,
        flowerType: (formData.flowerType || undefined) as FlowerType | undefined,
        color: (formData.color || undefined) as ProductColor | undefined,
        occasion: (formData.occasion || undefined) as OccasionType | undefined,
        tags: formData.tags
          ? formData.tags
              .split(',')
              .map((tag) => tag.trim())
              .filter((tag) => tag)
          : undefined,
        inStock: formData.inStock,
        featured: formData.featured,
      }

      if (editProduct) {
        await updateProduct(editProduct.id, productData)
        setSubmitMessage({ type: 'success', text: 'Product updated successfully!' })
      } else {
        await addProduct(productData)
        setSubmitMessage({ type: 'success', text: 'Product added successfully!' })
        setFormData(initialFormData)
      }

      setTimeout(() => {
        onClose()
      }, 1500)
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: error instanceof Error ? error.message : 'Failed to save product',
      })
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onNavigate={onNavigate} activePage="admin" />

      <main className="pt-16">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col py-6 px-6 border-b border-slate-200">
              <div className="w-full text-center">
                <img alt="Heavenly Flowers" src={logo} className="mx-auto h-8 w-auto" />
                <h2 className="mt-4 text-2xl font-bold tracking-tight text-cyan-700">
                  {editProduct ? 'Edit Product' : 'Add New Product'}
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  {editProduct
                    ? 'Update product information'
                    : 'Fill in the details to add a new product'}
                </p>
              </div>
            </div>

            <div className="px-6 py-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-900"
                    >
                      Product Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter product name"
                      className={`mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-slate-900 outline-1 -outline-offset-1 ${
                        errors.name ? 'outline-red-500' : 'outline-slate-300'
                      } placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm`}
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="nameTh"
                      className="block text-sm font-medium text-slate-900"
                    >
                      Name (Thai)
                    </label>
                    <input
                      id="nameTh"
                      name="nameTh"
                      type="text"
                      value={formData.nameTh}
                      onChange={handleInputChange}
                      placeholder="Thai name"
                      className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="nameFr"
                      className="block text-sm font-medium text-slate-900"
                    >
                      Name (French)
                    </label>
                    <input
                      id="nameFr"
                      name="nameFr"
                      type="text"
                      value={formData.nameFr}
                      onChange={handleInputChange}
                      placeholder="French name"
                      className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-slate-900"
                  >
                    Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter product description"
                    className={`mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-slate-900 outline-1 -outline-offset-1 ${
                      errors.description ? 'outline-red-500' : 'outline-slate-300'
                    } placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm`}
                  />
                  {errors.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="descriptionTh"
                    className="block text-sm font-medium text-slate-900"
                  >
                    Description (Thai)
                  </label>
                  <textarea
                    id="descriptionTh"
                    name="descriptionTh"
                    rows={2}
                    value={formData.descriptionTh}
                    onChange={handleInputChange}
                    placeholder="Thai description"
                    className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="price"
                      className="block text-sm font-medium text-slate-900"
                    >
                      Price (฿) *
                    </label>
                    <input
                      id="price"
                      name="price"
                      type="number"
                      step="0.01"
                      min="0"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="0.00"
                      className={`mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-slate-900 outline-1 -outline-offset-1 ${
                        errors.price ? 'outline-red-500' : 'outline-slate-300'
                      } placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm`}
                    />
                    {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="block text-sm font-medium text-slate-900"
                    >
                      Category *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className={`mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-slate-900 outline-1 -outline-offset-1 ${
                        errors.category ? 'outline-red-500' : 'outline-slate-300'
                      } focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm`}
                    >
                      <option value="" disabled>
                        Select category
                      </option>
                      {PRODUCT_CATEGORIES.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>
                    {errors.category && (
                      <p className="mt-1 text-sm text-red-600">{errors.category}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="images"
                    className="block text-sm font-medium text-slate-900"
                  >
                    Image URLs *{' '}
                    <span className="text-slate-500 font-normal">(one per line)</span>
                  </label>
                  <textarea
                    id="images"
                    name="images"
                    rows={3}
                    value={formData.images}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
                    className={`mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-slate-900 outline-1 -outline-offset-1 ${
                      errors.images ? 'outline-red-500' : 'outline-slate-300'
                    } placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm`}
                  />
                  {errors.images && <p className="mt-1 text-sm text-red-600">{errors.images}</p>}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="flowerType"
                      className="block text-sm font-medium text-slate-900"
                    >
                      Flower Type
                    </label>
                    <select
                      id="flowerType"
                      name="flowerType"
                      value={formData.flowerType}
                      onChange={handleInputChange}
                      className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm"
                    >
                      <option value="">Select flower type</option>
                      {FLOWER_TYPES.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="color"
                      className="block text-sm font-medium text-slate-900"
                    >
                      Color
                    </label>
                    <select
                      id="color"
                      name="color"
                      value={formData.color}
                      onChange={handleInputChange}
                      className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm"
                    >
                      <option value="">Select color</option>
                      {PRODUCT_COLORS.map((color) => (
                        <option key={color.value} value={color.value}>
                          {color.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="occasion"
                      className="block text-sm font-medium text-slate-900"
                    >
                      Occasion
                    </label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleInputChange}
                      className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm"
                    >
                      <option value="">Select occasion</option>
                      {OCCASION_TYPES.map((occ) => (
                        <option key={occ.value} value={occ.value}>
                          {occ.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="tags" className="block text-sm font-medium text-slate-900">
                    Tags{' '}
                    <span className="text-slate-500 font-normal">(comma separated)</span>
                  </label>
                  <input
                    id="tags"
                    name="tags"
                    type="text"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="romantic, elegant, premium"
                    className="mt-2 block w-full rounded-md bg-white px-3 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm"
                  />
                </div>

                <div className="flex flex-wrap gap-6">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="inStock"
                      checked={formData.inStock}
                      onChange={handleInputChange}
                      className="h-4 w-4 rounded border-slate-300 text-cyan-700 focus:ring-cyan-700"
                    />
                    <span className="text-sm font-medium text-slate-900">In Stock</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                      className="h-4 w-4 rounded border-slate-300 text-cyan-700 focus:ring-cyan-700"
                    />
                    <span className="text-sm font-medium text-slate-900">Featured</span>
                  </label>
                </div>

                {submitMessage && (
                  <div
                    className={`p-4 rounded-md ${
                      submitMessage.type === 'success'
                        ? 'bg-green-50 text-green-700'
                        : 'bg-red-50 text-red-700'
                    }`}
                  >
                    {submitMessage.text}
                  </div>
                )}

                <div className="flex gap-3 pt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={onClose}
                    className="flex-1 rounded-md bg-slate-100 px-3 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 transition-all duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 rounded-md bg-cyan-700 px-3 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                  >
                    {loading ? 'Saving...' : editProduct ? 'Update Product' : 'Add Product'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer onNavigate={onNavigate} />
      <ScrollToTopButton />
    </div>
  )
}
