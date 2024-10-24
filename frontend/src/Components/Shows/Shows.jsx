import React from 'react';
import s3 from '../../assets/s3.jpg';
import s1 from '../../assets/s1.jpg';
import s2 from '../../assets/s2.jpg';
import s4 from '../../assets/s4.jpg';
import Slider from 'react-slick';
import {motion} from 'framer-motion';

const Show = [
  {
    id: 1,
    name: "Legends of the Forgotten",
    img: s3,
  },
  {
    id: 2,
    name: "The Enchanted Forest Ballet",
    img: s1,
  },
  {
    id: 3,
    name: "Rhythms of the Wild",
    img: s2,
  },
  {
    id: 4,
    name: "Stardust Serenade",
    img: s4,
  },
];

const Shows = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,                  
    slidesToShow: 3,             
    slidesToScroll: 1,
    autoplay: false,              
    autoplaySpeed: 2500,         
    cssEase: "ease-in-out",     
    pauseOnHover: true,
    lazyLoad: 'ondemand',       
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='container overflow-hidden'>
      <div className='py-8'>
        <div>
          <motion.h1
           initial={{opacity:0, x:100}}
           animate={{opacity:1, x:0}}
           transition={{duration:0.5, delay:0.4}}
           className='text-center text-slate-700 font-sans text-4xl dark:text-slate-100'>
            Our Past Shows
          </motion.h1>
        </div>
        <motion.div
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.8, delay:0.4}}
        whileInView={{opacity:1, x:0}}
        >
          <Slider {...settings}>
            {Show.map((show) => {
              return (
                <div 
               
                key={show.id} 
                className='mt-8'>
                  <div className='flex gap-4 py-8 shadow-lg mx-4 rounded-xl bg-slate-200 dark:bg-slate-800 justify-center mb-10'>
                    <div className='flex flex-col items-center justify-center gap-5'>
                      <h1 className='text-center text-slate-800 font-sans text-xl uppercase dark:text-slate-200'>
                        {show.name}
                      </h1>
                      <img
                        src={show.img} 
                        alt={show.name}
                        className='w-64 h-56 rounded-lg mt-4 drop-shadow-lg'
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default Shows;
