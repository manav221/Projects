import React from 'react'
import styles from './Buttons.module.css'
import { ChevronLeft } from 'lucide-react';

const BackBtn = ({ name: btnName }) => {
    return (
        <button className={styles['btn']}>
            {
                btnName ? <span>{btnName}</span>: <>
                <ChevronLeft/>
                <span>Back</span>
                </>
            }
            
        </button>
    )
}

export default BackBtn