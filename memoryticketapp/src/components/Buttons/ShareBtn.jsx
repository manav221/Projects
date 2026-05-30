import React from 'react'
import { SquareArrowOutUpRight } from 'lucide-react';
import styles from './Buttons.module.css'

const ShareBtn = () => {
  return (
    <button className={styles['share-btn','btn']}>
        <SquareArrowOutUpRight size={15} />
        <span>Share</span>
    </button>
  )
}

export default ShareBtn