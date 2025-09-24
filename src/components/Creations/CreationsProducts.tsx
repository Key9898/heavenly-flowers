import { useState, useRef } from 'react'
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
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/20/solid'
import roseImg from '../../assets/Product/red_rose_bouquet.jpg'
import tulipImg from '../../assets/Product/pink_tulip_bouquet.jpg'
import lilyImg from '../../assets/Product/white_lily_bouquet.jpg'
import orchidImg from '../../assets/Product/purple_orchid.jpg'
import sunflowerImg from '../../assets/Product/sunflower_bouquet.jpg'
import forgetMeNotImg from '../../assets/Product/forget_me_nots_bouquet.jpg'
import carnationImg from '../../assets/Product/orange_carnation_bouquet.jpg'
import daisyImg from '../../assets/Product/white_daisy_bouquet.jpg'
import peonyImg from '../../assets/Product/red_peony_bouquet.jpg'
import pTulipImg from '../../assets/Product/purple_tulip_bouquet.jpg'
import mixedBouquetImg from '../../assets/Product/mixed_bouquet.jpg'
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
      { value: 'valentines-day', label: 'Valentine\'s Day' },
      { value: 'mothers-day', label: 'Mother\'s Day' },
      { value: 'fathers-day', label: 'Father\'s Day' },
      { value: 'corporate', label: 'Corporate' },
      { value: 'congratulations', label: 'Congratulations' },
      { value: 'apology', label: 'Apology' },
      { value: 'just-because', label: 'Just Because' },
    ],
  },
]

