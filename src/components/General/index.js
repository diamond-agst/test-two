import React from "react";
import "./styles.scss"
import generalIcon from "../../assets/images/generalIcon.svg"
import Input from "../Input/Input.js";
import Selector from "../Input/Selector.js";
import Gender from "../Input/Gender";
import DateInput from "../Input/DateInput";

const city = [
    "Севастополь",
    "Симферополь",
    "Анапа",
    "Архангельск",
    "Астрахань",
    "Челябинск",
    "Екатеринбург",
    "Калининград",
    "Казань",
    "Кемерово",
    "Хабаровск",
    "Краснодар",
    "Красноярск",
    "Курган",
    "Курск",
    "Магадан",
    "Москва",
    "Мурманск",
    "Нижневартовск",
    "Нижний Новгород",
    "Норильск",
    "Новокузнецк",
    "Санкт-Петербург"
]

const citizenship = [
    "Россия",
    "Украина",
    "Беларусь",
    "Молдова",
    "Латвия",
    "Литва",
    "Эстония",
    "Польша",
    "Чехия",
    "Сербия"
]

const General = ({
        pageValidation, 
        surname,
        setSurname,
        name,
        setName,
        patronymic,
        setPatronymic,
        mainCity,
        setMainCity,
        citizenshipValue,
        setCitizenship,
        gender,
        setGender,
        dateofBirth,
        setDateofBirth,
        placeofBirth,
        setPlaceofBirth,
        error
    }) => {

    return(
        <div className="generalWrapper">
            <div className="generalHeading">
                <img src={generalIcon}/>
                <div>
                    <h1>Общие</h1>
                    <p>Введите свои персональные данные.</p>
                </div>
            </div>
            <div className="generalForm">
                <div className="generalInputs">
                   <Input valueInput={surname} error={error} onChange={setSurname} name="Фамилия*" placeholder="Васильев"/> 
                   <Input valueInput={name} error={error} onChange={setName} name="Имя*" placeholder="Иван"/> 
                </div>
                <div className="generalInputs">
                   <Input valueInput={patronymic} error={error} onChange={setPatronymic} name="Отчество*" placeholder="Сергеевич"/> 
                   <Selector valueInput={mainCity} error={error} onChange={setMainCity} data={city} name="Основной город*" placeholder="Санкт-Петербург"/> 
                </div>
                <div className="generalInputs">
                    <div style={{width: "50%", paddingRight: 30}}>
                        <Selector valueInput={citizenshipValue} error={error} onChange={setCitizenship} data={citizenship} name="Гражданство*" placeholder="Санкт-Петербург"/> 
                    </div>
                    <div style={{width: "49.5%", display: "flex"}}>
                        <Gender valueInput={gender} error={error} onChange={setGender} name="Пол*"/> 
                        <DateInput valueInput={dateofBirth} error={error} onChange={setDateofBirth} name="Дата рождения*"/>
                    </div>         
                </div>
                <div className="generalInputs">
                   <Input valueInput={placeofBirth} error={error} onChange={setPlaceofBirth} name="Место рождения (как указано в паспорте)*" placeholder="Введите наименование региона и населенного пункта"/> 
                </div>
            </div>
            <div className="buttonBlock">
                <button className="cancelButton">Отмена</button>
                <button onClick={pageValidation} className="nextButton">Далее</button>
            </div>
        </div>
    )
}

export default General;