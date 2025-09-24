import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Chat from '../Layout/Chat';
import Login from './SignIn';
import backgroundImage from '../../assets/HeroBgImg/hero_bg.jpg'
import logo from '../../assets/Logo/logo.svg'

const navigation = [
    { name: 'Creations', href: '#' },
    { name: 'Expertise', href: '#' },
    { name: 'Passion', href: '#' },
    { name: 'Inspirations', href: '#' },
    { name: 'Login', href: '#' },
]

interface HeroSectionProps {
    onNavigate?: (page: string) => void
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [showLogin, setShowLogin] = useState(false)

    const handleNavigation = (itemName: string) => {
        if (itemName.toLowerCase() === 'login') {
            setShowLogin(true)
        } else if (onNavigate) {
            onNavigate(itemName.toLowerCase())
        }
        setMobileMenuOpen(false)
    }

    const handleNavigateToCreations = () => {
        if (onNavigate) {
            onNavigate('creations')
        }
    }

    return (
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 min-h-screen">
            <header className="absolute inset-x-0 top-0 z-50">
                <div className="mx-auto max-w-7xl">
                    <div className="px-6 pt-6 lg:px-8">
                        <nav aria-label="Global" className="flex items-center justify-between">
                            <button
                                type="button"
                                onClick={() => handleNavigation('home')}
                                className="-m-1.5 p-1.5"
                            >
                                <span className="sr-only">Fleurs du Ciel</span>
                                <img
                                    alt="Fleurs du Ciel"
                                    src={logo}
                                    className="h-10 w-auto lg:h-12"
                                />
                            </button>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="-m-2.5 rounded-md p-2.5 text-white lg:hidden"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="size-7" />
                            </button>
                            <div className="hidden lg:flex lg:gap-x-10">
                                {navigation.map((item) => (
                                    <button
                                        type='button'
                                        key={item.name}
                                        onClick={() => handleNavigation(item.name)}
                                        className="text-base font-semibold text-white hover:text-sky-200 transition-colors"
                                    >
                                        {item.name}
                                        {item.name === 'Login' && (
                                            <span className="hover:text-sky-200">→</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </nav>
                    </div>
                </div>
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                    <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
                    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gradient-to-br from-sky-400/30 via-cyan-300/25 to-sky-500/30 backdrop-blur-lg border-l border-white/20 p-6 sm:max-w-sm">
                        <div className="flex items-center justify-between">
                            <button
                                type="button"
                                onClick={() => handleNavigation('home')}
                                className="-m-1.5 p-1.5"
                            >
                                <span className="sr-only">Fleurs du Ciel</span>
                                <img
                                    alt="Fleurs du Ciel"
                                    src={logo}
                                    className="h-10 w-auto"
                                />
                            </button>
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="-m-2.5 rounded-md p-2.5 text-white hover:text-sky-200 hover:bg-white/10 transition-colors"
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon aria-hidden="true" className="size-7" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-white/20">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <button
                                            type='button'
                                            key={item.name}
                                            onClick={() => handleNavigation(item.name)}
                                            className="-mx-3 block rounded-lg px-3 py-3 text-lg font-semibold text-white hover:bg-white/20 hover:text-cyan-100 transition-all duration-200 backdrop-blur-sm w-full text-left flex items-center justify-between"
                                        >
                                            <span>{item.name}</span>
                                            {item.name === 'Login' && (
                                                <span className="text-cyan-200">→</span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
            </header>

            <div className="relative min-h-screen">
                {/* Background Image - Full responsive */}
                <div className="absolute inset-0 overflow-hidden">
                    <img
                        alt="Heavenly Flowers Background"
                        src={backgroundImage}
                        className="w-full h-full object-cover"
                    />
                    {/* Dark overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 flex items-center min-h-screen">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            {/* Left side - Text content */}
                            <div className="text-center lg:text-left">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-tight">
                                    Heavenly Flowers{' '}
                                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-blue-200 block sm:inline">
                                        Fleurs du Ciel
                                    </span>
                                </h1>
                                <p className="mt-6 text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-white/90 max-w-2xl mx-auto lg:mx-0">
                                    We believe flowers are nature's poetry. Our artfully crafted bouquets are designed to capture the emotion of your most precious moments, telling a story that is uniquely yours.
                                </p>
                                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                    <button
                                        type="button"
                                        onClick={handleNavigateToCreations}
                                        className="w-full sm:w-auto rounded-md bg-cyan-700 px-8 py-3 text-base font-semibold text-white shadow-lg hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 transition-all duration-200 transform hover:scale-105"
                                    >
                                        Explore Blooms
                                    </button>
                                </div>
                            </div>

                            {/* Right side - Additional space for future content */}
                            <div className="hidden lg:block">
                                {/* This space can be used for additional content or kept empty for better layout */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Chat />
            
            {/* Login Modal */}
            {showLogin && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop with blur effect */}
                    <div 
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setShowLogin(false)}
                    />
                    
                    {/* Modal Content */}
                    <div className="relative z-10 w-full max-w-md mx-4">
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={() => setShowLogin(false)}
                            className="absolute -top-4 -right-4 z-20 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
                            aria-label="Close login modal"
                        >
                            <XMarkIcon className="w-6 h-6 text-slate-600" />
                        </button>
                        
                        {/* Login Form */}
                        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                            <Login />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}