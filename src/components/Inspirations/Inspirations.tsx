import { useState } from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ScrollToTopButton from '../Layout/ScrollToTopButton'
import InspirationsBanner from './InspirationsBanner'
import Tabs from './InspirationsTabs'
import InspirationsPagination from './InspirationsPagination'
import WildflowerBouquetImg from '../../assets/Inspirations/wildflower_bouquet.jpg'
import BridalBouquetImg from '../../assets/Inspirations/bridal_bouquet.jpg'
import PeonyBouquetImg from '../../assets/Inspirations/peony_bouquet.jpg'
import CaringFlowersImg from '../../assets/Inspirations/caring_flowers.jpg'
import ReceptionDecorImg from '../../assets/Inspirations/reception_decor.jpg'
import OrchidCareImg from '../../assets/Inspirations/orchid_care.jpg'
import DriedBouquetImg from '../../assets/Inspirations/dried_bouquet.jpg'
import FlowerBookImg from '../../assets/Inspirations/flower_book.jpg'
import FlowerCrownImg from '../../assets/Inspirations/flower_crown.jpg'
import DIYTerrariumImg from '../../assets/Inspirations/diy_terrarium.jpg'
const posts = [
  {
    // Seasonal
    id: 1,
    title: 'Blooming with the Seasons: A Florist\'s Guide',
    href: '#',
    description:
      'From the fresh tulips of spring to the rich evergreens of winter, learn the secrets to creating stunning arrangements that capture the essence of each season.',
    fullContent: `
      <p>As the seasons change, so does nature's palette. Each time of year brings its own unique beauty and challenges for floral designers. Understanding seasonal flowers is key to creating arrangements that feel authentic and timely.</p>
      
      <h3>Spring: Renewal and Fresh Beginnings</h3>
      <p>Spring flowers like tulips, daffodils, and cherry blossoms represent new life and hope. Their delicate petals and soft colors create arrangements that feel light and optimistic. When working with spring blooms, focus on creating airy compositions that celebrate the season's gentle awakening.</p>
      
      <h3>Summer: Bold and Vibrant</h3>
      <p>Summer brings us sunflowers, peonies, and roses in their full glory. These flowers can handle more dramatic arrangements with rich colors and fuller compositions. Don't be afraid to mix bold hues and create arrangements that capture summer's exuberant energy.</p>
      
      <h3>Autumn: Warm and Cozy</h3>
      <p>Fall flowers like chrysanthemums, dahlias, and marigolds offer warm oranges, deep reds, and golden yellows. Incorporate natural elements like branches, berries, and dried grasses to create arrangements that feel cozy and harvest-inspired.</p>
      
      <h3>Winter: Elegant Simplicity</h3>
      <p>Winter arrangements often feature evergreens, white flowers, and metallic accents. The key is creating elegant, sophisticated designs that bring warmth to the coldest season. Think amaryllis, white roses, and pine branches with subtle sparkle.</p>
    `,
    imageUrl: WildflowerBouquetImg,
    imageAlt: 'Blooming with the Seasons: A Florist\'s Guide',
    date: 'Mar 5, 2025',
    datetime: '2025-03-05',
    category: { title: 'Seasonal' },
    author: {
      name: 'Courtney Henry',
      role: 'Head of Floral Sourcing',
    },
  },
  {
    id: 2,
    title: 'Beyond the Rose: This Year\'s Top Wedding Bouquet Trends',
    href: '#',
    description:
      'Planning your big day? Explore the latest trends captivating modern brides, from minimalist eucalyptus bouquets to lush, cascading works of art.',
    fullContent: `
      <p>Wedding bouquet trends are evolving beyond traditional roses and baby's breath. Today's brides are embracing unique textures, unexpected color palettes, and meaningful flower choices that reflect their personal style.</p>
      
      <h3>Minimalist Eucalyptus</h3>
      <p>Clean lines and simple elegance define this trend. Eucalyptus bouquets with white or cream accents create a modern, sophisticated look that photographs beautifully and complements any wedding style.</p>
      
      <h3>Cascading Garden Style</h3>
      <p>These organic, flowing bouquets mimic a garden in full bloom. Mixed textures, varying heights, and a natural, unstructured appearance create romantic, whimsical arrangements perfect for outdoor ceremonies.</p>
      
      <h3>Bold Color Statements</h3>
      <p>Brides are embracing vibrant colors like deep burgundy, rich navy, and sunset oranges. These dramatic bouquets make stunning focal points and create memorable photo opportunities.</p>
      
      <h3>Dried and Preserved Elements</h3>
      <p>Incorporating dried flowers, pampas grass, and preserved elements adds texture and ensures your bouquet can be kept as a lasting memento of your special day.</p>
    `,
    imageUrl: BridalBouquetImg,
    imageAlt: 'Beyond the Rose: This Year\'s Top Wedding Bouquet Trends',
    date: 'Apr 12, 2025',
    datetime: '2025-04-12',
    category: { title: 'Seasonal' },
    author: {
      name: 'Michael Foster',
      role: 'Wedding & Events Lead',
    },
  },
  {
    id: 3,
    title: 'Peony Season: A Guide to the World\'s Most Romantic Bloom',
    href: '#',
    description:
      'For a few precious weeks each year, the peony reigns supreme. Learn about the different varieties, their meanings, and how to care for these stunning, short-lived treasures.',
    fullContent: `
      <p>Peonies are among the most beloved flowers in the world, and for good reason. Their lush, ruffled petals and intoxicating fragrance make them the epitome of romance and luxury.</p>
      
      <h3>The Brief but Beautiful Season</h3>
      <p>Peony season is fleeting, typically lasting just 4-6 weeks in late spring to early summer. This short window makes them all the more precious and sought-after for special occasions.</p>
      
      <h3>Popular Varieties</h3>
      <p>From the classic pink Sarah Bernhardt to the pristine white Duchesse de Nemours, each peony variety offers its own unique charm. Coral Charm brings warm peachy tones, while Karl Rosenfield offers deep, rich reds.</p>
      
      <h3>Care and Handling</h3>
      <p>Peonies are delicate and require special care. Cut stems at an angle under running water, remove lower leaves, and place in cool water immediately. They prefer cool temperatures and will last longer in air-conditioned spaces.</p>
      
      <h3>Symbolic Meaning</h3>
      <p>In flower language, peonies represent honor, wealth, and good fortune. They're also symbols of romance and prosperity, making them perfect for weddings and celebrations.</p>
    `,
    imageUrl: PeonyBouquetImg,
    imageAlt: 'Peony Season: A Guide to the World\'s Most Romantic Bloom',
    date: 'May 20, 2025',
    datetime: '2025-05-20',
    category: { title: 'Seasonal' },
    author: {
      name: 'Whitney Francis',
      role: 'Lead Floral Artist',
    },
  },
  // Care Tips
  {
    id: 4,
    title: 'Bloom for Longer: 5 Pro Tips to Keep Your Flowers Fresh',
    href: '#',
    description:
      'Extend the life and beauty of your fresh arrangements with these simple, expert-approved tips that keep your blooms vibrant for weeks.',
    fullContent: `
      <p>Nothing is more disappointing than watching beautiful flowers wilt prematurely. With these professional tips, you can significantly extend the life of your arrangements and enjoy their beauty for much longer.</p>
      
      <h3>1. Start with Clean Tools</h3>
      <p>Always use clean, sharp scissors or floral shears. Dirty tools can introduce bacteria that will shorten your flowers' lifespan. Clean your vase thoroughly with bleach solution before arranging.</p>
      
      <h3>2. Cut Stems at an Angle</h3>
      <p>Cut stems at a 45-degree angle under running water. This increases the surface area for water absorption and prevents the stem from sitting flat on the vase bottom, which can block water uptake.</p>
      
      <h3>3. Remove Lower Leaves</h3>
      <p>Strip all leaves that would sit below the waterline. Submerged leaves decay quickly and create bacteria that can clog stems and shorten flower life.</p>
      
      <h3>4. Use Flower Food</h3>
      <p>Commercial flower food contains sugar for nourishment, acidifiers to improve water uptake, and antibacterial agents. If you don't have flower food, add a teaspoon of sugar and a few drops of bleach to your water.</p>
      
      <h3>5. Change Water Regularly</h3>
      <p>Replace the water every 2-3 days, re-cutting stems each time. Fresh, clean water is essential for maximum flower longevity.</p>
    `,
    imageUrl: CaringFlowersImg,
    imageAlt: 'Bloom for Longer: 5 Pro Tips to Keep Your Flowers Fresh',
    date: 'Feb 18, 2025',
    datetime: '2025-02-18',
    category: { title: 'Care Tips' },
    author: {
      name: 'Lindsay Walton',
      role: 'Floral Designer',
    },
  },
  {
    id: 5,
    title: 'Designing for Success: Choosing the Right Flowers for Your Office',
    href: '#',
    description:
      'Flowers in the workplace are more than just decoration. Discover which blooms can enhance creativity, reduce stress, and create a sophisticated, welcoming atmosphere.',
    fullContent: `
      <p>The right flowers can transform your office environment, boosting productivity and creating a more pleasant workspace. Research shows that plants and flowers in the office can reduce stress levels by up to 15% and increase productivity by 12%.</p>
      
      <h3>Low-Maintenance Options</h3>
      <p>For busy offices, choose hardy flowers like chrysanthemums, gerbera daisies, or peace lilies. These varieties require minimal care while providing maximum visual impact and air-purifying benefits.</p>
      
      <h3>Color Psychology in the Workplace</h3>
      <p>Blue flowers promote focus and calm, making them perfect for meeting rooms. Yellow blooms stimulate creativity and energy, ideal for brainstorming spaces. White flowers create a clean, professional atmosphere suitable for reception areas.</p>
      
      <h3>Placement Tips</h3>
      <p>Position flowers near natural light sources but away from air conditioning vents. Reception desks, conference tables, and common areas are ideal locations that maximize visibility and impact.</p>
    `,
    imageUrl: ReceptionDecorImg,
    imageAlt: 'Designing for Success: Choosing the Right Flowers for Your Office',
    date: 'Jun 10, 2025',
    datetime: '2025-06-10',
    category: { title: 'Care Tips' },
    author: {
      name: 'Leslie Alexander',
      role: 'Co-Founder & Head of Operations',
    },
  },
  {
    id: 6,
    title: 'Orchid Care: Secrets to Keeping Your Orchid Thriving',
    href: '#',
    description:
      'Intimidated by your new orchid? Follow our simple guide on watering, light, and care to ensure your elegant plant blooms for years to come.',
    fullContent: `
      <p>Orchids have a reputation for being difficult, but with the right knowledge, they're surprisingly easy to care for. These elegant plants can bloom for months and live for decades with proper care.</p>
      
      <h3>The Ice Cube Watering Method</h3>
      <p>Place 2-3 ice cubes on the potting medium once a week. As they melt slowly, they provide just the right amount of water without overwatering. This method prevents root rot, the most common cause of orchid death.</p>
      
      <h3>Light Requirements</h3>
      <p>Orchids prefer bright, indirect light. An east-facing window is ideal. If leaves turn dark green, they need more light. If they become reddish or yellow, they're getting too much direct sun.</p>
      
      <h3>Humidity and Air Circulation</h3>
      <p>Orchids thrive in 40-70% humidity. Place them on a humidity tray filled with pebbles and water, or use a humidifier. Good air circulation prevents fungal problems, so avoid enclosed spaces.</p>
      
      <h3>Repotting and Fertilizing</h3>
      <p>Repot every 1-2 years using orchid bark mix. Feed monthly with diluted orchid fertilizer during growing season, and reduce feeding in winter.</p>
    `,
    imageUrl: OrchidCareImg,
    imageAlt: 'Orchid Care: Secrets to Keeping Your Orchid Thriving',
    date: 'Aug 22, 2025',
    datetime: '2025-08-22',
    category: { title: 'Care Tips' },
    author: {
      name: 'Courtney Henry',
      role: 'Head of Floral Sourcing',
    },
  },
  {
    id: 7,
    title: 'Everlasting Beauty: How to Care for Dried Flower Arrangements',
    href: '#',
    description:
      'Dried flowers offer timeless beauty, but they still need a little love. Learn the best ways to clean, display, and preserve your everlasting bouquets.',
    fullContent: `
      <p>Dried flowers bring lasting beauty to any space, but proper care ensures they maintain their charm for years. Unlike fresh flowers, dried arrangements require different maintenance techniques.</p>
      
      <h3>Gentle Cleaning Methods</h3>
      <p>Use a soft paintbrush or hair dryer on cool setting to remove dust. For delicate flowers, place them in a paper bag with uncooked rice and shake gently - the rice will absorb dust and moisture.</p>
      
      <h3>Ideal Display Conditions</h3>
      <p>Keep dried flowers away from direct sunlight, which can fade colors quickly. Avoid humid areas like bathrooms or kitchens. A cool, dry room with stable temperature is perfect for preserving their appearance.</p>
      
      <h3>Preventing Brittleness</h3>
      <p>Spray lightly with unscented hairspray to add flexibility and prevent petals from dropping. This protective coating also helps maintain color vibrancy.</p>
      
      <h3>Storage Tips</h3>
      <p>When not displayed, store dried flowers in boxes with tissue paper. Add silica gel packets to absorb any moisture and prevent mold growth.</p>
    `,
    imageUrl: DriedBouquetImg,
    imageAlt: 'Everlasting Beauty: How to Care for Dried Flower Arrangements',
    date: 'Sep 5, 2025',
    datetime: '2025-09-05',
    category: { title: 'Care Tips' },
    author: {
      name: 'Tom Cook',
      role: 'Brand Storyteller & Content Creator',
    },
  },
  // Life & Style
  {
    id: 8,
    title: 'The Language of Flowers: Uncovering Their Secret Meanings',
    href: '#',
    description:
      'Did you know that every flower holds a secret? Delve into the rich history and symbolism of your favorite blooms and learn how to create bouquets that speak volumes.',
    fullContent: `
      <p>For centuries, flowers have been used to communicate messages that words couldn't express. This symbolic language, known as floriography, reached its peak during the Victorian era when social conventions limited direct emotional expression.</p>
      
      <h3>Classic Flower Meanings</h3>
      <p>Red roses symbolize passionate love, while yellow roses represent friendship. White lilies convey purity and rebirth, making them popular for weddings and memorials. Forget-me-nots, as their name suggests, represent true love and remembrance.</p>
      
      <h3>Color Significance</h3>
      <p>The same flower can convey different messages based on its color. Pink flowers generally express gratitude and appreciation, while purple blooms represent dignity and admiration. White flowers often symbolize new beginnings and purity.</p>
      
      <h3>Creating Meaningful Bouquets</h3>
      <p>Combine flowers thoughtfully to create personalized messages. A bouquet of sunflowers (adoration) with baby's breath (everlasting love) and eucalyptus (protection) creates a powerful statement of enduring devotion.</p>
      
      <h3>Modern Applications</h3>
      <p>Today's flower language is more flexible, but understanding traditional meanings adds depth to your floral gifts and arrangements.</p>
    `,
    imageUrl: FlowerBookImg,
    imageAlt: 'The Language of Flowers: Uncovering Their Secret Meanings',
    date: 'Jan 15, 2025',
    datetime: '2025-01-15',
    category: { title: 'Life & Style' },
    author: {
      name: 'Tom Cook',
      role: 'Brand Storyteller & Content Creator',
    },
  },
  // DIY
  {
    id: 9,
    title: 'How to Make a Beautiful Flower Crown: A Step-by-Step Guide',
    href: '#',
    description:
      'Our easy-to-follow, step-by-Step guide will show you how to create your own stunning flower crown. Perfect for festivals, photoshoots, or any day you want to feel magical.',
    fullContent: `
      <p>Flower crowns are perfect for special occasions, festivals, or whenever you want to feel like a woodland fairy. With the right materials and technique, you can create a stunning crown that's both beautiful and comfortable to wear.</p>
      
      <h3>Materials You'll Need</h3>
      <p>Gather floral wire, wire cutters, floral tape, small flowers (like baby's breath, waxflower, or small roses), greenery (eucalyptus or ivy), and ribbon for ties. Choose flowers that are sturdy and won't wilt quickly.</p>
      
      <h3>Creating the Base</h3>
      <p>Measure your head circumference and cut floral wire 2 inches longer. Create a circle and twist the ends together. Wrap the entire circle with floral tape for comfort and better grip.</p>
      
      <h3>Adding Flowers and Greenery</h3>
      <p>Start with your greenery as a base, securing each piece with floral tape. Layer flowers on top, varying heights and colors for visual interest. Work in one direction around the crown for a natural flow.</p>
      
      <h3>Finishing Touches</h3>
      <p>Add ribbon ties at the back for adjustability and extra security. Mist lightly with water to keep flowers fresh, and store in the refrigerator until ready to wear.</p>
    `,
    imageUrl: FlowerCrownImg,
    imageAlt: 'How to Make a Beautiful Flower Crown: A Step-by-Step Guide',
    date: 'Jul 7, 2025',
    datetime: '2025-07-07',
    category: { title: 'DIY' },
    author: {
      name: 'Leonard Krasner',
      role: 'Workshop Coordinator',
    },
  },
  {
    id: 10,
    title: 'Create a Miniature World: Your First DIY Terrarium Guide',
    href: '#',
    description:
      'Bring a touch of green into your home with a beautiful, self-sustaining terrarium. We\'ll guide you through the simple steps to create your own tiny glass garden.',
    fullContent: `
      <p>Terrariums are miniature ecosystems that bring nature indoors while requiring minimal maintenance. These glass gardens are perfect for small spaces and make wonderful gifts or home decor pieces.</p>
      
      <h3>Choosing Your Container</h3>
      <p>Select a clear glass container with a wide opening for easy planting. Fish bowls, large mason jars, or specialized terrarium vessels work well. Ensure it has good visibility from multiple angles.</p>
      
      <h3>Layering for Success</h3>
      <p>Start with a 1-inch layer of pebbles or gravel for drainage. Add a thin layer of activated charcoal to prevent odors and bacteria. Top with 2-3 inches of potting soil suitable for your chosen plants.</p>
      
      <h3>Plant Selection</h3>
      <p>Choose small, slow-growing plants like succulents, air plants, or small ferns. Avoid plants that grow quickly or need frequent watering. Consider different textures and heights for visual interest.</p>
      
      <h3>Care and Maintenance</h3>
      <p>Water sparingly - the glass walls create a humid environment. Place in bright, indirect light and rotate occasionally for even growth. Trim plants as needed to maintain size and shape.</p>
      
      <h3>Decorative Elements</h3>
      <p>Add personality with small decorative stones, miniature figurines, or colored sand layers. Keep decorations minimal to maintain the natural aesthetic.</p>
    `,
    imageUrl: DIYTerrariumImg,
    imageAlt: 'Create a Miniature World: Your First DIY Terrarium Guide',
    date: 'Apr 25, 2025',
    datetime: '2025-04-25',
    category: { title: 'DIY' },
    author: {
      name: 'Leonard Krasner',
      role: 'Workshop Coordinator',
    },
  },
]

