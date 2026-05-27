import React, { useState } from 'react'
import { Upload, UtilityPole } from 'lucide-react';
import styles from './UploadImg.module.css'
import CropImg from '../CropImage/CropImg';
const UploadImg = ({ setUpload, setStatus, setCurrentStep }) => {
    const handleChange = (dets) => {
        const file = dets.target.files[0];
        if (file) {
            setUpload(file);
            setStatus(prev => ({ ...prev, upload: true }))
            setCurrentStep(2)
        }
    }
    return (
        <>
            <div className={styles['upload-image']}>
                <input
                    onChange={(e) => {
                        handleChange(e);
                    }}
                    type="file" id="select-img"
                    style={{ display: "none" }}
                    accept='.png,.jpeg,jpg,.webp'
                />

                <label htmlFor='select-img' className={styles['upload-btn']}>
                    <Upload size={25} />
                </label>
                <h3>Upload a Photo</h3>
                <p >choose a photo from your gallery to begin your memory stub</p>
            </div>
            <div className={styles["template-section"]}>
                <h3>Templates</h3>
                <div className={styles['all-templates']}>Coming soon!</div>
            </div>
        </>
    )
}

export default UploadImg