import React, {useState} from "react";
import "./styles.scss"
import OwnershipIcon from "../../assets/images/OwnershipIcon.svg"
import Input from "../Input/Input.js";
import Selector from "../Input/Selector.js";
import Gender from "../Input/Gender";
import IpOwner from "../IpOwner";
import SecondOwner from "../SecondOwner";

const Ownership = ({
        pageValidation, 
        setPage,
        setProperty,
        property,
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
        scanEGRIP,
        setFullName,
        fullName,
        setAbbreviation,
        abbreviation,
        setDateofRegistrationOOO,
        dateofRegistrationOOO,
        setINNOOO,
        INNOOO,
        setScanINNOOO,
        scanINNOOO,
        setOGRN,
        OGRN,
        setScanOGRN,
        scanOGRN
    }) => {
    const [IpOwnerPage, setIpOwnerPage] = useState(property)

    const types = [
        'Индивидуальный предприниматель (ИП)',
        'Общество с ограниченной ответственностью (ООО)'
      ];

    return(
        <div className="generalWrapper">
            <div className="generalHeading">
                    <img src={OwnershipIcon}/>
                    <div>
                        <h1>Форма собственности</h1>
                        <p>Выберите форму собственности и заполните данные</p>
                    </div>
                </div>
                <div className="secondChoice">
                    <div style={{width: "70%"}}>
                        <Selector valueInput={property} onChange={setProperty} data={types} setIpOwnerPage={setIpOwnerPage} name="Вид деятельности*" placeholder="Выбрать"/> 
                    </div>
                </div>
                {IpOwnerPage == "Индивидуальный предприниматель (ИП)" ?
                    <IpOwner
                        setINN={setINN}
                        INN={INN}
                        setScanINN={setScanINN}
                        scanINN={scanINN}
                        setDateofRegistration={setDateofRegistration}
                        dateofRegistration={dateofRegistration}
                        setOGRNIP={setOGRNIP}
                        OGRNIP={OGRNIP}
                        setScanOGRNIP={setScanOGRNIP}
                        scanOGRNIP={scanOGRNIP}
                        setScanOffice={setScanOffice}
                        scanOffice={scanOffice}
                        setEGRIP={setEGRIP}
                        EGRIP={scanEGRIP}/>:
                IpOwnerPage !== "" ?
                    <SecondOwner
                        setFullName={setFullName}
                        fullName={fullName}
                        setAbbreviation={setAbbreviation}
                        abbreviation={abbreviation}
                        setDateofRegistrationOOO={setDateofRegistrationOOO}
                        dateofRegistrationOOO={dateofRegistrationOOO}
                        setINNOOO={setINNOOO}
                        INNOOO={INNOOO}
                        setScanINNOOO={setScanINNOOO}
                        scanINNOOO={scanINNOOO}
                        setOGRN={setOGRN}
                        OGRN={OGRN}
                        setScanOGRN={setScanOGRN}
                        scanOGRN={scanOGRN}/>:
                null
                }
                
                <div className="buttonBlock">
                    <button onClick={() => setPage(1)} className="cancelButton">Отмена</button>
                    <button onClick={pageValidation} className="nextButton">Далее</button>
                </div>
            
        </div>
    )
}

export default Ownership;