import React from 'react'
import styles from './StubDetails.module.css'
import './StubDetails.module.css'
import BackBtn from '../Buttons/BackBtn'

const StubDetails = () => {
    return (
        <div onClick={(e) => {e.stopPropagation()}} className={styles['stub-details']}>
            <div>
                <BackBtn name={"Done"} />
            </div>
            <form action="">

                <label htmlFor="stub-title">
                    Title
                    <input
                        className={`${styles['input']} ${styles['active']}`} type="text"
                        placeholder='Stub title'
                        id='stub-title'
                        maxLength={12}
                        spellCheck={false} />
                </label>

                <label htmlFor="stub-location">
                    Location
                    <input
                        className={`${styles['input']} ${styles['active']}`}
                        type="text"
                        placeholder='Stub Location'
                        id='stub-location'
                        maxLength={10}
                        spellCheck={false} />
                </label>

                <label htmlFor="stub-date">
                    Date
                    <input
                        className={`${styles['input']} ${styles['active']}`} type="date" name="" id="stub-date" />
                </label>

                <label htmlFor="stub-caption">
                    Caption
                    <textarea
                        className={`${styles['input']} ${styles['place-holder']} ${styles['active']}`}
                        id="stub-caption"
                        maxLength={65}
                        placeholder='caption, from you felt Nostalgic'></textarea>
                    <span>max character 65</span>
                </label>

            </form>
        </div>
    )
}

export default StubDetails