import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import TeamForm from './TeamForm'
import TeamCTAImg from '../../assets/Team/team_cta_img.jpg'

const benefits = [
  'Rewarding Compensation for Your Artistry',
  'Work/Life Harmony & Flexible Schedules',
  '30 Days to Recharge & Bloom',
  'Inspiring Annual Team Retreats',
  'Comprehensive Care for You & Yours',
  'A Creative & Supportive Studio Environment',
]

export default function TeamCTA() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  return (
    <div className="overflow-hidden bg-white py-20 pt-0 sm:py-20 sm:pt-0 lg:py-20 lg:pt-0">
      <div className="relative isolate bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white sm:bg-white/75 px-6 py-16 shadow-lg ring-1 ring-slate-900/5 rounded-3xl sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <img
              alt="Team CTA image"
              src={TeamCTAImg}
              className="h-96 w-full flex-none rounded-2xl object-cover lg:aspect-square lg:h-auto lg:max-w-sm"
            />
            <div className="w-full flex-auto">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-cyan-700 sm:text-5xl">
                Grow With Us
              </h2>
              <p className="mt-4 text-lg/8 text-pretty text-slate-700">
                Where your passion for flowers blossoms into a meaningful career surrounded by nature's beauty
              </p>
              <ul
                role="list"
                className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-slate-950 sm:grid-cols-2"
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon aria-hidden="true" className="h-7 w-5 flex-none text-cyan-500" />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
                <button 
                  type="button"
                  onClick={() => setIsFormOpen(true)}
                  className="text-sm/6 font-semibold text-cyan-600 hover:text-cyan-300 bg-transparent border-none cursor-pointer"
                >
                  Join Our Floral Family
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            className="aspect-[1318/752] w-[329.5px] flex-none bg-gradient-to-r from-[#9fd6fc] to-[#8680fd] opacity-50 [clip-path:polygon(73.6%_51.7%,91.7%_11.8%,100%_46.4%,97.4%_82.2%,92.5%_84.9%,75.7%_64%,55.3%_47.5%,46.5%_49.4%,45%_62.9%,50.3%_87.2%,21.3%_64.1%,0.1%_100%,5.4%_51.1%,21.4%_63.9%,58.9%_0.2%,73.6%_51.7%)]"
            />
        </div>
      </div>
      
      {/* Modal Overlay */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative max-w-md w-full mx-4">
            {/* Close Button */}
            <button
              type='button'
              onClick={() => setIsFormOpen(false)}
              aria-label="Close form"
              className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-slate-100 transition-colors"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Team Form */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <TeamForm />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}