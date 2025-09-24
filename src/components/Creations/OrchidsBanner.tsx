import orchidsBannerImg from '../../assets/Banner/orchids_banner.jpg'
import Breadcrumbs from '../Layout/Breadcrumbs'

interface OrchidsBannerProps {
  onNavigate?: (page: string) => void
}

export default function OrchidsBanner({ onNavigate }: OrchidsBannerProps) {
  const breadcrumbPages = [
    { name: 'Orchids', href: '#orchids', current: true }
  ]

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={orchidsBannerImg} alt="Orchids banner" className="h-full w-full object-cover object-center" />
      </div>
      <div className="relative bg-opacity-75 py-40 px-6 sm:py-48 sm:px-12 lg:px-16 lg:py-52">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block sm:inline">Beautiful Rose Collections</span>
          </h2>
          <p className="mt-3 text-xl text-white line-clamp-2 sm:line-clamp-3">
            Exotic luxury and long-lasting elegance. Explore our stunning collection of premium orchid arrangements.
          </p>
          <div className="mt-6">
            <Breadcrumbs pages={breadcrumbPages} onNavigate={onNavigate} variant="dark" />
          </div>
        </div>
      </div>
    </div>
  )
}