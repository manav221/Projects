import React from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Gallery from '../components/Gallery/Gallery.jsx'
import FloatingBtn from '../components/FloatingBtn/FloatingBtn.jsx'

const Home = () => {
    return (
        <div className='home-screen'>
            <Navbar />
            <Gallery />
            <FloatingBtn />
        </div>
    )
}

export default Home