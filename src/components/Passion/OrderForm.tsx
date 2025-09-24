import { useState } from 'react'
import logo from '../../assets/Logo/logo.svg'

export default function OrderForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    flowerType: '',
    preferredColor: '',
    occasion: '',
    budgetRange: '',
    deliveryDate: '',
    deliveryAddress: '',
    customColorRequests: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitMessage('Thank you! Your flower order has been submitted successfully. We will contact you soon to confirm the details.')
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          flowerType: '',
          preferredColor: '',
          occasion: '',
          budgetRange: '',
          deliveryDate: '',
          deliveryAddress: '',
          customColorRequests: ''
        })
        setSubmitMessage('')
      }, 3000)
    } catch (error) {
      setSubmitMessage('Sorry, there was an error submitting your order. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Header Section - Similar to TeamForm */}
      <div className="flex flex-col py-6 px-6">
        <div className="w-full">
          <img
            alt="Heavenly Flowers"
            src={logo}
            className="mx-auto h-8 w-auto"
          />
          <h2 className="mt-4 text-center text-2xl font-bold tracking-tight text-cyan-700">
            Whisper Your Flower Order
          </h2>
          <p className="mt-2 text-center text-sm text-slate-700">
            Let us create something beautiful for you
          </p>
        </div>

        {/* Form Section */}
        <div className="mt-6 w-full">
          <div className="px-2 py-4">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Customer Information Section */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm/6 font-medium text-slate-900">
                    Full Name *
                  </label>
                  <div className="mt-2">
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm/6"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm/6 font-medium text-slate-900">
                    Email Address *
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              {/* Phone Number - Full Width */}
              <div>
                <label htmlFor="phone" className="block text-sm/6 font-medium text-slate-900">
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(123) 456-7890"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Flower Details Section */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Flower Type */}
                <div>
                  <label htmlFor="flowerType" className="block text-sm/6 font-medium text-slate-900">
                    Flower Type *
                  </label>
                  <div className="mt-2">
                    <select
                      id="flowerType"
                      name="flowerType"
                      required
                      value={formData.flowerType}
                      onChange={handleInputChange}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm/6"
                    >
                      <option value="">Select flower type</option>
                      <option value="roses">Roses</option>
                      <option value="tulips">Tulips</option>
                      <option value="lilies">Lilies</option>
                      <option value="sunflowers">Sunflowers</option>
                      <option value="orchids">Orchids</option>
                      <option value="mixed">Mixed Bouquet</option>
                      <option value="seasonal">Seasonal Selection</option>
                    </select>
                  </div>
                </div>

                {/* Preferred Color */}
                <div>
                  <label htmlFor="preferredColor" className="block text-sm/6 font-medium text-slate-900">
                    Preferred Color *
                  </label>
                  <div className="mt-2">
                    <select
                      id="preferredColor"
                      name="preferredColor"
                      required
                      value={formData.preferredColor}
                      onChange={handleInputChange}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm/6"
                    >
                      <option value="">Select flower color</option>
                      <option value="red">Red</option>
                      <option value="pink">Pink</option>
                      <option value="white">White</option>
                      <option value="yellow">Yellow</option>
                      <option value="purple">Purple</option>
                      <option value="orange">Orange</option>
                      <option value="mixed">Mixed Colors</option>
                      <option value="pastel">Pastel Tones</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Occasion and Budget */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Occasion */}
                <div>
                  <label htmlFor="occasion" className="block text-sm/6 font-medium text-slate-900">
                    Occasion *
                  </label>
                  <div className="mt-2">
                    <select
                      id="occasion"
                      name="occasion"
                      required
                      value={formData.occasion}
                      onChange={handleInputChange}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm/6"
                    >
                      <option value="">Select occasion</option>
                      <option value="birthday">Birthday</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="wedding">Wedding</option>
                      <option value="graduation">Graduation</option>
                      <option value="corporate">Corporate</option>
                      <option value="corporate">Corporate</option>
                      <option value="mother-day">Mother's Day</option>
                      <option value="father-day">Father's Day</option>
                      <option value="apology">Apology</option>
                      <option value="just-because">Just Because</option>                     
                    </select>
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label htmlFor="budgetRange" className="block text-sm/6 font-medium text-slate-900">
                    Budget Range
                  </label>
                  <div className="mt-2">
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm/6"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50">Under $50</option>
                      <option value="50-100">$50 - $100</option>
                      <option value="100-200">$100 - $200</option>
                      <option value="200-300">$200 - $300</option>
                      <option value="over-300">Over $300</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Delivery Details */}
              <div>
                <label htmlFor="deliveryDate" className="block text-sm/6 font-medium text-slate-900">
                  Preferred Delivery Date *
                </label>
                <div className="mt-2">
                  <input
                    id="deliveryDate"
                    name="deliveryDate"
                    type="date"
                    required
                    value={formData.deliveryDate}
                    onChange={handleInputChange}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="deliveryAddress" className="block text-sm/6 font-medium text-slate-900">
                  Delivery Address *
                </label>
                <div className="mt-2">
                  <textarea
                    id="deliveryAddress"
                    name="deliveryAddress"
                    required
                    rows={3}
                    value={formData.deliveryAddress}
                    onChange={handleInputChange}
                    placeholder="Enter complete delivery address"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Custom Color Requests */}
              <div>
                <label htmlFor="customColorRequests" className="block text-sm/6 font-medium text-slate-900">
                  Custom Color Requests
                </label>
                <div className="mt-2">
                  <textarea
                    id="customColorRequests"
                    name="customColorRequests"
                    rows={3}
                    value={formData.customColorRequests}
                    onChange={handleInputChange}
                    placeholder="Describe specific color combinations, gradients, or color themes you prefer..."
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-700 sm:text-sm/6"
                  />
                </div>
              </div>

              {/* Submit Message */}
              {submitMessage && (
                <div className={`p-4 rounded-md ${submitMessage.includes('error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                  {submitMessage}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 rounded-md bg-cyan-700 px-3 py-2 text-sm font-semibold text-white shadow-lg hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Order'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}