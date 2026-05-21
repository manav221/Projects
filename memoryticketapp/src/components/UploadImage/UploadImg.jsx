import React, { useState } from 'react'
import { Upload, UtilityPole } from 'lucide-react';
import styles from './UploadImg.module.css'
import CropImg from '../CropImage/CropImg';
const UploadImg = (props) => {
    return (
        <>
            {!props.uploadStatus ?
                <div className={styles['upload-image']}>
                    <input
                        onChange={(e) => {
                            props.sendData(e.target.files);
                            props.setUpload(true);
                        }}
                        type="file" id="select-img"
                        style={{ display: "none" }}
                        accept='.png,.jpeg,jpg,.webp'
                    />

                    <label htmlFor='select-img' className={styles['upload-btn']}>
                        <Upload size={25} />
                        <span>Upload</span>
                    </label>
                    <span >Choose images or drag & drop it here.</span>
                    <span className={styles['format-size']}>JPG, JPEG, PNG. Max 100 MB.</span>
                </div>
                :
                <CropImg />
            }
        </>
    )
}

export default UploadImg