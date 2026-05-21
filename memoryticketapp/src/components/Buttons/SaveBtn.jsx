import React from 'react'
import { TicketCheck } from 'lucide-react';
import styles from './Buttons.module.css'

const SaveBtn = () => {
  return (
    <button className={styles['save-btn','btn']}>
        <TicketCheck size={20} />
        <span>Save</span>
    </button>
  )
}

export default SaveBtn