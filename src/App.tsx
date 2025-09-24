import { useState } from 'react'
import './App.css'
import HeroSection from './components/Hero/HeroSection'
import Creations from './components/Creations/Creations'
import Expertise from './components/Expertise/Expertise'
import Passion from './components/Passion/Passion'
import Founder from './components/Founder/Founder'
import Team from './components/Team/Team'
import Chat from './components/Layout/Chat'
import FAQs from './components/FAQs/FAQs'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import TermsService from './components/TermsOfService/TermsOfService'
import Arrangements from './components/Arrangements/Arrangements'
import Workshops from './components/Workshops/Workshops'
import Inspirations from './components/Inspirations/Inspirations'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'creations':
        return <Creations onNavigate={setCurrentPage} />
      case 'expertise':
        return <Expertise onNavigate={setCurrentPage} currentPage={currentPage} />
      case 'arrangements':
        return <Arrangements onNavigate={setCurrentPage} />
      case 'workshops':
        return <Workshops onNavigate={setCurrentPage} />
      case 'concierge':
        return (
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">{currentPage.charAt(0).toUpperCase() + currentPage.slice(1)} Service Page</h1>
              <p className="text-lg mb-8">This page is coming soon...</p>
              <button
                type="button"
                onClick={() => setCurrentPage('expertise')}
                className="px-6 py-3 bg-cyan-700 text-white rounded-md hover:bg-cyan-600 transition-colors"
              >
                Back to Expertise
              </button>
            </div>
          </div>
        )
      case 'passion':
        return <Passion onNavigate={setCurrentPage} />
      case 'founder':
        return <Founder onNavigate={setCurrentPage} />
      case 'team':
        return <Team onNavigate={setCurrentPage} />
      case 'faqs':
        return <FAQs onNavigate={setCurrentPage} />
      case 'privacypolicy':
        return <PrivacyPolicy onNavigate={setCurrentPage} />
      case 'terms&service':
        return <TermsService onNavigate={setCurrentPage} />
      case 'inspirations':
        return <Inspirations onNavigate={setCurrentPage} />
      default:
        return <HeroSection onNavigate={setCurrentPage} />
    }
  }

  return (
    <>
      {renderPage()}
      <Chat />
    </>
  )
}

export default App