const products = [
  {
    id: 1,
    name: 'Red Rose Bouquet',
    href: '#',
    price: '฿450',
    description: 'Beautiful red roses perfect for romantic occasions.',
    color: 'red',
    category: 'roses',
    occasion: 'valentines-day',
    imageSrc: roseImg,
    imageAlt: 'Red rose bouquet',
  },
  {
    id: 2,
    name: 'Pink Tulip Bouquet',
    href: '#',
    price: '฿550',
    description: 'Delicate pink tulips symbolizing happiness and affection.',
    color: 'pink',
    category: 'tulips',
    occasion: 'mothers-day',
    imageSrc: tulipImg,
    imageAlt: 'Pink tulip bouquet',
  },
  {
    id: 3,
    name: 'White Lily Bouquet',
    href: '#',
    price: '฿599',
    description: 'Elegant white lilies representing purity and majesty.',
    color: 'white',
    category: 'lilies',
    occasion: 'wedding',
    imageSrc: lilyImg,
    imageAlt: 'White lily bouquet',
  },
  {
    id: 4,
    name: 'Purple Orchid Bouquet',
    href: '#',
    price: '฿750',
    description: 'Exotic purple orchids for a touch of luxury and admiration.',
    color: 'purple',
    category: 'orchids',
    occasion: 'congratulations',
    imageSrc: orchidImg,
    imageAlt: 'Purple orchid bouquet',
  },
  {
    id: 5,
    name: 'Sunflowers Bouquet',
    href: '#',
    price: '฿399',
    description: 'Radiant sunflowers to bring joy and vibrancy.',
    color: 'yellow',
    category: 'sunflowers',
    occasion: 'graduation',
    imageSrc: sunflowerImg,
    imageAlt: 'Sunflowers bouquet',
  },
  {
    id: 6,
    name: 'Blue Forget-me-not',
    href: '#',
    price: '฿1099',
    description: 'Charming blue forget-me-nots that signify true love and remembrance.',
    color: 'blue',
    category: 'forget-me-not',
    occasion: 'just-because',
    imageSrc: forgetMeNotImg,
    imageAlt: 'Blue forget-me-nots bouquet',
  },
  {
    id: 7,
    name: 'Orange Carnation Bouquet',
    href: '#',
    price: '฿420',
    description: 'Vibrant orange carnations expressing enthusiasm and warmth.',
    color: 'orange',
    category: 'carnations',
    occasion: 'fathers-day',
    imageSrc: carnationImg,
    imageAlt: 'Orange carnation bouquet',
  },
  {
    id: 8,
    name: 'White Daisy Bouquet',
    href: '#',
    price: '฿350',
    description: 'Simple and sweet white daisies for innocence and new beginnings.',
    color: 'white',
    category: 'daisies',
    occasion: 'apology',
    imageSrc: daisyImg,
    imageAlt: 'White daisy bouquet',
  },
  {
    id: 9,
    name: 'Red Peony Bouquet',
    href: '#',
    price: '฿850',
    description: 'Luxurious red peonies that symbolize love, honor, and prosperity.',
    color: 'red',
    category: 'peonies',
    occasion: 'anniversary',
    imageSrc: peonyImg,
    imageAlt: 'Red peony bouquet',
  },
  {
    id: 10,
    name: 'Purple Tulip Bouquet',
    href: '#',
    price: '฿480',
    description: 'A luxurious arrangement of jewel-toned orchids and blossoms, perfect for making a bold statement.',
    color: 'purple',
    category: 'tulips',
    occasion: 'corporate',
    imageSrc: pTulipImg,
    imageAlt: 'Purple tulip bouquet',
  },
  {
    id: 11,
    name: 'Mixed Bouquet',
    href: '#',
    price: '฿580',
    description: 'A vibrant medley of seasonal flowers, artfully arranged for any occasion.',
    color: 'mixed-colors',
    category: 'mixed-bouquet',
    occasion: 'birthday',
    imageSrc: mixedBouquetImg,
    imageAlt: 'Mixed flower bouquet',
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

interface CreationsProductsProps {
  onNavigate?: (page: string) => void
}

export default function CreationsProducts({ onNavigate }: CreationsProductsProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedFlowerType, setSelectedFlowerType] = useState<string>('all-products')
  const [selectedColor, setSelectedColor] = useState<string>('') // Changed to single value
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('') // Changed to single value
  const [selectedOccasion, setSelectedOccasion] = useState<string>('') // Changed to single value
  const [currentSort, setCurrentSort] = useState<string>('price-low-high')
  const itemsPerPage = 6
  const productsRef = useRef<HTMLElement>(null)

  // Helper function to parse price
  const parsePrice = (priceString: string): number => {
    return parseInt(priceString.replace('฿', '').replace(',', ''))
  }

  // Helper function to check if product matches price range
  const matchesPriceRange = (product: any, priceRange: string): boolean => {
    const price = parsePrice(product.price)
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

  // Filter products based on all selected filters
  const getFilteredProducts = () => {
    let filtered = products

    // Filter by flower type
    if (selectedFlowerType !== 'all-products') {
      filtered = filtered.filter(product => product.category === selectedFlowerType)
    }

    // Filter by color (single selection)
    if (selectedColor) {
      filtered = filtered.filter(product => product.color === selectedColor)
    }

    // Filter by price range (single selection)
    if (selectedPriceRange) {
      filtered = filtered.filter(product => matchesPriceRange(product, selectedPriceRange))
    }

    // Filter by occasion (single selection)
    if (selectedOccasion) {
      filtered = filtered.filter(product => product.occasion === selectedOccasion)
    }

    return filtered
  }

  // Sort products
  const getSortedProducts = (products: any[]) => {
    const sorted = [...products]

    switch (currentSort) {
      case 'price-low-high':
        return sorted.sort((a, b) => parsePrice(a.price) - parsePrice(b.price))
      case 'price-high-low':
        return sorted.sort((a, b) => parsePrice(b.price) - parsePrice(a.price))
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

  // Calculate pagination values
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = sortedProducts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    if (productsRef.current) {
      productsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleFlowerTypeChange = (flowerType: string) => {
    setSelectedFlowerType(flowerType)
    setCurrentPage(1)
  }

  const handleColorChange = (color: string) => {
    setSelectedColor(selectedColor === color ? '' : color) // Toggle selection
    setCurrentPage(1)
  }

  const handlePriceChange = (priceRange: string) => {
    setSelectedPriceRange(selectedPriceRange === priceRange ? '' : priceRange) // Toggle selection
    setCurrentPage(1)
  }

  const handleOccasionChange = (occasion: string) => {
    setSelectedOccasion(selectedOccasion === occasion ? '' : occasion) // Toggle selection
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

  // Render appropriate banner based on selected flower type
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

  return (
    <div>
      {/* Dynamic Banner - Only one banner shows based on selection */}
      {renderBanner()}

      {/* Mobile filter slide-down */}
      {mobileFiltersOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setMobileFiltersOpen(false)} />
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

            {/* Mobile Filters */}
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
                                  section.id === 'flowers' ? selectedFlowerType === option.value :
                                    section.id === 'color' ? selectedColor === option.value :
                                      section.id === 'price' ? selectedPriceRange === option.value :
                                        section.id === 'occasion' ? selectedOccasion === option.value :
                                          false
                                }
                                onChange={() => {
                                  if (section.id === 'flowers') {
                                    handleFlowerTypeChange(option.value);
                                  } else if (section.id === 'color') {
                                    handleColorChange(option.value);
                                  } else if (section.id === 'price') {
                                    handlePriceChange(option.value);
                                  } else if (section.id === 'occasion') {
                                    handleOccasionChange(option.value);
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
                          <label htmlFor={`${section.id}-${optionIdx}-mobile`} className="text-sm text-slate-500">
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

          <div className="flex items-center justify-end w-full">
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
                            option.value === currentSort ? 'font-medium text-slate-900' : 'text-slate-500',
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
            {/* Desktop Filters */}
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
                                  section.id === 'flowers' ? selectedFlowerType === option.value :
                                    section.id === 'color' ? selectedColor === option.value :
                                      section.id === 'price' ? selectedPriceRange === option.value :
                                        section.id === 'occasion' ? selectedOccasion === option.value :
                                          false
                                }
                                onChange={() => {
                                  if (section.id === 'flowers') {
                                    handleFlowerTypeChange(option.value);
                                  } else if (section.id === 'color') {
                                    handleColorChange(option.value);
                                  } else if (section.id === 'price') {
                                    handlePriceChange(option.value);
                                  } else if (section.id === 'occasion') {
                                    handleOccasionChange(option.value);
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
                          <label htmlFor={`${section.id}-${optionIdx}`} className="text-sm text-slate-500">
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </form>

            {/* Product grid */}
            <section ref={productsRef} className="lg:col-span-3">
              {currentProducts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-slate-900 mb-2">No Products Available</h3>
                  <p className="text-slate-500">Try adjusting your filters to see more products.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                  {currentProducts.map((product) => (
                    <div key={product.id} className="group relative">
                      <img
                        alt={product.imageAlt}
                        src={product.imageSrc}
                        className="aspect-square w-full rounded-md bg-slate-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                      />
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-cyan-600">
                            <a href={product.href}>
                              <span aria-hidden="true" className="absolute inset-0" />
                              {product.name}
                            </a>
                          </h3>
                          <p className="mt-1 text-sm text-slate-700 line-clamp-2">{product.description}</p>
                        </div>
                        <p className="text-sm font-medium text-slate-900">{product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination - only show if there are products */}
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