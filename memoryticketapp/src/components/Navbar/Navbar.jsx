import React from 'react'
import styles from './Navbar.module.css'
import { Bell, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className={styles['nav-bar']}>
      <Link to={"/create-stub"} className={styles['new-stub']}>
        <Ticket size={25} style={{ transform: "rotate(90deg)" }} />
      </Link>
      <div className={styles["app-name"]}>Memory Stubs</div>
      <Link to={"/notifications"}>
        <div className={styles['app-notification']}>
          <Bell />
          <div className={styles['badge']}>
            <span></span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Navbar