interface InspirationsProps {
  onNavigate?: (page: string) => void
}

export default function Inspirations({ onNavigate }: InspirationsProps) {
  const [activeTab, setActiveTab] = useState('All Posts')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedPost, setSelectedPost] = useState<typeof posts[0] | null>(null)
  const postsPerPage = 3

  // Filter posts based on active tab
  const filteredPosts = activeTab === 'All Posts' 
    ? posts 
    : posts.filter(post => post.category.title === activeTab)

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, endIndex)

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName)
    setCurrentPage(1) // Reset to first page when changing tabs
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleSeeMore = (post: typeof posts[0]) => {
    setSelectedPost(post)
  }

  const closeModal = () => {
    setSelectedPost(null)
  }

  return (
    <>
      <Header onNavigate={onNavigate} activePage="inspirations" />
      <InspirationsBanner onNavigate={onNavigate} />
      
      <div className="bg-white">
        {/* Tabs Section */}
        <Tabs activeTab={activeTab} onTabChange={handleTabChange} />
        
        {/* Main Content */}
        <div className="py-20 pt-0 sm:py-20 sm:pt-0 lg:py-20 lg:pt-0">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Posts Grid */}
            <div className="mt-16 space-y-16 lg:mt-20 lg:space-y-20">
              {currentPosts.map((post) => (
                <article key={post.id} className="relative isolate flex flex-col gap-6 lg:flex-row lg:gap-8">
                  <div className="relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img
                      alt={post.title}
                      src={post.imageUrl}
                      className="absolute inset-0 h-full w-full rounded-2xl bg-slate-50 object-cover shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-slate-900/10" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-slate-500">
                        {post.date}
                      </time>
                      <a
                        className="relative z-10 rounded-full bg-slate-50 px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100 transition-colors"
                      >
                        {post.category.title}
                      </a>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-cyan-600 group-hover:text-slate-600 sm:text-xl">
                        <a href={post.href} className="hover:text-slate-600 transition-colors">
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-700 sm:text-base">
                        {post.description}
                      </p>
                      <button 
                        type="button" 
                        onClick={() => handleSeeMore(post)} 
                        className="mt-3 text-sm font-semibold text-cyan-500 hover:text-cyan-400 flex items-center transition-colors relative z-10" 
                      > 
                        See More 
                        <span aria-hidden="true" className="ml-1">→</span> 
                      </button>
                    </div>
                    <div className="mt-6 flex items-center border-t border-slate-900/5 pt-6">
                      <div className="relative flex items-center gap-x-4">
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-slate-900">
                            {post.author.name}
                          </p>
                          <p className="text-slate-600">{post.author.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        
        {/* Pagination Section */}
        <InspirationsPagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalPosts={filteredPosts.length}
          postsPerPage={postsPerPage}
        />
      </div>

      {/* Modal Popup */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Close Button */}
            <button
              type='button'
              onClick={closeModal}
              aria-label="Close article"
              className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
            >
              <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Header Image */}
              <div className="relative h-48 sm:h-64 lg:h-80">
                <img
                  alt={selectedPost.imageAlt}
                  src={selectedPost.imageUrl}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Title Overlay */}
                <div className="absolute bottom-6 left-6 right-16">
                  <div className="flex items-center gap-x-4 text-xs mb-2">
                    <time dateTime={selectedPost.datetime} className="text-white/80">
                      {selectedPost.date}
                    </time>
                    <span className="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1.5 font-medium text-white">
                      {selectedPost.category.title}
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {selectedPost.title}
                  </h1>
                </div>
              </div>
              
              {/* Article Content */}
              <div className="p-6 sm:p-8 lg:p-12">
                {/* Author Info */}
                <div className="flex items-center gap-x-4 mb-8 pb-6 border-b border-slate-200">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-slate-900">
                      {selectedPost.author.name}
                    </p>
                    <p className="text-slate-600">{selectedPost.author.role}</p>
                  </div>
                </div>
                
                {/* Article Body */}
                <div 
                  className="prose prose-slate max-w-none prose-headings:text-slate-900 prose-headings:font-semibold prose-p:text-slate-600 prose-p:leading-7"
                  dangerouslySetInnerHTML={{ __html: selectedPost.fullContent || selectedPost.description }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      
      <ScrollToTopButton />
      <Footer onNavigate={onNavigate} />
    </>
  )
}