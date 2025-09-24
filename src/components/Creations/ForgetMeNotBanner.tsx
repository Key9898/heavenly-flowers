import forgetMeNotBannerImg from '../../assets/Banner/forget_me_not_banner.jpg'
import Breadcrumbs from '../Layout/Breadcrumbs'

interface ForgetMeNotBannerProps {
  onNavigate?: (page: string) => void
}

export default function ForgetMeNotBanner({ onNavigate }: ForgetMeNotBannerProps) {
  const breadcrumbPages = [
    { name: 'Forget Me Not', href: '#forget-me-not', current: true }
  ]

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={forgetMeNotBannerImg} alt="Forget Me Not banner" className="h-full w-full object-cover object-center" />
      </div>
      <div className="relative bg-opacity-75 py-40 px-6 sm:py-48 sm:px-12 lg:px-16 lg:py-52">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" />
        <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="block sm:inline">Beautiful Rose Collections</span>
          </h2>
          <p className="mt-3 text-xl text-white line-clamp-2 sm:line-clamp-3">
            A delicate whisper of remembrance and true love. Explore our charming and sentimental floral arrangements.
          </p>
          <div className="mt-6">
            <Breadcrumbs pages={breadcrumbPages} onNavigate={onNavigate} variant="dark" />
          </div>
        </div>
      </div>
    </div>
  )
}