import { useState, useRef } from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import WorkshopsBanner from './WorkshopsBanner'
import WorkshopsCTA from './WorkshopsCTA'
import WorkshopsTabs from './WorkshopsTabs'
import WorkshopsPagination from './WorkshopsPagination'
import HandTiedImg from '../../assets/Workshops/hand_tied.jpg'
import ClassicVaseImg from '../../assets/Workshops/classic_vase.jpg'
import CascadingImg from '../../assets/Workshops/cascading.jpg'
import FlowerCrownImg from '../../assets/Workshops/flower_crown.jpg'
import PottingPlantImg from '../../assets/Workshops/potting_plant.jpg'
import FamilyCraftingImg from '../../assets/Workshops/family_crafting.jpg'
import SmallBouquetImg from '../../assets/Workshops/small_bouquet.jpg'
import IkebanaMoribanaImg from '../../assets/Workshops/ikebana_moribana.jpg'
import NageireIkebanaImg from '../../assets/Workshops/nageire_ikebana.jpg'
import MinimalistIkebanaImg from '../../assets/Workshops/minimalist_ikebana.jpg'
import IkebanaClassicImg from '../../assets/Workshops/ikebana_classic.jpg'
import AutumnIkebanaImg from '../../assets/Workshops/autumn_ikebana.jpg'
import SpringGardenImg from '../../assets/Workshops/spring_garden_style.jpg'
import ChristmasWreathImg from '../../assets/Workshops/christmas_wreath.jpg'
import ThanksgivingCenterpieceImg from '../../assets/Workshops/thanksgiving_centerpiece.jpg'

const allFiles = [
  // Beginner Category (2 items)
  {
    title: 'Your First Hand-Tied Bouquet',
    category: 'Beginner',
    source: HandTiedImg,
    imgalt: 'Your First Hand-Tied Bouquet',
  },
  {
    title: 'Classic Vase Arrangement',
    category: 'Beginner',
    source: ClassicVaseImg,
    imgalt: 'Classic Vase Arrangement',
  },

  // Advanced Category (1 items)
  {
    title: 'The Art of the Cascading Bouquet',
    category: 'Advanced',
    source: CascadingImg,
    imgalt: 'The Art of the Cascading Bouquet',
  },

  // Kid & Family Category (4 items)
  {
    title: 'Fun with Flower Crowns',
    category: 'Kids & Family',
    source: FlowerCrownImg,
    imgalt: 'Fun with Flower Crowns',
  },
  {
    title: 'Little Sprouts\' Potted Friends',
    category: 'Kids & Family',
    source: PottingPlantImg,
    imgalt: 'Little Sprouts\' Potted Friends',
  },
  {
    title: 'Family Centerpiece Crafting',
    category: 'Kids & Family',
    source: FamilyCraftingImg,
    imgalt: 'Family Centerpiece Crafting',
  },
  {
    title: 'My First Mini-Bouquet',
    category: 'Kids & Family',
    source: SmallBouquetImg,
    imgalt: 'My First Mini-Bouquet',
  },

  // Ikebana Category (5 items)
  {
    title: 'Intro to Ikebana: Moribana Style',
    category: 'Ikebana',
    source: IkebanaMoribanaImg,
    imgalt: 'Intro to Ikebana: Moribana Style',
  },
  {
    title: 'Nageire: The Art of Thrown Flowers',
    category: 'Ikebana',
    source: NageireIkebanaImg,
    imgalt: 'Nageire: The Art of Thrown Flowers',
  },
  {
    title: 'Minimalist Arrangements for Modern Homes',
    category: 'Ikebana',
    source: MinimalistIkebanaImg,
    imgalt: 'Minimalist Arrangements for Modern Homes',
  },
  {
    title: 'Understanding Shin, Soe & Hikae',
    category: 'Ikebana',
    source: IkebanaClassicImg,
    imgalt: 'Understanding Shin, Soe & Hikae',
  },
  {
    title: 'Seasonal Ikebana Expressions',
    category: 'Ikebana',
    source: AutumnIkebanaImg,
    imgalt: 'Seasonal Ikebana Expressions',
  },

  // Seasonal Category (3 items)
  {
    title: 'The Lush Spring Garden Bouquet',
    category: 'Seasonal',
    source: SpringGardenImg,
    imgalt: 'The Lush Spring Garden Bouquet',
  },
  {
    title: 'Festive Holiday Wreath Making',
    category: 'Seasonal',
    source: ChristmasWreathImg,
    imgalt: 'Festive Holiday Wreath Making',
  },
  {
    title: 'Autumnal Centerpiece Design',
    category: 'Seasonal',
    source: ThanksgivingCenterpieceImg,
    imgalt: 'Autumnal Centerpiece Design',
  },
]

interface WorkshopsProps {
  onNavigate?: (page: string) => void
}

export default function Workshops({ onNavigate }: WorkshopsProps) {
  const [activeTab, setActiveTab] = useState('All Workshops')
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
  const filteredFiles = activeTab === 'All Workshops' 
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
      <WorkshopsBanner onNavigate={onNavigate} />
      
      {/* Tabs Section */}
      <WorkshopsTabs activeTab={activeTab} onTabChange={handleTabChange} />
      
      <div className="bg-white" ref={galleryRef}>
        {/* Main Content */}
        <div className="relative mx-auto max-w-7xl px-4 py-20 pt-16 sm:px-6 sm:py-20 sm:pt-16 lg:px-8 lg:py-20 lg:pt-16">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-4xl font-semibold tracking-tight text-cyan-600">
              {activeTab === 'All Workshops' ? 'The Art of Floral Design' : `${activeTab} Studio`}
            </h2>
            <p className="mt-4 text-lg/8 text-slate-700">
              {activeTab === 'All Workshops' 
                ? 'Learn the art of floral design in our hands-on workshops. We offer inspiring classes for all skill levels, guiding you to create beauty with your own hands.'
                : `Join our hands-on ${activeTab.toLowerCase()} workshop and learn to craft your own floral masterpiece.`
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

      <WorkshopsCTA />
      
      {/* Pagination */}
      <WorkshopsPagination
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