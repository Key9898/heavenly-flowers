import { useState } from 'react'
import logo from '../../assets/Logo/logo.svg'

export default function WorkshopForm() {
  const [selectedWorkshop, setSelectedWorkshop] = useState('')
  const [selectedLevel, setSelectedLevel] = useState('')

  const handleWorkshopChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWorkshop(e.target.value)
  }

  const handleLevelChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLevel(e.target.value)
  }

  return (
    <>
      <div className="flex flex-col py-6 px-6">
        <div className="w-full">
          <img
            alt="Heavenly Flowers"
            src={logo}
            className="mx-auto h-8 w-auto"
          />
          <h2 className="mt-4 text-center text-2xl font-bold tracking-tight text-cyan-700">
            Join Our Workshop
          </h2>
          <p className="mt-2 text-center text-sm text-slate-700">
            Register for our floral design workshops
          </p>
        </div>

        <div className="mt-6 w-full">
          <div className="px-2 py-4">
            <form action="#" method="POST" className="space-y-5">
              <div>
                <label htmlFor="full-name" className="block text-sm/6 font-medium text-slate-900">
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    autoComplete="name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm/6"
                  />
                </div>
              </div>  

              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-slate-900">
                  Email Address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm/6 font-medium text-slate-900">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+66912345678"
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="workshop-type" className="block text-sm/6 font-medium text-slate-900">
                  Workshop Type
                </label>
                <div className="mt-2">
                  <select
                    id="workshop-type"
                    name="workshop-type"
                    value={selectedWorkshop}
                    onChange={handleWorkshopChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm/6"
                  >
                    <option value="" disabled>Select a workshop</option>
                    <option value="basic-bouquet">Basic Bouquet Workshop</option>
                    <option value="advanced-floral">Advanced Floral Design</option>
                    <option value="wedding-arrangement">Wedding Arrangement Class</option>
                    <option value="seasonal-wreath">Seasonal Wreath Making</option>
                    <option value="corporate-team">Corporate Team Building</option>
                    <option value="kids-workshop">Kids Flower Workshop</option>
                    <option value="pressed-flower">Pressed Flower Art</option>
                    <option value="ikebana">Ikebana Fundamentals</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="experience-level" className="block text-sm/6 font-medium text-slate-900">
                  Experience Level
                </label>
                <div className="mt-2">
                  <select
                    id="experience-level"
                    name="experience-level"
                    value={selectedLevel}
                    onChange={handleLevelChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm/6"
                  >
                    <option value="" disabled>Select your level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="special-requests" className="block text-sm/6 font-medium text-slate-900">
                  Special Requests or Questions
                </label>
                <div className="mt-2">
                  <textarea
                    id="special-requests"
                    name="special-requests"
                    rows={3}
                    placeholder="Any special requests, dietary restrictions, or questions about the workshop..."
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm/6 resize-none"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="submit"
                  className="flex-1 rounded-md bg-cyan-700 px-3 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 transition-all duration-200 transform hover:scale-105"
                >
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}