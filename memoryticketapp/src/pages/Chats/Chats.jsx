import React from 'react'
import styles from './Chats.module.css'
import FloatingMenu from '../../components/FloatingMenu/FloatingBtn'
const Chats = () => {
  return (
    <div className={styles['chats-tab']}>
      <h2>Chats</h2>
      <div className={styles["all-chats"]}>
        <div>Coming Soon</div>
      </div>
      <FloatingMenu />
    </div>
  )
}

export default Chats