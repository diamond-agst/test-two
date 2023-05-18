import React from "react";
import "./styles.scss"
import Input from "../Input/Input.js";
import DateInput from "../Input/DateInput.js";
import Upload from "../Input/Upload";

const SecondOwner = ({
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
    const companies = [
        {
            name: 'ООО "ТРЕК ДИЗАЙН"',
            shortName: 'ООО ТД',
            data: "2022-06-28",
            OGRN: "1225400006072",
            INN: "5406819671"
        },
        {
            name: 'ООО "ГУД ВИЛЛ"',
            shortName: 'ООО ГВ',
            data: "2020-11-21",
            OGRN: "1215400007470",
            INN: "5405062244"
        },
        {
            name: 'ООО "МАКРО ТРЕЙД"',
            shortName: 'ООО МТ',
            data: "2022-04-01",
            OGRN: "1225400012970",
            INN: "5403069188"
        },
        {
            name: 'ООО "АДАМ И ЕВА"',
            shortName: 'ООО AE',
            data: "2016-08-12",
            OGRN: "1165476091516",
            INN: "5407953704"
        },
        {
            name: 'ООО "МАЙ ТЕХНО РИТЕЙЛ"',
            shortName: 'ООО МТР',
            data: "2018-01-31",
            OGRN: "1185476061737",
            INN: "5406992309"
        },
    ]

    const onChangeINN = (e) => {
        let find = companies.find(element => element.INN == e)
        if(find){
            setFullName(find.name)
            setAbbreviation(find.shortName)
            setDateofRegistrationOOO(find.data)
            setOGRN(find.OGRN)

        }
        setINNOOO(e)
    }

    return(
        <div className="secondWrapper">
            <div className="secondItem">
                <div style={{display: "flex"}}>
                    <Input valueInput={fullName} onChange={setFullName} name="Наименование полное*" placeholder="ООО «Московская промышленная компания»"/> 
                    <Input valueInput={abbreviation} onChange={setAbbreviation} name="Сокращение*" placeholder="ООО «МПК»"/> 
                </div>
            </div>
            <div className="secondItem" style={{display: "flex"}}>
                <DateInput valueInput={dateofRegistrationOOO} onChange={setDateofRegistrationOOO} name="Дата регистрации*"/>
                <Input valueInput={INNOOO} type="number" onChange={onChangeINN} name="ИНН*" placeholder="хххххххххх"/> 
                <Upload valueInput={scanINNOOO} onChange={setScanINNOOO} name="Скан ИНН*"/>
            </div>
            <div className="secondItem" style={{display: "flex"}}>
                <Input valueInput={OGRN} type="number" onChange={setOGRN} name="ОГРН*" placeholder="ххххххххххххх"/> 
                <Upload valueInput={scanOGRN} onChange={setScanOGRN} name="Скан ОГРН*"/>
      
            </div>
        </div>
    )
}

export default SecondOwner;