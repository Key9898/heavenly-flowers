import { useState, useRef } from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import ArrangementsBanner from './ArrangementsBanner'
import ArrangementsTabs from './ArrangementsTabs'
import ArrangementsPagination from './ArrangementsPagination'
import BridalBouquetImg from '../../assets/Arrangements/bridal_bouquet.jpg'
import WeddingCenterpieceImg from '../../assets/Arrangements/wedding_centerpiece.jpg'
import WeddingArchImg from '../../assets/Arrangements/wedding_arch.jpg'
import GroomBoutonniereImg from '../../assets/Arrangements/groom_boutonniere.jpg'
import WeddingAisleImg from '../../assets/Arrangements/wedding_aisle.jpg'
import BirthdayBouquetImg from '../../assets/Arrangements/birthday_bouquet.jpg'
import CelebrationCenterpieceImg from '../../assets/Arrangements/celebration_centerpiece.jpg'
import GiftBoxImg from '../../assets/Arrangements/gift_box.jpg'
import BirthdayBloomPlantImg from '../../assets/Arrangements/birthday_bloom_plant.jpg'
import RomanticBouquetImg from '../../assets/Arrangements/romantic_bouquet.jpg'
import DinnerCenterpieceImg from '../../assets/Arrangements/dinner_centerpiece.jpg'
import FutureArrangementImg from '../../assets/Arrangements/future_arrangement.jpg'
import ReceptionOrchidImg from '../../assets/Arrangements/reception_orchid.jpg'
import BoardroomCenterpieceImg from '../../assets/Arrangements/boardroom_centerpiece.jpg'
import CorporateEventImg from '../../assets/Arrangements/corporate_event.jpg' 

const allFiles = [
  // Wedding Category (5 items)
  {
    title: 'Wedding Bouquet',
    category: 'Wedding',
    source: BridalBouquetImg,
    imgalt: 'Wedding Bouquet',
  },
  {
    title: 'Wedding Centerpiece',
    category: 'Wedding',
    source: WeddingCenterpieceImg,
    imgalt: 'Wedding Centerpiece',
  },
  {
    title: 'Elegant Wedding Arch',
    category: 'Wedding',
    source: WeddingArchImg,
    imgalt: 'Elegant Wedding Arch',
  },
  {
    title: 'Groom\'s Boutonnière & Corsages',
    category: 'Wedding',
    source: GroomBoutonniereImg,
    imgalt: 'Groom\'s Boutonnière & Corsages',
  },
  {
    title: 'Ceremony Aisle Decorations',
    category: 'Wedding',
    source: WeddingAisleImg,
    imgalt: 'Ceremony Aisle Decorations',
  },

  // Birthday Category (4 items)
  {
    title: 'The Joyful Birthday Bouquet',
    category: 'Birthday',
    source: BirthdayBouquetImg,
    imgalt: 'The Joyful Birthday Bouquet',
  },
  {
    title: 'Celebration Centerpiece',
    category: 'Birthday',
    source: CelebrationCenterpieceImg,
    imgalt: 'Celebration Centerpiece',
  },
  {
    title: 'The Birthday Surprise Box',
    category: 'Birthday',
    source: GiftBoxImg,
    imgalt: 'The Birthday Surprise Box',
  },
  {
    title: 'The Birthday Bloom Plant',
    category: 'Birthday',
    source: BirthdayBloomPlantImg,
    imgalt: 'The Birthday Bloom Plant',
  },

  // Anniversary Category (2 items)
  {
    title: 'Romantic Anniversary Bouquet',
    category: 'Anniversary',
    source: RomanticBouquetImg,
    imgalt: 'Romantic Anniversary Bouquet',
  },
  {
    title: 'Elegant Dinner Centerpiece',
    category: 'Anniversary',
    source: DinnerCenterpieceImg,
    imgalt: 'Elegant Dinner Centerpiece',
  },

  // Corporate Category (3 items)
  {
    title: 'The Reception Orchid',
    category: 'Corporate',
    source: ReceptionOrchidImg,
    imgalt: 'The Reception Orchid',
  },
  {
    title: 'Modern Boardroom Centerpiece',
    category: 'Corporate',
    source: BoardroomCenterpieceImg,
    imgalt: 'Modern Boardroom Centerpiece',
  },
  {
    title: 'Corporate Event Florals',
    category: 'Corporate',
    source: CorporateEventImg,
    imgalt: 'Corporate Event Florals',
  },

  // Graduation Category (1 items)
  {
    title: 'Bright Future Arrangement',
    category: 'Graduation',
    source: FutureArrangementImg,
    imgalt: 'Bright Future Arrangement',
  },
]

interface ArrangementsProps {
  onNavigate?: (page: string) => void
}

export default function Arrangements({ onNavigate }: ArrangementsProps) {
  const [activeTab, setActiveTab] = useState('All Arrangements')
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8
  const galleryRef = useRef<HTMLDivElement>(null)

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName)
    setCurrentPage(1) // Reset to first page when changing tabs
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to gallery section when page changes
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Filter files based on active tab
  const filteredFiles = activeTab === 'All Arrangements' 
    ? allFiles 
    : allFiles.filter(file => file.category === activeTab)

  // Calculate pagination
  const totalItems = filteredFiles.length
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentItems = filteredFiles.slice(startIndex, endIndex)

  return (
    <>
      <Header onNavigate={onNavigate} activePage="arrangements" />
      <ArrangementsBanner onNavigate={onNavigate} />
      
      {/* Tabs Section */}
      <ArrangementsTabs activeTab={activeTab} onTabChange={handleTabChange} />
      
      <div className="bg-white" ref={galleryRef}>
        {/* Main Content */}
        <div className="relative mx-auto max-w-7xl px-4 py-20 pt-16 sm:px-6 sm:py-20 sm:pt-16 lg:px-8 lg:py-20 lg:pt-16">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-tight text-cyan-600">
              {activeTab === 'All Arrangements' ? 'A Showcase of Floral Artistry' : `${activeTab} Creations`}
            </h2>
            <p className="mt-4 text-lg/8 text-slate-700">
              {activeTab === 'All Arrangements' 
                ? 'Discover our portfolio of bespoke floral designs, where nature\'s elegance meets creative passion. Each arrangement is a testament to our craft.'
                : `Elegance in every bloom. Discover our bespoke ${activeTab.toLowerCase()} arrangements, created to bring a touch of nature's beauty and leave a lasting impression.`
              }
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="mt-16">
            {currentItems.length > 0 ? (
              <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {currentItems.map((file, index) => (
                  <li key={`${file.category}-${startIndex + index}`} className="relative">
                    <div className="group overflow-hidden rounded-lg bg-slate-100 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600">
                      <img
                        alt={file.title}
                        src={file.source}
                        className="pointer-events-none aspect-10/7 rounded-lg object-cover outline -outline-offset-1 outline-black/5 group-hover:opacity-75"
                      />
                      <button type="button" className="absolute inset-0 focus:outline-hidden">
                        <span className="sr-only">View details for {file.title}</span>
                      </button>
                    </div>
                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-slate-900">{file.title}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-slate-500">No arrangements found for this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <ArrangementsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalPosts={filteredFiles.length}
          postsPerPage={itemsPerPage}
        />

      <ScrollToTopButton />
      <Footer onNavigate={onNavigate} />
    </>
  )
}