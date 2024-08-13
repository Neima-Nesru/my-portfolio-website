import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaArrowRight } from 'react-icons/fa';
import hudhud from '../../images/myWorks/hudhud-logo.jpg';
import sk from '../../images/myWorks/Hifz-logo.jpg';
import haLogo from '../../images/myWorks/HA-logo.jpg';
import luxe from '../../images/myWorks/luxeModa-logo0.jpg';
import banner from '../../images/myWorks/banner.jpg';
import brochure from '../../images/myWorks/flyer.jpg';
import web from '../../images/myWorks/responsive.jpg';
import UxUi from '../../images/myWorks/foot-ordering.jpg';
import business from '../../images/myWorks/businesscard.jpg';
import frontend from '../../images/myWorks/codechat.jpg';
import fullstack from '../../images/myWorks/homerental.jpg';
import toGo from '../../images/myWorks/2Go.jpg';
import abugida from '../../images/myWorks/abugida.jpg';
import brochure2 from '../../images/myWorks/brochure.jpg';
import samcon from '../../images/myWorks/samcon.jpg';
import HA from '../../images/myWorks/HA.jpg';
import YB from '../../images/myWorks/YB.jpg';
import HAlogo from '../../images/myWorks/HA-logo.png';
import markato from '../../images/myWorks/Markato.jpg';
import packageDesign from '../../images/myWorks/package.jpg';
import umuju from '../../images/myWorks/umuju.jpg';
import expense from '../../images/myWorks/expense-tacker.jpg';

const portfolioItems = [
  { id: 1, image: haLogo, title: 'Logo Design', category: 'graphics' },
  { id: 2, image: luxe, title: 'Logo Design', category: 'graphics' },
  { id: 3, image: sk, title: 'Logo Design', category: 'graphics' },
  { id: 4, image: hudhud, title: 'Logo Design', category: 'graphics' },
  { id: 5, image: banner, title: 'Banner Design', category: 'graphics' },
  { id: 6, image: UxUi, title: 'Web Design', category: 'uxui' },
  { id: 7, image: frontend, title: 'Front End web Dev\'t', category: 'web' },
  { id: 8, image: brochure, title: 'Brochure Design', category: 'graphics' },
  { id: 9, image: business, title: 'Businesscard Design', category: 'graphics' },
  { id: 10, image: fullstack, title: 'Fullstack web Dev\'t', category: 'web', link: 'https://github.com/Neima-Nesru/Mini_Projects/tree/main/PHP_Projects/Home%20Rental%20System' },
  { id: 11, image: brochure2, title: 'Brochure Design', category: 'graphics' },
  { id: 12, image: abugida, title: 'Banner Design', category: 'graphics' },
  { id: 13, image: samcon, title: 'Businesscard Design', category: 'graphics' },
  { id: 14, image: HA, title: 'Bussinesscard Design', category: 'graphics' },
  { id: 15, image: packageDesign, title: 'Package Design', category: 'graphics' },
  { id: 16, image: YB, title: 'Businesscard Design', category: 'graphics' },
  { id: 17, image: web, title: 'Responsive web Design', category: 'uxui' },
  { id: 18, image: umuju, title: 'Ads Design', category: 'graphics' },
  { id: 19, image: expense, title: 'Front End web Dev\'t', category: 'web', link: 'https://neima-nesru.github.io/Expense-Tracker-App/' }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [visibleSkills, setVisibleSkills] = useState(3);

  const filteredSkills = filter === 'all' ? portfolioItems : portfolioItems.filter(skill => skill.category === filter);

  const handleShowMore = () => {
    setVisibleSkills(prev => prev + 4);
  };

  const allSkillsVisible = visibleSkills >= filteredSkills.length;

  return (
    <div className='text-white px-4 sm:px-6 md:px-8'>
      <div className='text-center'>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mt-6">PORTFOLIO</h1>
        <h3 className='mb-4 text-gray-400'>What I have done before.</h3>
      </div>

      <div className="flex justify-center mt-10">
        <p className={`mx-4 my-2 pb-1 cursor-pointer transition-all duration-300 ${filter === 'all' ? 'border-b-2 border-purple-600 ' : 'border-none'}`} onClick={() => setFilter('all')}>All</p>
        <p className={`mx-4 my-2 pb-1 cursor-pointer transition-all duration-300 ${filter === 'graphics' ? 'border-b-2 border-purple-600 ' : 'border-none'}`} onClick={() => setFilter('graphics')}>Graphic Design</p>
        <p className={`mx-4 my-2 pb-1 cursor-pointer transition-all duration-300 ${filter === 'uxui' ? 'border-b-2 border-purple-600 ' : 'border-none'}`} onClick={() => setFilter('uxui')}>UX/UI</p>
        <p className={`mx-4 my-2 pb-1 cursor-pointer transition-all duration-300 ${filter === 'web' ? 'border-b-2 border-purple-600 ' : 'border-none'}`} onClick={() => setFilter('web')}>Web Development</p>
      </div>

      <div className='container mx-auto'>
        <Carousel showArrows={true} infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false} autoPlay={true} interval={5000} className='md:hidden'>
          {filteredSkills.slice(0, visibleSkills).map(item => (
            <div key={item.id}>
              <a href={item.link} target='_blank' rel='noopener noreferrer'>
                <img className='w-full rounded' src={item.image} alt={item.title} />
              </a>
              <p className='pt-10'>{item.title}</p>
            </div>
          ))}
        </Carousel>

        <div className='hidden md:flex flex-wrap items-center justify-between'>
          {filteredSkills.slice(0, visibleSkills).map(item => (
            <div key={item.id} className='p-5 md:w-1/3'>
              <a href={item.link} target='_blank' rel='noopener noreferrer'>
                <img className='w-full rounded' src={item.image} alt={item.title} />
              </a>
              <p className='pt-10'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Show More button is visible only on medium screens and larger */}
      {!allSkillsVisible && filteredSkills.length > visibleSkills && (
        <div className='hidden md:block mt-12'>
          <button 
            onClick={handleShowMore}
            className="bg-purple-900 text-center font-semibold px-4 py-2 rounded text-white"
          >
            See More Works <FaArrowRight className='text-white-800 inline ml-1'/>
          </button>
        </div>
      )}
    </div>
  );
}

export default Portfolio;
