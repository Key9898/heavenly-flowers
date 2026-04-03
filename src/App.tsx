import { useState } from 'react'
import HeroSection from './components/Hero/HeroSection'
import Creations from './components/Creations/Creations'
import Expertise from './components/Expertise/Expertise'
import Passion from './components/Passion/Passion'
import Founder from './components/Founder/Founder'
import Team from './components/Team/Team'
import Chat from './components/Layout/Chat'
import FAQs from './components/FAQs/FAQs'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import TermsOfService from './components/TermsOfService/TermsOfService'
import Arrangements from './components/Arrangements/Arrangements'
import Workshops from './components/Workshops/Workshops'
import Inspirations from './components/Inspirations/Inspirations'
import ComingSoon from './components/ComingSoon/ComingSoon'
import ProductList from './components/Admin/ProductList'

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
        return <ComingSoon onNavigate={setCurrentPage} pageName="Concierge" />
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
        return <TermsOfService onNavigate={setCurrentPage} />
      case 'inspirations':
        return <Inspirations onNavigate={setCurrentPage} />
      case 'admin':
        return <ProductList onNavigate={setCurrentPage} />
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