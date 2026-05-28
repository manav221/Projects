import React, { useState } from 'react'
import styles from './StubDetails.module.css'
import BackBtn from '../Buttons/BackBtn'

const StubDetails = ({ recieveData, setStatus, setCurrentStep, sendStubDetails }) => {
    const [stubTitle, setStubTitle] = useState('');
    const [stubPlace, setStubPlace] = useState('');
    const [stubDate, setStubDate] = useState('');
    const [stubDesc, setStubDesc] = useState('');

    const handleChange = (dets, setData) => {
        setData(dets.target.value);
    }
    return (
        <div className={styles['stub-details']}>
            <h2>Add Details</h2>
            <div className={styles["showImg"]}>
                <img src={recieveData} alt="" />
            </div>
            <form onSubmit={(e) => {
                e.preventDefault();
                setStatus(prev => ({ ...prev, preview: true }));
                setCurrentStep(3);
                sendStubDetails({
                    title: stubTitle,
                    place: stubPlace,
                    date: stubDate,
                    caption: stubDesc,
                    img: recieveData
                });
            }}>

                <label htmlFor="stub-title">
                    Memory Title *
                    <input
                        onChange={(dets) => { handleChange(dets, setStubTitle) }}
                        className={`${styles['input']} ${styles['active']}`} type="text"
                        placeholder='e.g. Golden Hour at Marina'
                        id='stub-title'
                        value={stubTitle}
                        spellCheck={false} />
                </label>

                <label htmlFor="stub-location">
                    Place
                    <input
                        onChange={(dets) => { handleChange(dets, setStubPlace) }}
                        className={`${styles['input']} ${styles['active']}`}
                        type="text"
                        placeholder='e.g. Goa,India'
                        id='stub-location'
                        value={stubPlace}
                        spellCheck={false} />
                </label>

                <label htmlFor="stub-date">
                    Date
                    <input
                        onChange={(dets) => { handleChange(dets, setStubDate) }}
                        className={`${styles['input']} ${styles['active']}`}
                        type="date" name=""
                        id="stub-date"
                        value={stubDate}
                    />
                </label>

                <label htmlFor="stub-caption">
                    Caption
                    <textarea
                        onChange={(dets) => { handleChange(dets, setStubDesc) }}
                        className={`${styles['input']} ${styles['place-holder']} ${styles['active']}`}
                        id="stub-caption"
                        value={stubDesc}
                        placeholder='caption, from you felt Nostalgic'></textarea>
                </label>

                <BackBtn type={"submit"} name={"Continue"} customStyle={{ padding: "var(--space-md)", marginBlock: "var(--space-md)" }} />
            </form>
        </div>
    )
}

export default StubDetails