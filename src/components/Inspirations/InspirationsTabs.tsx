import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import { useRef } from 'react'

const tabs = [
  { name: 'All Posts', href: '#', current: false },
  { name: 'Seasonal', href: '#', current: false },
  { name: 'Care Tips', href: '#', current: false },
  { name: 'Life & Style', href: '#', current: false },
  { name: 'DIY', href: '#', current: false },
]

interface TabsProps {
  activeTab: string
  onTabChange: (tabName: string) => void
}

export default function InspirationsTabs({ activeTab, onTabChange }: TabsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleTabClick = (tabName: string) => {
    onTabChange(tabName)
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -120, behavior: 'smooth' })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 120, behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-6 border-b border-slate-900/10">
          {/* Mobile horizontal scrollable tabs with navigation arrows */}
          <div className="sm:hidden">
            <div className="relative flex items-center">
              {/* Left arrow */}
              <button
                type="button"
                onClick={scrollLeft}
                className="flex-shrink-0 p-1 mb-2 mr-2 rounded-full bg-white shadow-md border border-slate-200 hover:bg-slate-50 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeftIcon className="h-4 w-4 text-slate-600" />
              </button>

              {/* Scrollable tabs container */}
              <nav 
                ref={scrollContainerRef}
                className="flex space-x-6 overflow-x-auto scrollbar-hide pr-1 pb-2 flex-1"
              >
                {tabs.map((tab) => (
                  <button
                    type="button"
                    key={tab.name}
                    onClick={() => handleTabClick(tab.name)}
                    className={`flex-shrink-0 whitespace-nowrap text-sm font-medium transition-colors ${
                      activeTab === tab.name
                        ? 'border-cyan-500 text-cyan-600'
                      : 'border-transparent text-slate-600 hover:text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>

              {/* Right arrow */}
              <button
                type="button"
                onClick={scrollRight}
                className="flex-shrink-0 p-1 mb-2 ml-2 rounded-full bg-white shadow-md border border-slate-200 hover:bg-slate-50 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRightIcon className="h-4 w-4 text-slate-600" />
              </button>
            </div>
          </div>

          {/* Desktop tabs */}
          <div className="hidden sm:block">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  type="button"
                  key={tab.name}
                  onClick={() => handleTabClick(tab.name)}
                  className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.name
                      ? 'border-cyan-500 text-cyan-600'
                      : 'border-transparent text-slate-600 hover:text-slate-700 hover:border-slate-300'
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}