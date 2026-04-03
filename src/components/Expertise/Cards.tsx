import * as React from 'react';
import Breadcrumbs from '../Layout/Breadcrumbs'
import arrangement from '../../assets/ExpertiseImg/arrangement_card.jpg'
import workshop from '../../assets/ExpertiseImg/workshop_card.jpg'
import concierge from '../../assets/ExpertiseImg/concierge_card.jpg'
import cardsbg from '../../assets/ExpertiseImg/expertise_bg.jpg'

const cards = [
  {
    id: 1,
    title: 'Artful Arrangements',
    description: 'Handcrafted floral designs that transform emotions into breathtaking botanical artistry.',
    image: arrangement,
    page: 'arrangements'
  },
  {
    id: 2,
    title: 'Blossom Workshops',
    description: 'Interactive sessions where you\'ll learn the art of floral design and create beauty with your own hands.',
    image: workshop,
    page: 'workshops'
  },
  {
    id: 3,
    title: 'Floral Concierge Service',
    description: 'An exclusive, personalized service for all your floral needs, from recurring deliveries for your home or business to full-scale event styling.',
    image: concierge,
    page: 'concierge'
  },
];

interface ExpertiseCardsProps {
  onNavigate?: (page: string) => void
  currentPage?: string
}

function ExpertiseCards({ onNavigate, currentPage }: ExpertiseCardsProps) {
  // Get the last selected card from localStorage or use currentPage to determine initial selection
  const getInitialSelectedCard = React.useCallback(() => {
    const savedCard = localStorage.getItem('expertiseSelectedCard');
    if (savedCard !== null) {
      return parseInt(savedCard, 10);
    }
    
    // Use currentPage to determine initial selection if no saved card
    if (currentPage === 'arrangements') return 0;
    if (currentPage === 'workshops') return 1;
    if (currentPage === 'Premium Services') return 2;
    
    return 0; // Default to arrangements card
  }, [currentPage]);

  const [selectedCard, setSelectedCard] = React.useState(getInitialSelectedCard);

  // Save selected card to localStorage whenever it changes
  React.useEffect(() => {
    localStorage.setItem('expertiseSelectedCard', selectedCard.toString());
  }, [selectedCard]);

  const breadcrumbPages = [
    { name: 'Expertise', href: '#expertise', current: true }
  ]

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/40" /> {/* Dark Thing */}
      {/* Background image and overlap */}
      <div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
        <div className="relative w-full flex-1">
          <div className="absolute inset-0 overflow-hidden">
            <img
              alt="Expertise banner"
              src={cardsbg}
              className="size-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-slate-900 opacity-50" />
        </div>
        <div className="h-32 w-full bg-white md:h-40 lg:h-48 hidden lg:block" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
        {/* Background image and overlap for mobile */}
        <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
          <div className="relative w-full flex-1 bg-slate-800">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt="Expertise banner"
                src={cardsbg}
                className="size-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-slate-900 opacity-50" />
          </div>
          <div className="h-48 w-full bg-white hidden" />
        </div>
        
        <div className="relative z-10">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">         
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              <span className="block sm:inline">Our Floral Artistry</span>
            </h2>
            <p className="mx-auto mt-6 mb-6 max-w-2xl text-xl text-white line-clamp-2 sm:line-clamp-3">
              With a passion for petals, we transform visions into floral artistry for your most meaningful moments.
            </p>
            <div className="mb-6 flex justify-center">
              <Breadcrumbs pages={breadcrumbPages} onNavigate={onNavigate} variant="dark" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg w-full max-w-sm flex flex-col h-full ${
                  selectedCard === index ? 'ring-2 ring-cyan-500 bg-cyan-50' : ''
                } ${
                  index === 2 ? 'sm:col-span-2 sm:justify-self-center lg:col-span-1' : ''
                }`}
                onClick={() => setSelectedCard(index)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-cyan-700 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-700 mb-4 flex-grow">
                    {card.description}
                  </p>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCard(index);
                      // Add a small delay to ensure the ring appears before navigation
                      setTimeout(() => {
                        if (onNavigate) onNavigate(card.page);
                      }, 100);
                    }}
                    className="rounded-md bg-cyan-700 px-3 py-2.5 text-sm font-semibold text-white shadow-lg hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 transition-all duration-200 transform hover:scale-105"
                  >
                    Explore More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ExpertiseCards;