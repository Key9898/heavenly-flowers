import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import CreationsProducts from './CreationsProducts'

interface CreationsProps {
  onNavigate?: (page: string) => void
}

export default function Creations({ onNavigate }: CreationsProps) {
  const handleNavigation = (page: string) => {
    if (onNavigate) {
      onNavigate(page)
    }
  }

  return (
    <div className="bg-white">
      <Header activePage="creations" onNavigate={handleNavigation} />

      <CreationsProducts onNavigate={onNavigate} />
                   
      <ScrollToTopButton />
      <Footer onNavigate={handleNavigation} />
    </div>
  )
}