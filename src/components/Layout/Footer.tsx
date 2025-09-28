import { BuildingOffice2Icon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import logo from '../../assets/Logo/logo.svg'

interface FooterProps {
  onNavigate?: (page: string) => void
}

export default function Footer({ onNavigate }: FooterProps) {
    const handleNavigation = (page: string) => {
        if (onNavigate) {
            onNavigate(page)
            // Scroll to top when navigating to ensure banner is visible
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }
    return (
        <footer aria-labelledby="footer-heading" className="bg-gradient-to-br from-slate-900/90 via-blue-900/70 to-cyan-900/50 
border-t border-cyan-300/40 shadow-2xl">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-6 pt-8 sm:pt-12 lg:px-8 lg:pt-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Left Side - Company Info */}
                    <div className="flex flex-col space-y-4 items-center text-center lg:items-start lg:text-left">
                        
                        <div className="w-full lg:w-auto">
                            <div className="flex items-center space-x-3 justify-center lg:justify-start lg:-ml-1">
                                <img
                                    alt="Fleurs du Ciel"
                                    src={logo}
                                    className="h-8 w-auto sm:h-10 md:h-12"
                                />
                                <span className="text-2xl font-semibold text-slate-900 dark:text-white">
                                    Heavenly Flowers
                                </span>
                            </div>

                            <h3 className="text-lg font-light text-blue-200 sm:text-xl md:text-2xl mt-2 text-center lg:text-left">
                                Fleurs du Ciel
                            </h3>

                            <p className="text-sm/5 text-base/7 text-slate-600 dark:text-slate-300 max-w-sm sm:text-base/6 md:max-w-md sm:mx-auto lg:mx-0 mt-4 text-center lg:text-left">
                                Elegant blooms handcrafted to express your deepest emotions, delivered fresh daily.
                            </p>
                        </div>
                    </div>

                    {/* Middle - Support Links */}
                    <div className="flex flex-col items-center text-center space-y-4">
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                            Help & Info
                        </h2>
                        <nav className="flex flex-col space-y-3">
                            <button 
                                type="button"
                                onClick={() => handleNavigation('faqs')}
                                className="text-base/7 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                                FAQs
                            </button>
                            <button 
                                type="button"
                                onClick={() => handleNavigation('privacypolicy')}
                                className="text-base/7 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </button>
                            <button 
                                type="button"
                                onClick={() => handleNavigation('terms&service')}
                                className="text-base/7 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                                Terms of Service
                            </button>
                        </nav>
                    </div>

                    {/* Right Side - Contact Info */}
                    <div className="flex flex-col items-center text-center space-y-4 sm:items-center sm:text-center lg:items-end lg:text-right">
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                            Get in touch
                        </h2>
                        <dl className="space-y-4 text-base/7 text-slate-600 dark:text-slate-300">
                            <div className="flex gap-x-4 justify-center sm:justify-center lg:justify-end">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-blue-200" />
                                </dt>
                                <dd>
                                    Bangkok, Thailand
                                </dd>
                            </div>
                            <div className="flex gap-x-4 justify-center sm:justify-center lg:justify-end">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <PhoneIcon aria-hidden="true" className="h-7 w-6 text-blue-200" />
                                </dt>
                                <dd>
                                    <a href="tel:+66 49 500 (R) 200" className="hover:text-slate-900 dark:hover:text-white">
                                        +66 49 500 200
                                    </a>
                                </dd>
                            </div>
                            <div className="flex gap-x-4 justify-center sm:justify-center lg:justify-end">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-blue-200" />
                                </dt>
                                <dd>
                                    <a href="mailto:heavenlyflowers@gmail.com" className="hover:text-slate-900 dark:hover:text-white">
                                        heavenlyflowers@gmail.com
                                    </a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>

                {/* Centered Copyright */}
                <div className="mt-6 border-t border-slate-900/10 pt-4 sm:mt-8">
                    <p className="text-xs text-slate-300 text-center sm:text-sm">
                        &copy; 2025 Heavenly Flowers, Fleurs du Ciel. All rights reserved. | Designed and Developed by Wunna Aung.
                    </p>
                </div>
            </div>
        </footer>
    )
}