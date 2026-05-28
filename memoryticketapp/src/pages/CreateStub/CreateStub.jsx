import React, { useEffect, useState } from 'react'
import styles from './CreateStub.module.css'
import Topbar from '../../components/Topbar/Topbar.jsx'
import UploadImg from '../../components/UploadImage/UploadImg.jsx';
import CropImg from '../../components/CropImage/CropImg.jsx';
import StubDetails from '../../components/StubDetails/StubDetails.jsx';
import BackBtn from '../../components/Buttons/BackBtn.jsx';
import StubPreview from '../../components/StubPreview/StubPreview.jsx';
import { useNavigate } from 'react-router-dom';

const CreateStub = (stubData) => {
    const [imageData, setImageData] = useState(null);
    const [cropImageData, setCropImageData] = useState(null);
    const [stubDetails, setStubDetails] = useState('');
    const [allStepStatus, setAllStepStatus] = useState(
        { upload: true, select: false, details: false, preview: false }
    );
    const [currentStep, setCurrentStep] = useState(0);
    const steps = [
        {
            id: 1,
            component: UploadImg,
            props: { setUpload: setImageData, setStatus: setAllStepStatus, setCurrentStep: setCurrentStep }
        },
        {
            id: 2,
            component: CropImg,
            props: {
                recieveData: imageData,
                setStatus: setAllStepStatus,
                sendCropImageData: setCropImageData,
                setCurrentStep: setCurrentStep
            }
        },
        {
            id: 3,
            component: StubDetails,
            props: {
                recieveData: cropImageData, sendStubDetails: setStubDetails,
                setStatus: setAllStepStatus, setCurrentStep: setCurrentStep
            }
        },
        {
            id: 4,
            component: StubPreview,
            props: { recieveData: stubDetails, setStatus: setAllStepStatus, allStub: stubData }
        }
    ];

    let navigate = useNavigate();

    const CurrentComponent = steps[currentStep].component;
    const props = steps[currentStep].props;

    return (
        <div
            className={styles["create-stub"]}
            style={{ padding: "1rem" }, { width: "100%" }}>

            <Topbar allStepStatus={allStepStatus} currentStep={currentStep} setCurrentStep={setCurrentStep} />
            {
                <CurrentComponent {...props} />
            }
            {
                <BackBtn onClick={() => {
                    if (currentStep === 0) navigate("/")
                    setCurrentStep(currentStep - 1)
                }} name={currentStep === 3 ? "Edit" : "Back"} customStyle={{ padding: "var(--space-md)", marginBottom: "var(--space-md)" }} />
            }
        </div>
    )
}

export default CreateStub