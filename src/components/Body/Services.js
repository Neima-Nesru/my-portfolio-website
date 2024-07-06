import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaintBrush, faPencilRuler, faCode } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const servicesData = [
  {
    icon: faPaintBrush,
    title: 'DESIGN SOLUTIONS',
    description: "From logo design and branding to print materials such as business cards, banners, flyers, and brochures, I specialize in creating visually striking assets."
  },
  {
    icon: faPencilRuler,
    title: 'UX/UI',
    description: "Whether you're looking for responsive design or user-friendly interfaces, I specialize in crafting websites that reflect your unique brand identity and engage your target audience."
  },
  {
    icon: faCode,
    title: 'WEB DEV\'T',
    description: "An online presence for the business has become a must in today’s world. I build hybrid web apps that assure your online presence."
  }
];

const Services = () => {
  return (
    <div className='text-white px-4 sm:px-6 md:px-8 mt-20'>
      <div className='text-center'>
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mt-6">SERVICES</h1>
        <h3 className='mb-4 text-gray-400'>What I offer.</h3>
      </div>

      <div className='container mx-auto'>
        <Carousel showArrows={true} infiniteLoop={true} showStatus={false} showIndicators={false} showThumbs={false} autoPlay={true} interval={5000} className='md:hidden'>
          {servicesData.map((service, index) => (
            <div key={index} className='border rounded m-4 py-6 px-5 text-center'>
              <FontAwesomeIcon icon={service.icon} size="3x" className="text-purple-600 mb-4" />
              <h3 className='text-xl leading-tight py-5'>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </Carousel>

        <div className='hidden md:flex flex-row justify-center'>
          {servicesData.map((service, index) => (
            <div key={index} className='border rounded m-4 md:m-10 py-6 px-5 w-full md:w-1/3 text-center'>
              <FontAwesomeIcon icon={service.icon} size="3x" className="text-purple-600 mb-4" />
              <h3 className='text-xl leading-tight py-5'>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
