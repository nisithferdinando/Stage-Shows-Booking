import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {motion} from 'framer-motion'
const Accordions = () => {
  return (
    <div>
    <motion.h2
    initial={{opacity:0, x:-100}}
    whileInView={{opacity:1, x:0, transition:{duration:0.4, delay:0.4}}}
    className='text-4xl text-slate-400 text-center mt-8 dark:text-slate-200'>Frequently Asked Questions</motion.h2>
        <motion.div 
        initial={{opacity:0, x:-100}}
        whileInView={{opacity:1, x:0, transition:{duration:0.4, delay:0.6}}}
        className='mt-10 flex flex-col items-center justify-center space-y-4 pb-16'>
            
        <Accordion className='border-[1.5px] border-slate-300 rounded-lg dark:text-slate-200 text-2xl font-sans w-[1000px] dark:bg-slate-800 '>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          
        >
         How to Book Slots?
        </AccordionSummary>
        <AccordionDetails className='text-lg text-slate-500 -mt-4 dark:text-slate-400'>
        Provide information about the ticket purchasing process, including online options and box office locations.
        </AccordionDetails>
      </Accordion>
      <Accordion className='border-[1.5px] dark:bg-slate-800 dark:text-slate-200 border-slate-300 rounded-lg text-2xl font-sans w-[1000px]'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Number of Slots that can be Booked
        </AccordionSummary>
        <AccordionDetails className='text-lg text-slate-500 -mt-4 dark:text-slate-400'>
        A total of 10 tickets can be booked       
         </AccordionDetails>
      </Accordion>
      <Accordion className='border-[1.5px] border-slate-300 dark:bg-slate-800 dark:text-slate-200 rounded-lg text-2xl font-sans w-[1000px]'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          What amenities are available at the venue?
        </AccordionSummary>
        <AccordionDetails className='text-lg text-slate-500 -mt-4 dark:text-slate-400'>
        Include information about concessions, restrooms, and other facilities.
        </AccordionDetails>
      </Accordion>
        </motion.div>
    </div>
  )
}

export default Accordions