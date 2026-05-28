import React from 'react'
import styles from './Explore.module.css'
import FloatingMenu from '../../components/FloatingMenu/FloatingBtn'

const Explore = () => {
  return (
    <div className={styles['explore-tab']}>
      <h2>Explore</h2>
      <div className={styles["all-stub-explore"]}>
        <div>Coming Soon</div>
      </div>
      <FloatingMenu />
    </div>
  )
}

export default Explore