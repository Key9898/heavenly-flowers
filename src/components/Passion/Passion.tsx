import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import CTA from './PassionCTA'
import OurPromiseImage from '../../assets/PassionCards/our_promise.jpg'
import OurSpiritImage from '../../assets/PassionCards/our_spirit.jpg'
import { SparklesIcon, BoltIcon, ClockIcon, ShieldCheckIcon, FaceSmileIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

interface PassionProps {
  onNavigate?: (page: string) => void
}

export default function Passion({ onNavigate }: PassionProps) {
  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page)
    }
  }

  return (
    <>
      <Header activePage="passion" onNavigate={handleNavigation} />
      <div className="bg-white py-20 pt-16 sm:py-20 sm:pt-16 lg:py-20 lg:pt-16">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-center text-base/7 font-semibold text-cyan-700">Our Heart</h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-slate-600 sm:text-5xl">
            Blooms Speaking Heart's Language
          </p>
          <div className="flex gap-2 mx-auto mt-7 items-center justify-center">
            <button
              type="button"
              onClick={() => handleNavigation('founder')}
              className="rounded-md bg-cyan-700 px-3 py-2 text-sm font-semibold text-white shadow-lg hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 transition-all duration-200 transform hover:scale-105"
            >
              Behind the Blooms
            </button>
            <span aria-hidden="true" className='text-cyan-700'>|</span>
            <button
              type="button"
              onClick={() => handleNavigation('team')}
              className="rounded-md bg-cyan-700 px-3 py-2 text-sm font-semibold text-white shadow-lg hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 transition-all duration-200 transform hover:scale-105"
            >
              The Magic Makers
            </button>
          </div>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            {/* Our Promise Card */}
            <div className="relative max-lg:order-1 lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-4xl lg:rounded-l-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-l-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-2xl font-medium tracking-tight text-cyan-600 max-lg:text-center">
                    Our Promise
                  </p>
                  <p className="mt-2 max-w-lg text-lg/6 text-slate-700 max-lg:text-center">
                    We are committed to delivering exceptional quality in every floral arrangement.
                  </p>
                </div>
                <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-10 lg:py-0">
                  <ul className="mt-4 space-y-2 text-lg text-slate-700">
                    <li>
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        Floral Excellence
                      </div>
                      <ul className="mt-2 ml-6 space-y-1">
                        <li className="text-sm sm:text-base leading-relaxed text-slate-600">Finest blooms crafted perfectly</li>
                      </ul>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        Timely Delivery
                      </div>
                      <ul className="mt-2 ml-6 space-y-1">
                        <li className="text-sm sm:text-base leading-relaxed text-slate-600">Punctual delivery for special moments</li>
                      </ul>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        Custom Designs
                      </div>
                      <ul className="mt-2 ml-6 space-y-1">
                        <li className="text-sm sm:text-base leading-relaxed text-slate-600">Personalized floral masterpieces telling stories</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="px-6 pb-6 py-4 sm:px-8 sm:pb-8 sm:py-6 lg:py-12 mt-auto">
                  <img
                    alt="Our Promise - Quality Floral Arrangements"
                    src={OurPromiseImage}
                    className="w-full h-56 md:h-auto lg:h-80 object-cover rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-l-[calc(2rem+1px)]"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-l-4xl" />
            </div>

            {/* Freshness Promise Card */}
            <div className="relative max-lg:order-2">
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-10">
                  <p className="mt-2 text-2xl font-medium tracking-tight text-cyan-600 max-lg:text-center">Freshness Promise</p>
                  <p className="mt-2 max-w-lg text-lg/6 text-slate-700 max-lg:text-center">
                    We handpick the freshest blooms daily for lasting beauty.
                  </p>
                  <ul className="mt-4 space-y-2 text-lg text-slate-700">
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Farm-Fresh Flowers
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Vibrant & Long-Lasting
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Same-Day Delivery
                    </li>
                  </ul>
                  {/* Icons Row */}
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <div className="flex justify-around items-center">
                      <div className="flex flex-col items-center group">
                        <div className="p-2 rounded-full bg-green-50 group-hover:bg-green-100 transition-colors">
                          <SparklesIcon className="w-6 h-6 text-green-600" />
                        </div>
                        <span className="text-xs text-slate-500 mt-1 font-medium">Fresh</span>
                      </div>

                      <div className="flex flex-col items-center group">
                        <div className="p-2 rounded-full bg-purple-50 group-hover:bg-purple-100 transition-colors">
                          <BoltIcon className="w-6 h-6 text-purple-600" />
                        </div>
                        <span className="text-xs text-slate-500 mt-1 font-medium">Vibrant</span>
                      </div>

                      <div className="flex flex-col items-center group">
                        <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                          <ClockIcon className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="text-xs text-slate-500 mt-1 font-medium">Same-Day</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
            </div>

            {/* Your Happiness Guarantee Card */}
            <div className="relative max-lg:order-3 lg:col-start-2 lg:row-start-2">
              <div className="absolute inset-px rounded-lg bg-white" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-10">
                  <p className="mt-2 text-2xl font-medium tracking-tight text-cyan-600 max-lg:text-center">Your Happiness Guarantee</p>
                  <p className="mt-2 max-w-lg text-lg/6 text-slate-700 max-lg:text-center">
                    Your smile is our success. We're not happy until you are.
                  </p>
                  <ul className="mt-2 space-y-2 text-lg text-slate-700">
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Secure Payment Options
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Happiness Guarantee
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      Personal Florist Support
                    </li>
                  </ul>
                  {/* Icons Row */}
                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <div className="flex justify-around items-center">
                      <div className="flex flex-col items-center group">
                        <div className="p-2 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors">
                          <ShieldCheckIcon className="w-6 h-6 text-blue-600" />
                        </div>
                        <span className="text-xs text-slate-500 mt-1 font-medium">Secure</span>
                      </div>

                      <div className="flex flex-col items-center group">
                        <div className="p-2 rounded-full bg-yellow-50 group-hover:bg-yellow-100 transition-colors">
                          <FaceSmileIcon className="w-6 h-6 text-yellow-600" />
                        </div>
                        <span className="text-xs text-slate-500 mt-1 font-medium">Happy</span>
                      </div>

                      <div className="flex flex-col items-center group">
                        <div className="p-2 rounded-full bg-green-50 group-hover:bg-green-100 transition-colors">
                          <ChatBubbleLeftRightIcon className="w-6 h-6 text-green-600" />
                        </div>
                        <span className="text-xs text-slate-500 mt-1 font-medium">Support</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5" />
            </div>

            {/* Our Spirit Card */}
            <div className="relative max-lg:order-4 lg:row-span-2">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                  <p className="mt-2 text-2xl font-medium tracking-tight text-cyan-600 max-lg:text-center">
                    Our Spirit
                  </p>
                  <p className="mt-2 max-w-lg text-lg/6 text-slate-700 max-lg:text-center">
                    Passionate creativity flows through every design we carefully handcraft with love.
                  </p>
                </div>
                <div className="px-8 pt-8 pb-8 sm:px-10 sm:pt-10 sm:pb-10 lg:py-0">
                  <ul className="mt-4 space-y-2 text-lg text-slate-700">
                    <li>
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        Creative Passion
                      </div>
                      <ul className="mt-2 ml-6 space-y-1">
                        <li className="text-sm sm:text-base leading-relaxed text-slate-600">Heartfelt artistry in every petal</li>
                      </ul>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        Attention to Detail
                      </div>
                      <ul className="mt-2 ml-6 space-y-1">
                        <li className="text-sm sm:text-base leading-relaxed text-slate-600">Meticulous care in every detail</li>
                      </ul>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        Sustainable Sourcing
                      </div>
                      <ul className="mt-2 ml-6 space-y-1">
                        <li className="text-sm sm:text-base leading-relaxed text-slate-600">Ethically sourced honoring nature</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="px-6 pb-6 py-4 sm:px-8 sm:pb-8 sm:py-6 lg:py-12 mt-auto">
                  <img
                    alt="Our Spirit - Creative Passion"
                    src={OurSpiritImage}
                    className="w-full h-56 md:h-auto lg:h-80 object-cover rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]"
                  />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            </div>
          </div>
        </div>
      </div>
      <CTA onNavigate={handleNavigation} />
      <ScrollToTopButton />
      <Footer onNavigate={handleNavigation} />
    </>
  )
}