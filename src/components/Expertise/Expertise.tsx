import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import ExpertiseCards from './Cards'
import { SparklesIcon, HeartIcon, ClockIcon, GiftTopIcon } from '@heroicons/react/24/outline'
import sideImg from '../../assets/ExpertiseImg/side_img.jpg'

const incentives = [
    {
        name: 'Freshness Guaranteed',
        description: "We hand-select the freshest blooms daily from local growers, ensuring your arrangements stay vibrant and beautiful for longer. Your satisfaction is our promise.",
        icon: (
            <div className="h-16 w-16 bg-gradient-to-r from-cyan-600 to-sky-600 rounded-lg flex items-center justify-center">
                <SparklesIcon className="h-16 w-16 text-white" />
            </div>
        ),
    },
    {
        name: 'Personal Florist Consultation',
        description: 'Our experienced florists are here to help you create the perfect arrangement for any occasion. Share your vision, and we\'ll bring it to life with creativity and care.',
        icon: (
            <div className="h-16 w-16 bg-gradient-to-r from-cyan-600 to-sky-600 rounded-lg flex items-center justify-center">
                <HeartIcon className="h-16 w-16 text-white" />
            </div>
        ),
    },
    {
        name: 'Same-Day Delivery',
        description: "Place your order before 2PM and receive your beautiful blooms the same day. Perfect for those last-minute moments that matter most.",
        icon: (
            <div className="h-16 w-16 bg-gradient-to-r from-cyan-600 to-sky-600 rounded-lg flex items-center justify-center">
                <ClockIcon className="h-16 w-16 text-white" />
            </div>
        ),
    },
    {
        name: 'Gift Wrapping & Custom Cards',
        description: "Elevate your gift with our elegant wrapping and add a personalized message to make your floral gift even more special.",
        icon: (
            <div className="h-16 w-16 bg-gradient-to-r from-cyan-600 to-sky-600 rounded-lg flex items-center justify-center">
                <GiftTopIcon className="h-16 w-16 text-white" />
            </div>
        ),
    },
]

interface ExpertiseProps {
    onNavigate?: (page: string) => void
    currentPage?: string
}

export default function Expertise({ onNavigate, currentPage }: ExpertiseProps) {
    return (
        <>
            <Header onNavigate={onNavigate} activePage="expertise" />
            <ExpertiseCards onNavigate={onNavigate} currentPage={currentPage} />
            <div className="bg-white">
                {/* Imgae and Text Section */}
                <div className="mx-auto max-w-7xl sm:px-2 lg:px-4 lg:py-0">
                    <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
                            <div>
                                <h2 className="text-4xl font-bold tracking-tight text-cyan-600">
                                    Our Flowers Speak the Language of the Heart
                                </h2>
                                <p className="mt-4 text-slate-700 text-lg/8">
                                    At Blossom Haven, we believe every bouquet tells a story. That's why we pour our passion into crafting arrangements that don't just look beautiful, but feel meaningful. From selection to delivery, excellence blooms in every detail.
                                </p>
                            </div>
                            <img
                                alt="Floral design expertise and craftsmanship"
                                src={sideImg}
                                className="aspect-3/2 w-full rounded-lg bg-slate-100 object-cover"
                            />
                        </div>
                        {/* Incentive Section */}
                        <div className="mx-auto max-w-2xl px-4 py-24 pt-12 sm:px-6 sm:py-32 sm:pt-14 lg:max-w-7xl lg:px-0 lg:py-24 lg:pt-16">
                            <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
                                {incentives.map((incentive) => (
                                    <div key={incentive.name}>
                                        <div className="h-16 w-auto">
                                            {incentive.icon}
                                        </div>
                                        <h3 className="mt-6 text-sm font-medium text-cyan-600">{incentive.name}</h3>
                                        <p className="mt-2 text-sm text-slate-700">{incentive.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTopButton />
            <Footer onNavigate={onNavigate} />
        </>
    )
}