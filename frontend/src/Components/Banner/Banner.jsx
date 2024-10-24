import React from 'react'
import b1 from '../../assets/b1.jpg'
import b2 from '../../assets/b2.jpg'
import {motion} from 'framer-motion';


const Banner = () => {
  return (
    <div>
    <div className='bg-slate-200 dark:bg-slate-900 dark:text-white'>
    <div className='container md:h-[500px] flex items-center justify-center py-10'>
        <div className=' grid grid-cols-1 items-center gap-4 sm:grid-cols-2'>
            <div>
                < motion.img
                initial={{opacity:0, x:100}}
                whileInView={{opacity:1, x:0, transition:{duration:0.4, delay:0.4}}}
                src={b2} alt='' className='md:max-w-[700px] h-[400px] md:h-[350px] object-cover rounded-2xl shadow-[0_0_15px_rgba(0,0,255,0.6)]'/>
            </div>
            <div>
                <motion.p 
                initial={{opacity:0, x:100}}
                whileInView={{opacity:1, x:0, transition:{duration:0.4, delay:0.5}}}
                className='text-slate-700 text-xl ml-4 leading-7 text-justify dark:text-slate-100 max-w-[700px] mr-20 drop-shadow-xl'>At <span className='text-blue-800 font-bold dark:text-green-700'>Prime Shows,</span> we believe in the power of storytelling and the excitement of live performances.
                     Our platform brings you a curated selection of shows that cater to all tastes and preferences, 
                     from captivating dramas and side-splitting comedies to breathtaking musicals and exhilarating concerts.
                     Each performance is an opportunity to escape reality and immerse yourself in a world of creativity and talent.
                      Join us as we celebrate the arts and create unforgettable memories with every show
                     </motion.p>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Banner