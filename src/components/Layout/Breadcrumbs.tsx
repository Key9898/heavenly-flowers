import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid'

interface BreadcrumbsProps {
  pages: Array<{
    name: string
    href: string
    current: boolean
  }>
  onNavigate?: (page: string) => void
  variant?: 'light' | 'dark'
}

export default function Breadcrumbs({ pages, onNavigate, variant = 'light' }: BreadcrumbsProps) {
  const handleNavigation = (href: string) => {
    if (onNavigate && href.startsWith('#')) {
      const page = href.substring(1).toLowerCase()
      onNavigate(page)
    }
  }
  const textColors = variant === 'dark' ? {
    homeIcon: 'text-white/70 hover:text-white',
    chevron: 'text-white/50',
    text: 'text-white/80 hover:text-white'
  } : {
    homeIcon: 'text-slate-400 hover:text-slate-500',
    chevron: 'text-slate-400',
    text: 'text-slate-500 hover:text-slate-700'
  }
  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <button 
              type="button"
              onClick={() => handleNavigation('#home')} 
              className="focus:outline-none"
            >
              <HomeIcon aria-hidden="true" className={`size-5 shrink-0 ${textColors.homeIcon}`} />
              <span className="sr-only">Home</span>
            </button>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <ChevronRightIcon aria-hidden="true" className={`size-5 shrink-0 ${textColors.chevron}`} />
              <button
                type="button"
                onClick={() => handleNavigation(page.href)}
                aria-current={page.current ? 'page' : undefined}
                className={`ml-4 text-sm font-medium focus:outline-none ${textColors.text}`}
              >
                {page.name}
              </button>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}