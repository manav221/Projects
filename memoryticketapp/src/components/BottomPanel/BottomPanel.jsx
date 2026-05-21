import React from 'react'
import { Crop, TurkishLira } from 'lucide-react';
import { SquarePen } from 'lucide-react';
import { Palette } from 'lucide-react';
import { Replace } from 'lucide-react';
import styles from './BottomPanel.module.css';
import EditTab from '../EditTab/EditTab';
import StubDetails from '../StubDetails/StubDetails';

const BottomPanel = ({ activeTab, setActiveTab }) => {
    const openTab = (tabName) => {
        if (tabName === activeTab) {
            setActiveTab("")
            return
        };
        setActiveTab(tabName);
    }
    return (
        <div onClick={(e) => { e.stopPropagation() }} className={styles['bottom-panel']}>
            <div onClick={(e) => { openTab('img-edit') }} className={styles["stub-img-edit"], styles['panel-option']}>
                <Crop color='white' size={45} />
                {activeTab === "img-edit" ? <EditTab /> : ""}
            </div>
            <div onClick={() => { openTab('content-edit') }} className={styles["stub-content-edit"], styles['panel-option']}>
                <SquarePen color='white' size={45} />
                {activeTab === 'content-edit' ? <StubDetails /> : ""}
            </div>
            <div className={styles["stub-style"], styles['panel-option']}>
                <Palette color='white' size={45} />
            </div>
        </div>
    )
}

export default BottomPanel