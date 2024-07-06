import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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
  {
    id: 1,
    image: banner,
    title: 'Banner Design'
    // link:'https://github.com/Neima-Nesru/Mini_Projects/tree/main/PHP_Projects/Home%20Rental%20System'
  },
  {
    id: 2,
    image: UxUi,
    title: 'Web Design'
    // link:'https://github.com/Neima-Nesru/Mini_Projects/tree/main/PHP_Projects/Home%20Rental%20System'
  },
  {
    id: 3,
    image: frontend,
    title: 'Front End web Dev\'t',
    // link:'https://codechats/netlify.app/'
  },
  {
    id: 4,
    image: brochure,
    title: 'Brochure Design'
    // link:'https://github.com/Neima-Nesru/Mini_Projects/tree/main/PHP_Projects/Home%20Rental%20System'
  },
  {
    id: 5,
    image: business,
    title: 'Businesscard Design',
    // link:'https://github.com/Neima-Nesru/Mini_Projects/tree/main/PHP_Projects/Home%20Rental%20System'
  },
  {
    id: 6,
    image: fullstack,
    title: 'Fullstack web Dev\'t',
    link:'https://github.com/Neima-Nesru/Mini_Projects/tree/main/PHP_Projects/Home%20Rental%20System'
  },
  {
    id: 7,
    image: brochure2,
    title: 'Brochure Design'
    // link:'https://github.com/Neima-Nesru/Mini_Projects/tree/main/PHP_Projects/Home%20Rental%20System'
  },
  {
    id: 8,
    image: abugida,
    title: 'Banner Design'
    //link:'https://github.com/Neima-Nesru/Mini_Projects/tree/main/PHP_Projects/Home%20Rental%20System'
  },
  {
    id: 9,
    image: samcon,
    title: 'Businesscard Design'
    //link:'https://github.com/Neima-Nesru/Mini_Projects/tree/main/PHP_Projects/Home%20Rental%20System'
  },
  {
    id: 10,
    image: HA,
    title: 'Bussinesscard Design'
    //link:'https://github.com/Neima-Nesru/Mini_Projects/tree/main/PHP_Projects/Home%20Rental%20System'
  },
  {
    id: 11,
    image: packageDesign,
    title: 'Package Design'
    //link:'https://github.com/Neima-Nesru/Mini_Projects/tree/main/PHP_Projects/Home%20Rental%20System'
  },
  {
    id: 12,
    image: YB,
    title: 'Businesscard Design'
    //link:'https://github.com/Neima-Nesru/Mini_Projects/tree/main/PHP_Projects/Home%20Rental%20System'
  },
  {
    id: 13,
    image: web,
    title: 'Responsive web Design',
    //link:'https://github.com/Neima-Nesru/Mini_Projects/tree/main/PHP_Projects/Home%20Rental%20System'
  },
 
  {
    id: 14,
    image: umuju,
    title: 'Ads Design',
    //link:'https://github.com/Neima-Nesru/Mini_Projects/tree/main/PHP_Projects/Home%20Rental%20System'
  },
  {
    id: 15,
    image: expense,
    title: 'Front End web Dev\'t',
    link:'https://neima-nesru.github.io/Expense-Tracker-App/'
  }
  
];

const Portfolio = () => {
  return (
    <div className='text-white px-4 sm:px-6 md:px-8'>
      <div className='text-center'>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mt-6">PORTFOLIO</h1>
        <h3 className='mb-4 text-gray-400'>What I have done before.</h3>
      </div>

      <div className='container mx-auto'>
        <Carousel showArrows={true} infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false} autoPlay={true} interval={5000} className='md:hidden'>
          {portfolioItems.map(item => (
            <div key={item.id}>
              <a href={item.link} target='_blank'>
              <img className='w-full rounded' src={item.image} alt={item.title} />
              </a>
              <p className='pt-10'>{item.title}</p>
            </div>
          ))}
        </Carousel>

        <div className='hidden md:flex flex-wrap items-center justify-between'>
          {portfolioItems.map(item => (
            <div key={item.id} className='p-5 md:w-1/3'>
              <a href={item.link} target='_blank'>
              <img className='w-full rounded' src={item.image} alt={item.title} />
              </a>
              <p className='pt-10'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
