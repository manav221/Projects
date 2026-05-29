import React from 'react'
import styles from './Notification.module.css'
import timeAgoUtils from '../../utils/timeAgoUtils'
import { TicketPlus } from 'lucide-react';
import FloatingBtn from '../FloatingMenu/FloatingBtn';

const Notification = ({ allStubData }) => {
    console.log(allStubData[0].time);
    return (
        <div className={styles['notification-tab']}>
            <div className={styles["noti-tab-all"]}>
                <div className={styles["notification-header"]}>
                    <h2>Notification</h2>
                </div>

                <div className={styles["all-notification"]}>
                    {
                        !allStubData.length <= 0 ? allStubData.map((stub) => {
                            return (
                                <div className={styles["notification"]}>
                                    <div className={styles["notification-type-img"]}>
                                        <TicketPlus size={25} />
                                    </div>
                                    <div className='notification-title'>
                                        <p style={{ fontSize: "var(--font-lg)" }}>Create new stub.</p>
                                        <span style={{ fontSize: "var(--font-md)", color: "gray" }}>{timeAgoUtils(stub)}</span>
                                    </div>
                                </div>
                            )
                        }):
                        <div>No notifications</div>
                    }

                </div>
            </div>
            <FloatingBtn />
        </div>
    )
}

export default Notification