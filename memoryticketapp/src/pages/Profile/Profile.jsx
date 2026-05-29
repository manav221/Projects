import React from 'react'
import FloatingBtn from '../../components/FloatingMenu/FloatingBtn'
import styles from './Profile.module.css'
import TicketStub from '../../components/TicketStub/TicketStub'

const Profile = ({ recieveData }) => {
  return (
    <div className={styles['profile-tab']}>
      <div className={styles['user-profile']}>
        <h2>Profile</h2>
        <div className={styles["profile-details"]}>
          <div className={styles["profile-img"]}>
            <img src="https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

          </div>
          <div className={styles["name"]}>Yalina</div>
          <div className={styles["user-name"]}>@yalina420, Pakistan,KHI</div>
          <div className={styles["bio"]}>didn't have bio, coz i have take commerce</div>
          <div className={styles["profile-stat"]}>
            <div className={styles["stubs-created"]}>
              <span>4</span>
              <div>Stubs</div>
            </div>
            <div className={styles["reactions"]}>
              <span>25</span>
              <div>Reactions</div>
            </div>
            <div className={styles["no-of-tickets"]} style={{ borderRight: "none" }}>
              <span>51</span>
              <div>Tickets</div>
            </div>
          </div>
        </div>
        <h3>My Stubs</h3>
        <div className={styles["all-stubs"]}>
          {
            recieveData.map((stub) => {
              return <TicketStub data={stub} />
            })
          }
        </div>

        <div className={styles["options"]}>
          <div className={styles["option"]}>
            Notification
          </div>
          <div className={styles["option"]}>
            Privacy
          </div>
          <div className={styles["option"]}>
            Export Stubs
          </div>
          <div className={styles["option"]}>
            Help & Support
          </div>
          <div className={styles["option"]} style={{color:"red"}}>
            Sign Out
          </div>
        </div>
      </div>
      <FloatingBtn />
    </div>
  )
}

export default Profile