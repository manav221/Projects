import React from 'react'
import styles from './TicketStub.module.css'
import quotes from '../../assets/quotes.svg'
import { MapPin, Calendar } from 'lucide-react';
import stub from '../../assets/image 1.svg'

const TicketStub = ({ data }) => {
    return (
        <div className={styles['stub']}>
            <img className={styles['stub-mockup']} src={stub} alt="" />
            <div className={styles['stub-details']}>
                <div className={styles['stub-top-data']}>
                    <img className={styles['img']} src={data.img} />
                    <div className={styles['stub-name']}>{data.title}</div>
                    <div className={styles['stub-date-time']}>
                        <span className={styles['stub-location']}>
                            <MapPin size={12.55} />
                            <span className={styles['sdt']}>
                                {data.place}
                            </span>
                        </span>
                        <span className={styles['stub-time']}>
                            <Calendar size={12} />
                            <span className={styles['sdt']}>{data.date}</span>
                        </span>
                    </div>
                </div>
                <div className={styles["stub-bottom-data"]}>
                    <img src={quotes} alt="" />
                    <div className={styles['stub-caption']}>{data.caption}</div>
                </div>
            </div>
        </div>
    )
}

export default TicketStub