import logo from '../../assets/Logo/logo.svg'

export default function TeamForm() {
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
            Grow With Us
          </h2>
          <p className="mt-2 text-center text-sm text-slate-700">
            Be part of our floral family
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
                <label htmlFor="position" className="block text-sm/6 font-medium text-slate-900">
                  Position of Interest
                </label>
                <div className="mt-2">
                  <select
                    id="position"
                    name="position"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm/6"
                  >
                    <option value="">Select a position</option>
                    <option value="floral-designer">Floral Designer</option>
                    <option value="sales-associate">Sales Associate</option>
                    <option value="delivery-driver">Delivery Driver</option>
                    <option value="customer-service">Customer Service</option>
                    <option value="marketing">Marketing Specialist</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm/6 font-medium text-slate-900">
                  Relevant Experience
                </label>
                <div className="mt-2">
                  <textarea
                    id="experience"
                    name="experience"
                    rows={3}
                    placeholder="Tell us about your relevant experience, skills, or passion for flowers..."
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm/6 resize-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm/6 font-medium text-slate-900">
                  Availability
                </label>
                <div className="mt-2">
                  <select
                    id="availability"
                    name="availability"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm/6"
                  >
                    <option value="">Select your availability</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="weekends">Weekends only</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="rounded-md bg-cyan-700 px-3 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 transition-all duration-200 transform hover:scale-105 w-full"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}