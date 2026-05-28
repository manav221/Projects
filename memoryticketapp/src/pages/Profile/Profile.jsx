import React from 'react'
import FloatingBtn from '../../components/FloatingMenu/FloatingBtn'

const Profile = ({recieveData}) => {
  return (
    <div className='user-profile'>
      <h2>Profile</h2>
      <div className="profile-details">
        <div className="profile-img"></div>
        <div className="name">Yalina</div>
        <div className="user-name">@yalina420</div>
        <div className="bio">didn't have bio, coz i have take commerce</div>
        <div className="profile-stat">
          <div className="stubs-created">
            <span>{recieveData.length}</span>
            <div>Stubs</div>
          </div>
          <div className="reactions">
            <span>25</span>
            <div>Reactions</div>
          </div>
          <div className="no-of-tickets">
            <span>51</span>
            <div>Tickets</div>
          </div>
        </div>
      </div>
      <FloatingBtn />
    </div>
  )
}

export default Profile