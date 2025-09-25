import { useEffect, useState } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/solid'

export default function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-cyan-600/70 via-blue-600/75 to-indigo-600/70 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:scale-110 hover:shadow-xl hover:from-cyan-500/70 hover:via-blue-500/75 hover:to-indigo-500/70 transition-all duration-200 transform ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
            aria-label="Scroll to top"
        >
            <ArrowUpIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
    )
}