import React from 'react'
import styles from './Buttons.module.css'
import { ChevronLeft } from 'lucide-react';

const BackBtn = ({ name: btnName, onClick, customStyle,type }) => {
    return (
        <button type={type} className={styles['btn']} onClick={onClick} style={customStyle}>
            {
                btnName ? <span>{btnName}</span> : <>
                    <ChevronLeft />
                    <span>Back</span>
                </>
            }
        </button>
    )
}

export default BackBtn