import React from 'react'
import styles from './FloatingBtn.module.css'
import { Ticket } from 'lucide-react';

const FloatingBtn = () => {
  return (
    <div className={styles['create-stub-btn']}>
      <button className={styles['cta-btn']}>
        <Ticket size={20} style={{transform:"rotate(90deg)"}} />
        <span>New Memo</span>
      </button>
    </div>
  )
}

export default FloatingBtn