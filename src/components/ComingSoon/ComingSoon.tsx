import { useState, useEffect } from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import { SparklesIcon, EnvelopeIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

interface ComingSoonProps {
    onNavigate?: (page: string) => void
    pageName?: string
}

export default function ComingSoon({ onNavigate, pageName = 'Concierge' }: ComingSoonProps) {
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

    useEffect(() => {
        const launchDate = new Date()
        launchDate.setDate(launchDate.getDate() + 30)

        const timer = setInterval(() => {
            const now = new Date().getTime()
            const distance = launchDate.getTime() - now

            setCountdown({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setIsLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 1000))
        setIsSubmitted(true)
        setIsLoading(false)
    }

    const handleBackNavigation = () => {
        if (onNavigate) {
            onNavigate('expertise')
        }
    }

    const countdownItems = [
        { value: countdown.days, label: 'Days' },
        { value: countdown.hours, label: 'Hours' },
        { value: countdown.minutes, label: 'Minutes' },
        { value: countdown.seconds, label: 'Seconds' },
    ]

    const features = [
        'Personalized floral consultations',
        'Exclusive event planning services',
        'Custom arrangement designs',
        'Priority delivery scheduling',
    ]

    return (
        <>
            <Header onNavigate={onNavigate} activePage="concierge" />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20" />

                <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-3xl" />

                <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
                    <button
                        type="button"
                        onClick={handleBackNavigation}
                        className="group mb-8 inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded-lg px-2 py-1"
                    >
                        <ArrowLeftIcon className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                        <span className="text-sm font-medium">Back to Expertise</span>
                    </button>

                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 mb-6 border border-cyan-400/20">
                            <SparklesIcon className="h-5 w-5 text-cyan-400" />
                            <span className="text-sm font-medium text-cyan-300">Something Beautiful is Coming</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4">
                            <span className="block">{pageName} Service</span>
                            <span className="block bg-gradient-to-r from-cyan-400 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                                Coming Soon
                            </span>
                        </h1>

                        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 mb-12">
                            We're crafting an exclusive floral concierge experience tailored to your unique needs.
                            Be the first to know when we launch.
                        </p>

                        <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-lg mx-auto mb-12">
                            {countdownItems.map((item) => (
                                <div
                                    key={item.label}
                                    className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10"
                                >
                                    <div className="text-2xl sm:text-4xl font-bold text-white mb-1">
                                        {String(item.value).padStart(2, '0')}
                                    </div>
                                    <div className="text-xs sm:text-sm text-slate-400">{item.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="max-w-md mx-auto mb-16">
                            {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                                    <div className="relative flex-1">
                                        <EnvelopeIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter your email"
                                            required
                                            className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                        fill="none"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    />
                                                </svg>
                                                <span>Subscribing...</span>
                                            </span>
                                        ) : (
                                            'Notify Me'
                                        )}
                                    </button>
                                </form>
                            ) : (
                                <div className="bg-cyan-500/10 border border-cyan-400/30 rounded-xl p-6 text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-500/20 mb-4">
                                        <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">You're on the list!</h3>
                                    <p className="text-slate-300 text-sm">
                                        We'll notify you as soon as our {pageName.toLowerCase()} service launches.
                                    </p>
                                </div>
                            )}
                            <p className="mt-4 text-xs text-slate-500">
                                We respect your privacy. No spam, ever.
                            </p>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-xl font-semibold text-white mb-6">What to Expect</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10"
                                    >
                                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400" />
                                        <span className="text-slate-300 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <ScrollToTopButton />
            <Footer onNavigate={onNavigate} />
        </>
    )
}
