import { useState, useRef, useEffect } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, ArrowPathIcon } from '@heroicons/react/20/solid'
import { useProducts } from '../../hooks/useProducts'
import type { Product, FlowerType, ProductColor, OccasionType } from '../../types'
import CreationsPagination from './CreationsPagination'
import AllFlowersBanner from './AllFlowersBanner'
import RosesBanner from './RosesBanner'
import TulipsBanner from './TulipsBanner'
import LiliesBanner from './LiliesBanner'
import OrchidsBanner from './OrchidsBanner'
import SunflowersBanner from './SunflowersBanner'
import ForgetMeNotBanner from './ForgetMeNotBanner'
import CarnationsBanner from './CarnationsBanner'
import DaisiesBanner from './DaisiesBanner'
import PeoniesBanner from './PeoniesBanner'
import MixedBouquetBanner from './MixedBouquetBanner'
import placeholderImg from '../../assets/Product/mixed_bouquet.jpg'

const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'red', label: 'Red' },
      { value: 'white', label: 'White' },
      { value: 'pink', label: 'Pink' },
      { value: 'yellow', label: 'Yellow' },
      { value: 'blue', label: 'Blue' },
      { value: 'orange', label: 'Orange' },
      { value: 'purple', label: 'Purple' },
      { value: 'mixed-colors', label: 'Mixed Colors' },
    ],
  },
  {
    id: 'flowers',
    name: 'Flowers',
    options: [
      { value: 'all-products', label: 'All Products' },
      { value: 'roses', label: 'Roses' },
      { value: 'tulips', label: 'Tulips' },
      { value: 'lilies', label: 'Lilies' },
      { value: 'orchids', label: 'Orchids' },
      { value: 'sunflowers', label: 'Sunflowers' },
      { value: 'forget-me-not', label: 'Forget-me-not' },
      { value: 'carnations', label: 'Carnations' },
      { value: 'daisies', label: 'Daisies' },
      { value: 'peonies', label: 'Peonies' },
      { value: 'mixed-bouquet', label: 'Mixed Bouquet' },
    ],
  },
  {
    id: 'price',
    name: 'Price',
    options: [
      { value: 'under-400', label: 'Under ฿400' },
      { value: '400-600', label: '฿400 - ฿600' },
      { value: '600-800', label: '฿600 - ฿800' },
      { value: '800-1000', label: '฿800 - ฿1000' },
      { value: 'over-1000', label: 'Over ฿1000' },
    ],
  },
  {
    id: 'occasion',
    name: 'Occasion',
    options: [
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
    ],
  },
]

