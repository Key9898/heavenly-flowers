import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import FounderBanner from './FounderBanner'
import LadyFounder from '../../assets/Founder/lady_founder.jpg'
import FlowersShop from '../../assets/Founder/flowers_shop.jpg'

const features = [
  {
    name: 'Meet Joy',
    subtitle: 'Joy Lily - Founder & Creative Director',
    description:
      `For Joy, it all began in her grandmother's garden. It was there she first discovered that flowers have their own language, a way of telling stories without words. With over a decade of floral artistry, Joy's intuitive approach has graced everything from celebrity weddings to the most intimate moments. Her signature is a heartfelt, narrative touch that turns every bouquet into a personal memory.`,
    quote: 'Every flower has a story to tell, and every arrangement should speak directly to the heart.',
    additionalInfo: 'Beyond the studio, Joy is passionate about sharing her craft. She regularly teaches floral workshops and volunteers with urban gardening initiatives, driven by her belief that the beauty of nature should be accessible to all.',
    imageSrc: LadyFounder,
    imageAlt: 'Lady Founder',
  },
  {
    name: 'Our Promise to You',
    subtitle: 'Every Bloom, Crafted with Purpose.',
    description:
      'Our promise begins with a simple belief: that flowers are a language of their own. We commit to pouring our passion and expertise into every design, transforming the freshest blooms into an unforgettable expression that honors your most precious moments.',
    craftmanshipPromise: {
      title: 'Our Craftsmanship Promise',
      items: [
        'Hand-selected seasonal blooms from ethical growers',
        'Artistic designs crafted with attention to every detail',
        'Sustainable practices that honor nature\'s beauty',
        'Personal service that understands your vision'
      ]
    },
    imageSrc: FlowersShop,
    imageAlt: 'Flowers Shop',
  },
]

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

interface FounderProps {
  onNavigate?: (page: string) => void
}

export default function Founder({ onNavigate: _onNavigate }: FounderProps) {
  return (
    <>
      <Header onNavigate={_onNavigate} />
      <FounderBanner onNavigate={_onNavigate} />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-20 pt-4 sm:px-6 sm:py-20 sm:pt-4 lg:max-w-7xl lg:px-8 lg:py-20 lg:pt-4">
          <div className="mt-16 space-y-20">
            {features.map((feature, featureIdx) => (
              <div
                key={feature.name}
                className="flex flex-col lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-7 xl:col-start-8',
                    'mb-8 lg:col-span-6 lg:row-start-1 lg:mt-0 lg:mb-0 xl:col-span-5',
                  )}
                >
                  <h3 className="text-2xl font-medium text-cyan-600">{feature.name}</h3>
                  <p className="mt-1 text-base font-medium text-cyan-500">{feature.subtitle}</p>
                  <p className="mt-2 text-lg/8 text-slate-700">{feature.description}</p>
                  
                  {feature.quote && (
                    <blockquote className="mt-4 text-base font-medium text-slate-700 italic border-l-4 border-cyan-600 pl-4">
                      "{feature.quote}"
                    </blockquote>
                  )}
                  
                  {feature.additionalInfo && (
                    <p className="mt-6 text-lg/8 text-slate-700 leading-relaxed">{feature.additionalInfo}</p>
                  )}
                  
                  {feature.craftmanshipPromise && (
                    <div className="mt-6">
                      <h4 className="text-lg/8 font-semibold text-cyan-600 mb-4">{feature.craftmanshipPromise.title}</h4>
                      <ul className="space-y-3">
                        {feature.craftmanshipPromise.items.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-cyan-500 mr-3 text-lg flex-shrink-0">✿</span>
                            <span className="text-slate-700 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-7 xl:col-start-6' : 'lg:col-start-1',
                    'flex-auto lg:col-span-6 lg:row-start-1 xl:col-span-7',
                  )}
                >
                  <img
                    alt={feature.imageAlt}
                    src={feature.imageSrc}
                    className="aspect-3/2 w-full rounded-lg bg-slate-100 object-cover object-top"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ScrollToTopButton />
      <Footer onNavigate={_onNavigate} />
    </>
  )
}