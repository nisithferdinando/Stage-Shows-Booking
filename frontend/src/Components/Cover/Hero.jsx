import React from 'react'
import CoverImg from '../../assets/c1.jpg'
import CoverImg2 from '../../assets/c2.png'
import {motion} from 'framer-motion';
import Countdown from 'react-countdown'; 
import CountUp from 'react-countup';


const bgStyle={
 backgroundImage:`url(${CoverImg})`,
 backgroundSize: "cover",
 backgroundPosition: "top",
 backgroundRepeat:"no-repeat",
 width:"100%",
}

const FadeUp = (delay)=>{
  return{
    initial:{
      opacity:0,
      y:100,
    },
    animate:{
      opacity:1,
      y:0,
    
    transition:{
      duration:0.5,
      delay:delay,
      ease:"easeInOut"
    },
  },
  }
};
const countdownRenderer = ({ hours, minutes, seconds }) => {
  return (
    <div className="flex space-x-4">
      <div className="border border-blue-500 rounded-lg p-4 text-xl font-bold text-blue-500">
        {hours}h
      </div>
      <div className="border border-green-500 rounded-lg p-4 text-xl font-bold text-green-500">
        {minutes}m
      </div>
      <div className="border border-red-500 rounded-lg p-4 text-xl font-bold text-red-500">
        {seconds}s
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div>

      <div style={bgStyle}>
        <div className='min-h-[650px] md:min-h-[750px] bg-gradient-to-r from-black/80 to-blue-600/60
         pt-3 pb-10 md:pt-48'>
        <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12 text-white ml-10'>
          {/*Hero text */}
          <div className='ml-10'>
            <motion.h1 
            variants={FadeUp(0.2)}
            initial="initial"
            animate="animate"
            className='text-5xl lg:text-7xl lg:text-left md:max-w-[400px] font-bold'>Experience The Spotlight Today</motion.h1>
            <motion.p 
            variants={FadeUp(0.4)}
            initial="initial"
            animate="animate"
            className='mt-8 text-base leading-relaxed drop-shadow-lg text-justify'>Step into the world of entertainment with today’s featured shows! 
              Whether you're a fan of captivating dramas, laugh-out-loud comedies, or mesmerizing musicals, 
              we’ve got something special lined up just for you. Don’t miss your chance to witness the magic live on 
              stage. Join us and secure your seats for an unforgettable experience. Book now and be part of the action
              </motion.p>
              <motion.div 
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className='space-x-4 mt-8'>
              <button className='btn-primary'>Join us</button>
              <button className='btn-outline'>Book Slot Now</button>
              </motion.div>
          </div>
          {/*counter  */}
           <motion.div
           initial={{opacity:0, x:100}}
           animate={{opacity:1, x:0}}
           transition={{duration:0.5, delay:0.5}}
           className='bg-slate-300 rounded-lg max-w-[500px] -mt-28 ml-28 pb-8 border-[1.5px] border-blue-500 shadow-[0_0_15px_rgba(255,255,0,0.6)]'>
            <div className='flex flex-col items-center'>
            <h2 className='text-2xl text-center font-bold text-gray-700 mt-8'>Don’t Miss Out slots are filling </h2>
            <div className='py-2 text-xl mt-8 '> <Countdown 
                    date={Date.now() + 10 * 60 * 60 * 1000} 
                    renderer={countdownRenderer} /> </div>
           <div className='flex justify-between items-center gap-4 mt-8'>
            <h2 className='text-2xl text-blue-400 font-semibold'>Available Slots</h2>
            <div className='bg-orange-300 text-xl px-4 py-2 rounded-lg text-slate-800'>
              
              <CountUp
              enableScrollSp={true}
              scrollSpyOnce={true}
              start={750}
              end={0}
              duration={40000.25}
              />
              </div>
            </div>
            </div>
           </motion.div>
         
        </div>

        </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;