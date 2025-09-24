import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import Breadcrumbs from '../Layout/Breadcrumbs'
import privacyImg from '../../assets/Help&Info/help_info_img.jpg'

const features = [
  { name: 'Personal Data', description: 'Name, phone number, delivery address, and email contact information.' },
  { name: 'Order History', description: 'Previous purchases, preferences, and delivery records for service improvement.' },
  { name: 'Website Usage', description: 'Browsing patterns, device information, and interaction data for optimization.' },
  { name: 'Order Processing', description: 'Personal information used exclusively for fulfilling flower delivery requests.' },
  { name: 'Service Improvement', description: 'Usage data is analyzed to enhance website functionality and customer experience.' },
  { name: 'Marketing Communications', description: 'Promotional materials are sent only with explicit customer consent and preferences.' },
  { name: 'Security Measures', description: 'Advanced encryption and secure storage systems protect all customer data.' },
  { name: 'Access Control', description: 'Strict internal policies limit data access to authorized personnel only.' },
  { name: 'Retention Policy', description: 'Information is stored only as long as necessary for business and legal requirements.' },
  { name: 'No Unauthorized Sharing', description: 'Personal information is never shared without explicit customer consent or legal requirement.' },
  { name: 'Service Providers', description: 'Limited data sharing with delivery partners under strict confidentiality agreements.' },
  { name: 'Legal Compliance', description: 'Information is disclosed only when required by law or court orders.' },
]

interface PrivacyPolicyProps {
  onNavigate?: (page: string) => void
}

export default function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
  const breadcrumbPages = [
    { name: 'Privacy Policy', href: '#privacypolicy', current: true }
  ]

  return (
    <>
      <Header onNavigate={onNavigate} activePage="privacypolicy" />
      <div className="bg-white">
        <div aria-hidden="true" className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" /> {/* Dark Thing */}
          <img
            alt="Floral Haven Privacy Policy - Data protection and security commitment"
            src={privacyImg}
            className="h-96 w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-white" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Breadcrumbs pages={breadcrumbPages} onNavigate={onNavigate} variant="dark" />
          </div>
        </div>

        <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-cyan-500 sm:text-4xl">Privacy Policy</h2>
            <p className="mt-4 text-slate-700">
              We collect and protect your personal information to provide excellent flower delivery services. Your data security and privacy are our highest priorities in all business operations.
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