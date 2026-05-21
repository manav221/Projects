import React from 'react'
import styles from './Gallery.module.css'
import TicketStub from '../TicketStub/TicketStub.jsx'

const Gallery = () => {
    return (
        <div className={styles['all-stubs']}>
            <TicketStub />
        </div>
    )
}

export default Gallery