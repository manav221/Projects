import React from 'react'
import { ImageUp } from 'lucide-react';
import styles from './Buttons.module.css'

const ExportBtn = () => {
  return (
    <button className={styles['export-btn','btn']}>
        <ImageUp size={15}/>
        <span>Export</span>
    </button>
  )
}

export default ExportBtn