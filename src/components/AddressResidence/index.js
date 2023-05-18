import React from "react";
import addressIcon from "../../assets/images/addressIcon.svg"
import Input from "../Input/Input.js";
import Selector from "../Input/Selector.js";
import DateInput from "../Input/DateInput";

const AddressResidence = ({
        setPage,
        pageValidation,
        setAddressesMatch,
        setResidenceCountry,
        residenceCountry,
        setResidenceRegion,
        residenceRegion,
        setResidenceCity,
        residenceCity,
        setResidenceStreet,
        residenceStreet,
        setResidenceHouse,
        residenceHouse,
        setResidenceFlat,
        residenceFlat,
        setResidenceNotFlat,
        setResidenceDate,
        residenceDate
    }) => {
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
                    <h1>Адрес проживания</h1>
                    <p>Введите свой действуйющий адрес проживания.</p>
                </div>
            </div>
            <div className="generalForm">
                <div class="form-group">
                    <input onChange={(e) => setAddressesMatch(e.target.checked)} type="checkbox" id="html"/>
                    <label for="html">Адрес регистрации и фактического проживания совпадают</label>
                </div>
                <div className="generalInputs">
                   <Selector valueInput={residenceCountry} onChange={setResidenceCountry} data={citizenship} name="Страна*" placeholder="Васильев"/> 
                   <Selector valueInput={residenceRegion} onChange={setResidenceRegion} data={region} name="Регион*" placeholder="Иван"/> 
                </div>
                <div className="generalInputs">
                   <Input valueInput={residenceCity} onChange={setResidenceCity} name="Город / Населенный пункт*" placeholder="Введите населенный пункт"/> 
                   <Input valueInput={residenceStreet} onChange={setResidenceStreet} name="Улица*" placeholder="Введите улицу"/> 
                </div>
                <div className="generalInputs">
                    <div style={{width: "50%", display: "flex"}}>
                        <div style={{width: 72, marginRight: 16}}>
                           <Input type="number" valueInput={residenceHouse} onChange={setResidenceHouse} name="Дом*" placeholder="0"/>  
                        </div>
                        <div style={{width: 72, marginRight: 16}}>
                           <Input type="number" valueInput={residenceFlat} onChange={setResidenceFlat} name="Квартира*" placeholder="0"/>  
                        </div>
                        <div class="form-group">
                            <input onChange={(e) => setResidenceNotFlat(e.target.checked)} type="checkbox" id="html"/>
                            <label for="html">Нет квартиры</label>
                        </div>
                    </div>
                    <div style={{width: "49.5%", display: "flex"}}>
                        <DateInput valueInput={residenceDate} onChange={setResidenceDate} name="Дата прописки*"/>    
                    </div>         
                </div>
            </div>
            <div className="buttonBlock">
                <button onClick={() => setPage(3)} className="cancelButton">Отмена</button>
                <button onClick={pageValidation} className="nextButton">Далее</button>
            </div>
        </div>
    )
}

export default AddressResidence;