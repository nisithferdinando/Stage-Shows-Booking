import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Cover/Hero'
import Form from './Components/Form/Form'
import Banner from './Components/Banner/Banner'
import Banner1 from './Components/Banner/Banner1'
import Shows from './Components/Shows/Shows'
import Accordions from './Components/Accordions/Accordions'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <main className='overflow-x-hidden dark:bg-gray-900 bg-white'>
        <Navbar/>
        <Hero/>
        <Banner/>
        <Banner1/>
        <Form/>
        <Accordions/>
        <Shows/>
        <Footer/>
      </main>
    </div>
  )
}

export default App