import { useState } from 'react'
import WorkshopForm from './WorkshopForm'

interface CTAProps {
  onNavigate?: (page: string) => void
}

export default function WorkshopsCTA({ onNavigate: _onNavigate }: CTAProps) {
  const [showForm, setShowForm] = useState(false)

  const handleShowForm = () => {
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false)
  }

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 py-16 sm:py-22 lg:pt-0 sm:pt-0 pt-0">
          <div className="relative isolate overflow-hidden bg-white px-6 py-24 text-center shadow-lg ring-1 ring-slate-900/5 rounded-3xl sm:rounded-3xl sm:px-8">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-slate-950 sm:text-5xl">
              Unleash Your Inner Florist
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-slate-600">
              Ready to create your own work of art? Our hands-on workshops provide the guidance, skills, and beautiful blossoms you need.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button
                type="button"
                onClick={handleShowForm}
                className="rounded-md bg-cyan-700 px-3 py-2 text-sm font-semibold text-white shadow-lg hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 transition-all duration-200 transform hover:scale-105"
              >
                Start Creating
              </button>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
            >
              <circle r={512} cx={512} cy={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#f1f5f9" /> {/* slate-50 - very light gray */}
                  <stop offset={0.5} stopColor="#cbd5e1" /> {/* slate-300 - soft blue-gray */}
                  <stop offset={1} stopColor="#94a3b8" /> {/* slate-400 - medium blue-gray */}
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      {/* Modal Overlay - Similar to TeamCTA */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative max-w-md w-full mx-4">
            {/* Close Button */}
            <button
              type='button'
              onClick={handleCloseForm}
              aria-label="Close form"
              className="absolute -top-4 -right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-slate-100 transition-colors"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Workshop Form */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <WorkshopForm />
            </div>
          </div>
        </div>
      )}
    </>
  )
}