import React, {useEffect, useState} from "react";
import AddressResidence from "../../components/AddressResidence";
import General from "../../components/General";
import Ownership from "../../components/Ownership";
import RegistrationAddress from "../../components/RegistrationAddress";
import SocialMedia from "../../components/SocialMedia";
import doneIcon from "../../assets/images/doneIcon.svg"
import errorIcon from "../../assets/images/error.svg"
import dayjs from 'dayjs';
import "./styles.scss"

const MainPage = () => {
    const[page, setPage] = useState(1)
    const[error, setError] = useState(false)
    const[surname, setSurname] = useState('')
    const[name, setName] = useState('')
    const[patronymic, setPatronymic] = useState('')
    const[mainCity, setMainCity] = useState("")
    const[citizenship, setCitizenship] = useState('')
    const[gender, setGender] = useState('man')
    const[dateofBirth, setDateofBirth] = useState(dayjs(0))
    const[placeofBirth, setPlaceofBirth] = useState('')
    const[property, setProperty] = useState('')
    const[INN, setINN] = useState('')
    const[scanINN, setScanINN] = useState('')
    const[dateofRegistration, setDateofRegistration] = useState(dayjs(0))
    const[OGRNIP, setOGRNIP] = useState('')
    const[scanOGRNIP, setScanOGRNIP] = useState("")
    const[scanOffice, setScanOffice] = useState('')
    const[scanEGRIP, setEGRIP] = useState('')
    const[fullName, setFullName] = useState('')
    const[abbreviation, setAbbreviation] = useState('')
    const[dateofRegistrationOOO, setDateofRegistrationOOO] = useState(dayjs(0))
    const[INNOOO, setINNOOO] = useState('')
    const[scanINNOOO, setScanINNOOO] = useState('')
    const[OGRN, setOGRN] = useState('')
    const[scanOGRN, setScanOGRN] = useState('')
    const[registrationCountry, setRegistrationCountry] = useState("")
    const[registrationRegion, setRegistrationRegion] = useState("")
    const[registrationCity, setRegistrationCity] = useState("")
    const[registrationStreet, setRegistrationStreet] = useState("")
    const[registrationHouse, setRegistrationHouse] = useState("")
    const[registrationFlat, setRegistrationFlat] = useState("")
    const[registrationNotFlat, setRegistrationNotFlat] = useState(false)
    const[registrationDate, setRegistrationDate] = useState(dayjs(0))
    const[addressesMatch, setAddressesMatch] = useState(false)
    const[residenceCountry, setResidenceCountry] = useState("")
    const[residenceRegion, setResidenceRegion] = useState("")
    const[residenceCity, setResidenceCity] = useState("")
    const[residenceStreet, setResidenceStreet] = useState("")
    const[residenceHouse, setResidenceHouse] = useState("")
    const[residenceFlat, setResidenceFlat] = useState("")
    const[residenceNotFlat, setResidenceNotFlat] = useState(false)
    const[residenceDate, setResidenceDate] = useState(dayjs(0))
    const[socialMedia, setSocialMedia] = useState({})

    useEffect(() => {
        if(error){
            setTimeout(() => {
                setError(false)
            }, 3000)
        }
    }, [error])

    const sendData = () => {
        if(!error){
            let data =  {
                surname: surname,
                name: name,
                patronymic: patronymic,
                mainCity: mainCity,
                citizenship: citizenship,
                gender: gender,
                dateofBirth: dateofBirth,
                property: property,
                INN: INN,
                scanINN: scanINN,
                dateofRegistration: dateofRegistration,
                OGRNIP: OGRNIP,
                scanOGRNIP: scanOGRNIP,
                scanOffice: scanOffice,
                scanEGRIP: scanEGRIP,
                fullName: fullName,
                abbreviation: abbreviation,
                dateofRegistrationOOO: dateofRegistrationOOO,
                INNOOO: INNOOO,
                scanINNOOO: scanINNOOO,
                OGRN: OGRN,
                scanOGRN: scanOGRN,
                registrationCountry: registrationCountry,
                registrationRegion: registrationRegion,
                registrationCity: registrationCity,
                registrationStreet: registrationStreet,
                registrationHouse: registrationHouse,
                registrationFlat: registrationFlat,
                registrationNotFlat: registrationNotFlat,
                registrationDate: registrationDate,
                addressesMatch: addressesMatch,
                residenceCountry: residenceCountry,
                residenceRegion: residenceRegion,
                residenceCity: residenceCity,
                residenceStreet: residenceStreet,
                residenceHouse: residenceHouse,
                residenceFlat: residenceFlat,
                residenceNotFlat: residenceNotFlat,
                socialMedia: socialMedia
            }
            console.log(data)
        }
    }

    const pageValidation = () => {
        switch (page) {
            case 1:
                if(surname && name && patronymic && mainCity && citizenship && dateofBirth && placeofBirth){
                    setPage(2)
                }else{
                    setError(true)
                }
              break;
            case 2:
                if(property == "Индивидуальный предприниматель (ИП)"){
                    if(
                        INN && 
                        scanINN && 
                        dateofRegistration && 
                        dateofRegistration && OGRNIP && scanOGRNIP && scanOffice && scanEGRIP){
                        setPage(3)
                    }else{
                        setError(true)
                    }
                }else{
                    if(
                        fullName && 
                        abbreviation && 
                        dateofRegistrationOOO && 
                        INNOOO && scanINNOOO && OGRN && scanOGRN){
                        setPage(3)
                    } else{
                        setError(true)
                    }
                }
                
              break;
            case 3:
                if(registrationCountry && 
                    registrationRegion && 
                    registrationCity && 
                    registrationStreet && 
                    registrationHouse && registrationDate){
                        if(registrationNotFlat){
                            setPage(4)
                        }else{
                            if(registrationFlat){
                                setPage(4)
                            }else{
                                setError(true)
                            }
                        }
                } else{
                    setError(true)
                }
              break;
            case 4:
                if(addressesMatch){
                    setPage(5)
                }else if(residenceCountry && 
                    residenceRegion && 
                    residenceCity && 
                    residenceStreet && 
                    residenceHouse && residenceDate){
                        if(residenceNotFlat){
                            setPage(5)
                        }else{
                            if(residenceFlat){
                                setPage(5)
                            }else{
                                setError(true)
                            }
                        }
                }else{
                    setError(true)
                } 
              break;
          }
        
    }

    return(
        <div className="mainWrapper">
            <div className="stepperBlock">
                <div className="stepperHeading">
                    <h1>Создание аккаунта</h1>
                    <p>Заполните все пункты данной формы и<br/> нажмите кнопку «Сохранить».</p>
                </div>
                <div className="stepperContainer">
                    <div className={page > 1 ? "stepperItem stepperItemDone" : "stepperItem"}>
                        <div className="stepperNum">
                            <h1>1</h1>
                        </div>
                        <p className="stepperName">Общие</p>
                        {page > 1 && <img style={{marginLeft: 16}} src={doneIcon}/>}
                    </div>
                    <div className={page == 2 ? "stepperItem" : page > 2 ? "stepperItem stepperItemDone" : "stepperItem stepperItemDefault"}>
                        <div className="stepperNum">
                            <h1>2</h1>
                        </div>
                        <p className="stepperName">Форма собственности</p>
                        {page > 2 && <img style={{marginLeft: 16}} src={doneIcon}/>}
                    </div>
                    <div className={page == 3 ? "stepperItem" : page > 3 ? "stepperItem stepperItemDone" : "stepperItem stepperItemDefault"}>
                        <div className="stepperNum">
                            <h1>3</h1>
                        </div>
                        <p className="stepperName">Адрес регистрации</p>
                        {page > 3 && <img style={{marginLeft: 16}} src={doneIcon}/>}
                    </div>
                    <div className={page == 4 ? "stepperItem" : page > 4 ? "stepperItem stepperItemDone" : "stepperItem stepperItemDefault"}>
                        <div className="stepperNum">
                            <h1>4</h1>
                        </div>
                        <p className="stepperName">Адрес проживания</p>
                        {page > 4 && <img style={{marginLeft: 16}} src={doneIcon}/>}
                    </div>
                    <div className={page == 5 ? "stepperItem" : page > 5 ? "stepperItem stepperItemDone" : "stepperItem stepperItemDefault"}>
                        <div className="stepperNum">
                            <h1>5</h1>
                        </div>
                        <p className="stepperName">Социальные сети</p>
                    </div>
                </div>
            </div>
            <div className="mainContainer">
                {page == 1 ?
                    <General 
                        pageValidation={pageValidation}
                        setError={setError}
                        surname={surname}
                        setSurname={setSurname}
                        name={name}
                        setName={setName}
                        patronymic={patronymic}
                        setPatronymic={setPatronymic}
                        mainCity={mainCity}
                        setMainCity={setMainCity}
                        citizenshipValue={citizenship}
                        setCitizenship={setCitizenship}
                        gender={gender}
                        setGender={setGender}
                        dateofBirth={dateofBirth}
                        setDateofBirth={setDateofBirth}
                        placeofBirth={placeofBirth}
                        setPlaceofBirth={setPlaceofBirth}
                        /> :
                page == 2 ?
                    <Ownership 
                        pageValidation={pageValidation}
                        setPage={setPage}
                        setProperty={setProperty}
                        property={property}
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
                        scanEGRIP={scanEGRIP}
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
                        scanOGRN={scanOGRN}
                        />:
                page == 3 ? 
                    <RegistrationAddress 
                        pageValidation={pageValidation}
                        setPage={setPage}
                        setRegistrationCountry={setRegistrationCountry}
                        registrationCountry={registrationCountry}
                        setRegistrationRegion={setRegistrationRegion}
                        registrationRegion={registrationRegion}
                        setRegistrationCity={setRegistrationCity}
                        registrationCity={registrationCity}
                        setRegistrationStreet={setRegistrationStreet}
                        registrationStreet={registrationStreet}
                        setRegistrationHouse={setRegistrationHouse}
                        registrationHouse={registrationHouse}
                        setRegistrationFlat={setRegistrationFlat}
                        registrationFlat={registrationFlat}
                        setRegistrationNotFlat={setRegistrationNotFlat}
                        registrationDate={registrationDate}
                        setRegistrationDate={setRegistrationDate}
                        />:
                page == 4 ?
                    <AddressResidence 
                        pageValidation={pageValidation}
                        setPage={setPage}
                        setAddressesMatch={setAddressesMatch}
                        setResidenceCountry={setResidenceCountry}
                        residenceCountry={residenceCountry}
                        setResidenceRegion={setResidenceRegion}
                        residenceRegion={residenceRegion}
                        setResidenceCity={setResidenceCity}
                        residenceCity={residenceCity}
                        setResidenceStreet={setResidenceStreet}
                        residenceStreet={residenceStreet}
                        setResidenceHouse={setResidenceHouse}
                        residenceHouse={residenceHouse}
                        setResidenceFlat={setResidenceFlat}
                        residenceFlat={residenceFlat}
                        setResidenceNotFlat={setResidenceNotFlat}
                        residenceDate={residenceDate}
                        setResidenceDate={setResidenceDate}/>:
                page == 5 ?
                    <SocialMedia 
                        setPage={setPage}
                        setSocialMedia={setSocialMedia}
                        socialMedia={socialMedia}
                        sendData={sendData}/>: 
                null
                }
                
            </div>
            {error &&
                <div className="errorBlock">
                    <img src={errorIcon}/>
                    <h1>Заполните все необходимые поля</h1>
                </div>
            }
            
        </div>
    )
}

export default MainPage;