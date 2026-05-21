import React, { useState } from 'react'
import Topbar from '../../components/Topbar/Topbar.jsx'
import styles from './CreateStub.module.css'
import BottomPanel from '../../components/BottomPanel/BottomPanel.jsx';
import UploadImg from '../../components/UploadImage/UploadImg.jsx';
import CropImg from '../../components/CropImage/CropImg.jsx';

const CreateStub = () => {
    const [activeTab, setActiveTab] = useState('');
    const [preview, setPreview] = useState('');
    const [isImageUploaded, setIsImageUploaded] = useState(false);
    const [imageData, setImageData] = useState('');
    return (
        <div onClick={() => { setActiveTab('') }} className={styles["create-stub"]} style={{ padding: "1rem" }, { width: "100%" }}>
            <Topbar />
            {
                !isImageUploaded ? <UploadImg sendData={setImageData} uploadStatus={isImageUploaded} setUpload={setIsImageUploaded} /> :
                    <CropImg recieveData={imageData} />
            }
            <BottomPanel activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
    )
}

export default CreateStub