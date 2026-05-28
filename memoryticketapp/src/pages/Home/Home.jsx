import React from 'react'
import styles from './Home.module.css'
import Navbar from '../../components/Navbar/Navbar.jsx'
import Gallery from '../../components/Gallery/Gallery.jsx'
import FloatingBtn from '../../components/FloatingMenu/FloatingBtn.jsx'

const Home = ({recieveData}) => {

    return (
        <div className={styles['home-screen']}>
            <Navbar />
            <Gallery stubData={recieveData} />
            <FloatingBtn />
        </div>
    )
}

export default Home