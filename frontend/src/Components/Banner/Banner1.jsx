import React from 'react'
import b1 from '../../assets/b1.jpg'
import b2 from '../../assets/b2.jpg'
import {motion} from 'framer-motion';


const Banner1 = () => {
  return (
    <div>
    <div className='bg-slate-200 dark:bg-slate-900 dark:text-white'>
    <div className='container md:h-[500px] flex items-center justify-center py-10'>
        <div className=' grid grid-cols-1 items-center gap-4 sm:grid-cols-2'>
            
            <div>
                <motion.p 
                initial={{opacity:0, x:100}}
                whileInView={{opacity:1, x:0, transition:{duration:0.4, delay:0.6}}}
                className='text-slate-700 text-xl ml-4 leading-7 text-justify dark:text-slate-100 max-w-[700px] mr-16 drop-shadow-lg'>
                where the stage comes alive with extraordinary talent and unforgettable performances. 
                We strive to connect audiences with an eclectic mix of shows that celebrate creativity and the performing arts.
                 From gripping dramas that tug at your heartstrings to electrifying concerts that get your adrenaline pumping,
                  our curated selection offers something for everyone. Every show is an invitation to experience stories, emotions, 
                  and artistry in real-time, creating lasting memories with friends and family. 
                Join us in exploring the vibrant world of live entertainment, and let each performance inspire you.
                     </motion.p>
            </div>
            <div>
                <motion.img
                initial={{opacity:0, x:100}}
                whileInView={{opacity:1, x:0, transition:{duration:0.4, delay:0.7}}}
                src={b1} alt='' className='md:max-w-[700px] h-[400px] md:h-[350px] object-cover rounded-2xl ml-24 shadow-[0_0_15px_rgba(0,0,255,0.6)]'/>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Banner1;