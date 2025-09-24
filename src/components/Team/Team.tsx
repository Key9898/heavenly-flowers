import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import TeamCTA from './TeamCTA'
import TeamBanner from './TeamBanner'
import AlexanderImg from '../../assets/Team/alexander_img.jpg'
import FosterImg from '../../assets/Team/foster_img.jpg'
import VincentImg from '../../assets/Team/vincent_img.jpg'
import WaltonImg from '../../assets/Team/walton_img.jpg'
import HenryImg from '../../assets/Team/henry_img.jpg'
import CookImg from '../../assets/Team/cook_img.jpg'
import FrancisImg from '../../assets/Team/francis_img.jpg'
import KrasnerImg from '../../assets/Team/krasner_img.jpg'

interface TeamProps {
  onNavigate?: (page: string) => void
}

const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder & Head of Operations',
    imageUrl: AlexanderImg, 
    imageAlt: 'Leslie Alexander',
  },
  {
    name: 'Michael Foster',
    role: 'Wedding & Events Lead',
    imageUrl: FosterImg, 
    imageAlt: 'Michael Foster',
  },
  {
    name: 'Dries Vincent',
    role: 'E-commerce & Digital Manager',
    imageUrl: VincentImg, 
    imageAlt: 'Dries Vincent',
  },
  {
    name: 'Lindsay Walton',
    role: 'Floral Designer',
    imageUrl: WaltonImg, 
    imageAlt: 'Lindsay Walton',   
  },
  {
    name: 'Courtney Henry',
    role: 'Head of Floral Sourcing',
    imageUrl: HenryImg, 
    imageAlt: 'Courtney Henry',
  },
  {
    name: 'Tom Cook',
    role: 'Brand Storyteller & Content Creator',
    imageUrl: CookImg, 
    imageAlt: 'Tom Cook',
  },
  {
    name: 'Whitney Francis',
    role: 'Lead Floral Artist',
    imageUrl: FrancisImg, 
    imageAlt: 'Whitney Francis',
  },
  {
    name: 'Leonard Krasner',
    role: 'Workshop Coordinator',
    imageUrl: KrasnerImg, 
    imageAlt: 'Leonard Krasner',
  },
]

export default function Team({ onNavigate }: TeamProps) {
  return (
    <>
      <Header onNavigate={onNavigate} />
      <TeamBanner onNavigate={onNavigate} />
      <div className="bg-white py-20 pt-16 sm:py-20 sm:pt-16 lg:py-20 lg:pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl"> 
            <h2 className="text-4xl text-center font-semibold tracking-tight text-pretty text-cyan-600">The Artisans of Emotion</h2>
            <p className="mt-4 text-lg/8 text-center text-slate-700">
              The soul of our studio is our team. Meet the creators, thinkers, and innovators dedicated to transforming nature's gifts into unforgettable emotional expressions.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img
                  alt={person.imageAlt}
                  src={person.imageUrl}
                  className="aspect-14/13 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
                />
                <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-cyan-600">{person.name}</h3>
                <p className="text-base/7 text-slate-700">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <TeamCTA />
      <ScrollToTopButton />
      <Footer onNavigate={onNavigate} />
    </>
  )
}