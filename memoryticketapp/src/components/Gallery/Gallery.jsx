import React from 'react'
import styles from './Gallery.module.css'
import TicketStub from '../TicketStub/TicketStub.jsx'

const Gallery = ({ stubData }) => {
    return (
        <div className={styles['all-stubs']}>
            {   
                stubData.length <= 0 ? <div className={styles['initial-txt']}>
                    <span>Create Your First Stub</span>
                </div> :
                stubData.map((stub) => {
                    return <TicketStub data={stub} />
                })
            }
        </div>
    )
}

export default Gallery