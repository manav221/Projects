import React from 'react'
import styles from './EditTab.module.css'
import { Replace } from 'lucide-react';
import { SquareBottomDashedScissors } from 'lucide-react';
import { Blend } from 'lucide-react';
import { Grip } from 'lucide-react';
import { BrushCleaning } from 'lucide-react';

const EditTab = () => {
    return (
        <div onClick={(e) => {e.stopPropagation()}} className={styles['edit-tab-options']}>
            <div className={styles["option"]}>
                <Replace />
                <span>Replace</span>
            </div>
            <div className={styles["option"]}>
                <SquareBottomDashedScissors />
                <span>Crop</span>
            </div>
            <div className={styles["option"]}>
                <Blend />
                <span>Filters</span>
            </div>
            <div className={styles["option"]}>
                <Grip />
                <span>Adjustments</span>
            </div>
            <div className={styles["option"]}>
                <BrushCleaning />
                <span>Enhnacement</span>
            </div>
        </div>
    )
}

export default EditTab