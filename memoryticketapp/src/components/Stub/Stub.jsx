import React from 'react'
import styles from './Stub.module.css'
import quotes from '../../assets/quotes.svg'
import { MapPin, Calendar } from 'lucide-react';
import stub from '../../assets/image\ 1.svg'

const Stub = () => {
    return (
        <div className={styles['stub']}>
            <img className={styles['stub-mockup']} src={stub} alt="" />
            <div className={styles['stub-details']}>
                <div className={styles['stub-top-data']}>
                    <div className={styles['img']}></div>
                    <div className={styles['stub-name']}>Ghibli Park</div>
                    <div className={styles['stub-date-time']}>
                        <span className={styles['stub-location']}>
                            <MapPin size={12.55} />
                            <span className={styles['sdt']}>
                                Bangalore
                            </span>
                        </span>
                        <span className={styles['stub-time']}>
                            <Calendar size={12} />
                            <span className={styles['sdt']}>18 May 26</span>
                        </span>
                    </div>
                </div>
                <div className={styles["stub-bottom-data"]}>
                    <img src={quotes} alt="" />
                    <div className={styles['stub-caption']}>howl's moving castle! howl's moving castle! </div>
                </div>
            </div>
        </div>
    )
}

export default Stub