const sortOptions = [
  { name: 'Price: Low to High', value: 'price-low-high', current: true },
  { name: 'Price: High to Low', value: 'price-high-low', current: false },
  { name: 'Name: A to Z', value: 'name-a-z', current: false },
  { name: 'Name: Z to A', value: 'name-z-a', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const formatPrice = (price: number): string => {
  return `฿${price.toLocaleString()}`
}

interface CreationsProductsProps {
  onNavigate?: (page: string) => void
}

export default function CreationsProducts({ onNavigate }: CreationsProductsProps) {
  const {
    products,
    loading,
    error,
    hasMore,
    fetchProducts,
  } = useProducts()

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedFlowerType, setSelectedFlowerType] = useState<string>('all-products')
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('')
  const [selectedOccasion, setSelectedOccasion] = useState<string>('')
  const [currentSort, setCurrentSort] = useState<string>('price-low-high')
  const itemsPerPage = 6
  const productsRef = useRef<HTMLElement>(null)

  useEffect(() => {
    fetchProducts(true)
  }, [fetchProducts])

  const matchesPriceRange = (product: Product, priceRange: string): boolean => {
    const price = product.price
    switch (priceRange) {
      case 'under-400':
        return price < 400
      case '400-600':
        return price >= 400 && price <= 600
      case '600-800':
        return price >= 600 && price <= 800
      case '800-1000':
        return price >= 800 && price <= 1000
      case 'over-1000':
        return price > 1000
      default:
        return true
    }
  }

  const getFilteredProducts = (): Product[] => {
    let filtered = products

    if (selectedFlowerType !== 'all-products') {
      filtered = filtered.filter(
        (product) => product.flowerType === (selectedFlowerType as FlowerType)
      )
    }

    if (selectedColor) {
      filtered = filtered.filter(
        (product) => product.color === (selectedColor as ProductColor)
      )
    }

    if (selectedPriceRange) {
      filtered = filtered.filter((product) =>
        matchesPriceRange(product, selectedPriceRange)
      )
    }

    if (selectedOccasion) {
      filtered = filtered.filter(
        (product) => product.occasion === (selectedOccasion as OccasionType)
      )
    }

    return filtered
  }

  const getSortedProducts = (productsToSort: Product[]): Product[] => {
    const sorted = [...productsToSort]

    switch (currentSort) {
      case 'price-low-high':
        return sorted.sort((a, b) => a.price - b.price)
      case 'price-high-low':
        return sorted.sort((a, b) => b.price - a.price)
      case 'name-a-z':
        return sorted.sort((a, b) => a.name.localeCompare(b.name))
      case 'name-z-a':
        return sorted.sort((a, b) => b.name.localeCompare(a.name))
      default:
        return sorted
    }
  }

  const filteredProducts = getFilteredProducts()
  const sortedProducts = getSortedProducts(filteredProducts)

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = sortedProducts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    if (productsRef.current) {
      productsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const handleFlowerTypeChange = (flowerType: string) => {
    setSelectedFlowerType(flowerType)
    setCurrentPage(1)
  }

  const handleColorChange = (color: string) => {
    setSelectedColor(selectedColor === color ? '' : color)
    setCurrentPage(1)
  }

  const handlePriceChange = (priceRange: string) => {
    setSelectedPriceRange(selectedPriceRange === priceRange ? '' : priceRange)
    setCurrentPage(1)
  }

  const handleOccasionChange = (occasion: string) => {
    setSelectedOccasion(selectedOccasion === occasion ? '' : occasion)
    setCurrentPage(1)
  }

  const handleSortChange = (sortValue: string) => {
    setCurrentSort(sortValue)
    setCurrentPage(1)
  }

  const clearAllFilters = () => {
    setSelectedFlowerType('all-products')
    setSelectedColor('')
    setSelectedPriceRange('')
    setSelectedOccasion('')
    setCurrentPage(1)
  }

  const handleRefresh = () => {
    fetchProducts(true)
  }

  const renderBanner = () => {
    switch (selectedFlowerType) {
      case 'roses':
        return <RosesBanner onNavigate={onNavigate} />
      case 'tulips':
        return <TulipsBanner onNavigate={onNavigate} />
      case 'lilies':
        return <LiliesBanner onNavigate={onNavigate} />
      case 'orchids':
        return <OrchidsBanner onNavigate={onNavigate} />
      case 'sunflowers':
        return <SunflowersBanner onNavigate={onNavigate} />
      case 'forget-me-not':
        return <ForgetMeNotBanner onNavigate={onNavigate} />
      case 'carnations':
        return <CarnationsBanner onNavigate={onNavigate} />
      case 'daisies':
        return <DaisiesBanner onNavigate={onNavigate} />
      case 'peonies':
        return <PeoniesBanner onNavigate={onNavigate} />
      case 'mixed-bouquet':
        return <MixedBouquetBanner onNavigate={onNavigate} />
      default:
        return <AllFlowersBanner onNavigate={onNavigate} />
    }
  }

  const getProductImage = (product: Product): string => {
    if (product.images && product.images.length > 0) {
      return product.images[0]
    }
    return placeholderImg
  }

  return (
    <div>
      {renderBanner()}

      {mobileFiltersOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-40 bg-transparent"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed top-22 left-0 right-0 z-50 bg-white rounded-lg shadow-xl max-h-[80vh] overflow-y-auto mx-4">
            <div className="flex items-center justify-between px-4 py-4 border-b border-slate-200">
              <h2 className="text-lg font-medium text-slate-900">Filters</h2>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={clearAllFilters}
                  className="text-sm text-cyan-600 hover:text-cyan-500 font-medium"
                >
                  Clear
                </button>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="relative flex size-7 items-center justify-center"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </button>
              </div>
            </div>

            <form className="px-4 pb-6">
              {filters.map((section) => (
                <Disclosure
                  key={section.name}
                  as="div"
                  className="border-t border-slate-900/10 py-6 first:border-t-0"
                >
                  <legend className="-mx-2 -my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white text-sm text-slate-400 hover:text-slate-500">
                      <span className="font-medium text-slate-900">{section.name}</span>
                      <span className="ml-6 flex items-center">
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="size-5 rotate-0 transform group-data-open:-rotate-180"
                        />
                      </span>
                    </DisclosureButton>
                  </legend>
                  <DisclosurePanel className="px-4 pt-4 pb-2">
                    <div className="space-y-6">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3">
                          <div className="flex h-5 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                              <input
                                defaultValue={option.value}
                                id={`${section.id}-${optionIdx}-mobile`}
                                name={`${section.id}[]`}
                                type="checkbox"
                                checked={
                                  section.id === 'flowers'
                                    ? selectedFlowerType === option.value
                                    : section.id === 'color'
                                      ? selectedColor === option.value
                                      : section.id === 'price'
                                        ? selectedPriceRange === option.value
                                        : section.id === 'occasion'
                                          ? selectedOccasion === option.value
                                          : false
                                }
                                onChange={() => {
                                  if (section.id === 'flowers') {
                                    handleFlowerTypeChange(option.value)
                                  } else if (section.id === 'color') {
                                    handleColorChange(option.value)
                                  } else if (section.id === 'price') {
                                    handlePriceChange(option.value)
                                  } else if (section.id === 'occasion') {
                                    handleOccasionChange(option.value)
                                  }
                                }}
                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-slate-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-slate-300 disabled:bg-slate-100 disabled:checked:bg-slate-100 forced-colors:appearance-auto"
                              />
                              <svg
                                fill="none"
                                viewBox="0 0 14 14"
                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-slate-950/25"
                              >
                                <path
                                  d="M3 8L6 11L11 3.5"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-checked:opacity-100"
                                />
                                <path
                                  d="M3 7H11"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                />
                              </svg>
                            </div>
                          </div>
                          <label
                            htmlFor={`${section.id}-${optionIdx}-mobile`}
                            className="text-sm text-slate-500"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>
          </div>
        </div>
      )}

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-slate-900/10 pt-8 pb-8">
          <div className="hidden lg:flex items-center gap-45">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Filters</h1>
            <button
              type="button"
              onClick={clearAllFilters}
              className="pt-2 text-1xl text-cyan-600 hover:text-cyan-500 font-medium"
            >
              Clear
            </button>
          </div>

          <div className="flex items-center justify-end w-full gap-4">
            <button
              type="button"
              onClick={handleRefresh}
              disabled={loading}
              className="p-2 text-slate-400 hover:text-slate-500 disabled:opacity-50"
              title="Refresh products"
            >
              <ArrowPathIcon className={`size-5 ${loading ? 'animate-spin' : ''}`} />
            </button>

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="group inline-flex justify-center text-sm font-medium text-slate-700 hover:text-slate-900">
                  Sort
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 ml-1 size-5 shrink-0 text-slate-400 group-hover:text-slate-500"
                  />
                </MenuButton>
              </div>

              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <button
                          onClick={() => handleSortChange(option.value)}
                          className={classNames(
                            option.value === currentSort
                              ? 'font-medium text-slate-900'
                              : 'text-slate-500',
                            'block w-full px-4 py-2 text-sm text-left data-focus:bg-slate-100 data-focus:outline-none'
                          )}
                        >
                          {option.name}
                        </button>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Transition>
            </Menu>

            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="-m-2 ml-4 p-2 text-slate-400 hover:text-slate-500 sm:ml-6 lg:hidden"
            >
              <span className="sr-only">Filters</span>
              <FunnelIcon aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-12 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <form className="hidden lg:block">
              {filters.map((section) => (
                <Disclosure
                  key={section.name}
                  as="div"
                  className="border-b border-slate-900/10 py-6"
                >
                  <legend className="-my-3 flow-root">
                    <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-slate-400 hover:text-slate-500">
                      <span className="font-medium text-slate-900">{section.name}</span>
                      <span className="ml-6 flex items-center">
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="size-5 rotate-0 transform group-data-open:-rotate-180"
                        />
                      </span>
                    </DisclosureButton>
                  </legend>
                  <DisclosurePanel className="pt-6">
                    <div className="space-y-4">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3">
                          <div className="flex h-5 shrink-0 items-center">
                            <div className="group grid size-4 grid-cols-1">
                              <input
                                defaultValue={option.value}
                                id={`${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                type="checkbox"
                                checked={
                                  section.id === 'flowers'
                                    ? selectedFlowerType === option.value
                                    : section.id === 'color'
                                      ? selectedColor === option.value
                                      : section.id === 'price'
                                        ? selectedPriceRange === option.value
                                        : section.id === 'occasion'
                                          ? selectedOccasion === option.value
                                          : false
                                }
                                onChange={() => {
                                  if (section.id === 'flowers') {
                                    handleFlowerTypeChange(option.value)
                                  } else if (section.id === 'color') {
                                    handleColorChange(option.value)
                                  } else if (section.id === 'price') {
                                    handlePriceChange(option.value)
                                  } else if (section.id === 'occasion') {
                                    handleOccasionChange(option.value)
                                  }
                                }}
                                className="col-start-1 row-start-1 appearance-none rounded-sm border border-slate-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-slate-300 disabled:bg-slate-100 disabled:checked:bg-slate-100 forced-colors:appearance-auto"
                              />
                              <svg
                                fill="none"
                                viewBox="0 0 14 14"
                                className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-slate-950/25"
                              >
                                <path
                                  d="M3 8L6 11L11 3.5"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-checked:opacity-100"
                                />
                                <path
                                  d="M3 7H11"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="opacity-0 group-has-indeterminate:opacity-100"
                                />
                              </svg>
                            </div>
                          </div>
                          <label
                            htmlFor={`${section.id}-${optionIdx}`}
                            className="text-sm text-slate-500"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>

            <section ref={productsRef} className="lg:col-span-3">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="flex flex-col items-center gap-4">
                    <ArrowPathIcon className="size-8 text-cyan-600 animate-spin" />
                    <p className="text-slate-500">Loading products...</p>
                  </div>
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-red-600 mb-2">Error Loading Products</h3>
                  <p className="text-slate-500 mb-4">{error}</p>
                  <button
                    onClick={handleRefresh}
                    className="px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-500 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              ) : currentProducts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-slate-900 mb-2">
                    No Products Available
                  </h3>
                  <p className="text-slate-500">
                    Try adjusting your filters to see more products.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {currentProducts.map((product) => (
                      <div key={product.id} className="group relative">
                        <img
                          alt={product.name}
                          src={getProductImage(product)}
                          className="aspect-square w-full rounded-md bg-slate-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                        />
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-sm font-medium text-cyan-600">
                              <span className="cursor-pointer">{product.name}</span>
                            </h3>
                            <p className="mt-1 text-sm text-slate-700 line-clamp-2">
                              {product.description}
                            </p>
                          </div>
                          <p className="text-sm font-medium text-slate-900">
                            {formatPrice(product.price)}
                          </p>
                        </div>
                        {!product.inStock && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            Out of Stock
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {hasMore && (
                    <div className="mt-8 text-center">
                      <button
                        onClick={() => fetchProducts()}
                        disabled={loading}
                        className="px-6 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-500 transition-colors disabled:opacity-50"
                      >
                        Load More Products
                      </button>
                    </div>
                  )}
                </>
              )}

              {filteredProducts.length > 0 && (
                <CreationsPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  totalPosts={filteredProducts.length}
                  postsPerPage={itemsPerPage}
                />
              )}
            </section>
          </div>
        </section>
      </main>
    </div>
  )
}
