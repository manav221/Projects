import React from 'react'
import {useNavigate} from 'react-router-dom'
import TicketStub from '../TicketStub/TicketStub'
import styles from "./StubPreview.module.css"
import BackBtn from '../Buttons/BackBtn'
const StubPreview = ({ recieveData, allStub }) => {
    let navigate = useNavigate();
    const saveStub = () => {
        const allStubsData = [...allStub.allStubData, recieveData];
        allStub.setAllStub(allStubsData);
        localStorage.setItem("allStubs", JSON.stringify(allStubsData));
        navigate("/");
    }

    return (
        <>
            <div className={styles['stub-preview']}>
                <TicketStub data={recieveData} />
            </div>
            <BackBtn onClick={saveStub} name={"Save Stub"} customStyle={{ padding: "var(--space-md)", marginTop: "var(--space-md)", backgroundColor: "var(--primary)" }} />
            <BackBtn name={"Share"} customStyle={{ padding: "var(--space-md)", marginBlock: "var(--space-md)" }} />
        </>
    )
}

export default StubPreview