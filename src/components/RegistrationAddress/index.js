import React from "react";
import "./styles.scss"
import addressIcon from "../../assets/images/addressIcon.svg"
import Input from "../Input/Input.js";
import Selector from "../Input/Selector.js";
import Gender from "../Input/Gender";

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DateInput from "../Input/DateInput";

const RegistrationAddress = ({
        setPage,
        pageValidation,
        setRegistrationCountry,
        registrationCountry,
        setRegistrationRegion,
        registrationRegion,
        setRegistrationCity,
        registrationCity,
        setRegistrationStreet,
        registrationStreet,
        setRegistrationHouse,
        registrationHouse,
        setRegistrationFlat,
        registrationFlat,
        setRegistrationNotFlat,
        setRegistrationDate,
        registrationDate
    }) => {
    const [value, setValue] = React.useState(null);
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
    const region = [
        "Белгородская область",
        "Брянская область",
       " Владимирская область",
        "Воронежская область",
        "Ивановская область",
        "Калужская область",
        "Костромская область",
        "Курская область",
        "Липецкая область",
        "Московская область",
        "Орловская область",
        "Рязанская область",
        "Смоленская область",
        "Тамбовская область",
        "Тверская область",
        "Тульская область",
        "Ярославская область"
    ]
    return(
        <div className="generalWrapper">
            <div className="generalHeading">
                <img src={addressIcon}/>
                <div>
                    <h1>Адрес регистрации</h1>
                    <p>Введите свой действуйющий адрес прописки.</p>
                </div>
            </div>
            <div className="generalForm">
                <div className="generalInputs">
                   <Selector valueInput={registrationCountry} onChange={setRegistrationCountry} data={citizenship} name="Страна*" placeholder="Васильев"/> 
                   <Selector valueInput={registrationRegion} onChange={setRegistrationRegion} data={region} name="Регион*" placeholder="Иван"/> 
                </div>
                <div className="generalInputs">
                   <Input valueInput={registrationCity} onChange={setRegistrationCity} name="Город / Населенный пункт*" placeholder="Введите населенный пункт"/> 
                   <Input valueInput={registrationStreet} onChange={setRegistrationStreet} name="Улица*" placeholder="Введите улицу"/> 
                </div>
                <div className="generalInputs">
                    <div style={{width: "50%", display: "flex"}}>
                        <div style={{width: 72, marginRight: 16}}>
                           <Input type="number" valueInput={registrationHouse} onChange={setRegistrationHouse} name="Дом*" placeholder="0"/>  
                        </div>
                        <div style={{width: 72, marginRight: 16}}>
                           <Input type="number" valueInput={registrationFlat} onChange={setRegistrationFlat} name="Квартира*" placeholder="0"/>  
                        </div>
                        <div class="form-group">
                            <input onChange={(e) => setRegistrationNotFlat(e.target.checked)} type="checkbox" id="html"/>
                            <label for="html">Нет квартиры</label>
                        </div>
                    </div>
                    <div style={{width: "49.5%", display: "flex"}}>
                        <DateInput valueInput={registrationDate} onChange={setRegistrationDate} name="Дата прописки*"/>    
                    </div>         
                </div>
            </div>
            <div className="buttonBlock">
                <button onClick={() => setPage(2)} className="cancelButton">Отмена</button>
                <button onClick={pageValidation} className="nextButton">Далее</button>
            </div>
        </div>
    )
}

export default RegistrationAddress;