import React from 'react'
import styles from './Navbar.module.css'
import { Bell } from 'lucide-react';

const Navbar = () => {
  return (
    <div className={styles['nav-bar']}>
      <div className={styles["profile-icon"]}>
        <div className={styles["img-container"]}>
          <img src="https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
      <div className={styles["app-name"]}>Memory Stubs</div>
      <div className={styles['app-notification']}>
          <Bell />
        <div className={styles['badge']}>
          <span></span>
        </div>
      </div>

    </div>
  )
}

export default Navbar