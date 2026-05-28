import React from 'react'
import { Link } from 'react-router-dom'
import styles from './FloatingBtn.module.css'
import { House, Compass, MessagesSquare } from 'lucide-react';

const FloatingBtn = () => {
  return (
    <div className={styles['floating-btns']}>
      <Link to={"/"} className={styles['cta-btn']}>
        <House size={25} />
      </Link>
      <Link to={"/explore"} className={styles['cta-btn']}>
        <Compass size={25} />
      </Link>
      <Link to={"/chats"} className={styles['cta-btn']}>
        <MessagesSquare size={25} />
      </Link>
      <Link to={"/profile"}>
        <div className={styles["profile-icon"]}>
          <div className={styles["img-container"]}>
            <img src="https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default FloatingBtn