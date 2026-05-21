import React, { useState } from 'react';
import styles from './Topbar.module.css';
import SaveBtn from '../Buttons/SaveBtn';
import ExportBtn from '../Buttons/ExportBtn';
import ShareBtn from '../Buttons/ShareBtn';
import BackBtn from '../Buttons/BackBtn';
import { Ellipsis } from 'lucide-react';

const Topbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openOptions = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    }
    return (
        <div className={styles['top-bar']}>
            <div className={styles["top-bar-left"]}>
                <BackBtn />
            </div>

            <div className={styles["top-bar-right"]}>
                <SaveBtn />
                <div onClick={openOptions} className={styles['more-options']}>
                    <Ellipsis className={styles['more-icon']} size={20} />

                    <div className={`${styles['all-options']} ${styles[!isOpen?"hidden":""]}`}>
                        <ExportBtn />
                        <ShareBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar