import React from "react";
import Input from "../Input/Input.js";
import Upload from "../Input/Upload";
import DateInput from "../Input/DateInput.js";

const IpOwner = ({
    setINN,
    INN,
    setScanINN,
    scanINN,
    setDateofRegistration,
    dateofRegistration,
    setOGRNIP,
    OGRNIP,
    setScanOGRNIP,
    scanOGRNIP,
    setScanOffice,
    scanOffice,
    setEGRIP,
    EGRIP,
}) => {
    return(
        <div>
            <div>
                <div style={{display: "flex", marginBottom: 40, marginTop: 40}}>
                    <Input type="number" valueInput={INN} onChange={setINN} name="ИНН*" placeholder="хххххххххх"/> 
                    <Upload valueInput={scanINN} onChange={setScanINN} name="Скан ИНН*"/>
                    <DateInput valueInput={dateofRegistration} onChange={setDateofRegistration} name="Дата регистрации*"/>
                </div>
            </div>
            <div style={{display: "flex", marginBottom: 40}}>
                <Input type="number" valueInput={OGRNIP} onChange={setOGRNIP} name="ОГРНИП*" placeholder="ххххххххххххххх"/> 
                <Upload valueInput={scanOGRNIP} onChange={setScanOGRNIP} name="Скан ОГРНИП*"/>
            </div>
            <div style={{display: "flex", marginBottom: 40}}>
                 <Upload valueInput={scanOffice} onChange={setScanOffice} name="Скан договора аренды помещения (офиса)"/>
                 <Upload valueInput={EGRIP} onChange={setEGRIP} name="Скан выписки из ЕГРИП (не старше 3 месяцев)*"/>
            </div>
        </div>
    )
}

export default IpOwner;