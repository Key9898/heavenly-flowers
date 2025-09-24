import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import Breadcrumbs from '../Layout/Breadcrumbs'
import termsImg from '../../assets/Help&Info/help_info_img.jpg'

const features = [
  { name: 'Order Acceptance', description: 'All orders are subject to availability and confirmation within business hours.' },
  { name: 'Pricing', description: 'Prices subject to change without notice. Confirmed orders honor quoted prices.' },
  { name: 'Cancellation', description: 'Orders may be cancelled up to 2 hours before the scheduled delivery time.' },
  { name: 'Service Area', description: 'Delivery available within designated city limits during business hours.' },
  { name: 'Delivery Attempts', description: 'Maximum of 2 delivery attempts. Redelivery fees may apply for subsequent attempts.' },
  { name: 'Recipient Availability', description: 'Customer is responsible for ensuring the recipient\'s availability at the delivery address.' },
  { name: 'Fresh Flowers', description: 'Only premium quality, fresh flowers selected and arranged by professional florists.' },
  { name: 'Natural Products', description: 'Slight variations in appearance are expected due to seasonal availability and natural characteristics.' },
  { name: 'Quality Guarantee', description: 'Replacement or refund available for products not meeting our quality standards.' },
  { name: 'Force Majeure', description: 'Not responsible for delays caused by weather, natural disasters, or uncontrollable circumstances.' },
  { name: 'Delivery Delays', description: 'Maximum liability limited to the delivery fee refund for delays within our control.' },
  { name: 'Product Damage', description: 'Claims for damaged products must be reported within 2 hours of delivery.' },
]

interface TermsServiceProps {
  onNavigate?: (page: string) => void
}

export default function TermsService({ onNavigate }: TermsServiceProps) {
  const breadcrumbPages = [
    { name: 'Terms of Service', href: '#terms&service', current: true }
  ]

  return (
    <>
      <Header onNavigate={onNavigate} activePage="terms&service" />
      <div className="bg-white">
        <div aria-hidden="true" className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" /> {/* Dark Thing */}
          <img
            alt="Floral Haven Terms of Service - Flower delivery terms and conditions"
            src={termsImg}
            className="h-96 w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-white" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Breadcrumbs pages={breadcrumbPages} onNavigate={onNavigate} variant="dark" />
          </div>
        </div>


        <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-cyan-500 sm:text-4xl">Terms of Service</h2>
            <p className="mt-4 text-slate-700">
              These terms govern your use of our flower delivery service. By placing an order, you agree to these conditions and our commitment to providing quality floral products and reliable service.
            </p>
          </div>

          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-slate-200 pt-4">
                <dt className="font-medium text-slate-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-slate-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <ScrollToTopButton />
      <Footer onNavigate={onNavigate} />
    </>
  )
}