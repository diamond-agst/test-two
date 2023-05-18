import React, {useState} from "react";
import "./styles.scss"
import socialMediaIcon from "../../assets/images/socialMediaIcon.svg"
import Input from "../Input/Input.js";
import Selector from "../Input/Selector.js";
import Gender from "../Input/Gender";
import plusIcon from "../../assets/images/plusIcon.svg"

const SocialMedia = ({setPage, setSocialMedia, socialMedia, sendData}) => {
    const[socialMediaList, setSocialMediaList] = useState([
        {
            
            name: "Выбрать",
            web: ""
        }
    ])

    const addNewSocialMedia = () => {
        setSocialMediaList(current => [...current, {
            name: "Выбрать",
            web: ""
        }]);
    }

    const AllSocialMedia = [
        "ВКонтакте",
        "Instagram",
        "WhatsApp",
        "YouTube",
        "Одноклассники",
        "Facebook",
        "Viber",
        "Twitter",
        "Vimeo",
        "Skype"
    ]

    return(
        <div className="generalWrapper">
            <div className="generalHeading">
                <img src={socialMediaIcon}/>
                <div>
                    <h1>Социальные сети</h1>
                    <p>Введите свои действуйющие ссылки на социальные сети и количество подписчиков.</p>
                </div>
            </div>
            <div className="generalForm">
                {socialMediaList.map(item => {
                    return(
                            <div className="generalInputs" style={{width: "100%"}}>
                                <Selector socialMedia={socialMedia} socialMediaList={socialMediaList} onChangeSocial={setSocialMedia} setSocialMediaList={setSocialMediaList} item={item} data={AllSocialMedia} name="Сайт / Приложение*" placeholder="Выбрать"/> 
                            </div> 
                    )
                })}
            </div>
            <div onClick={addNewSocialMedia} className="addSocialMedia">
                <img src={plusIcon}/>
                <p>Добавить социальную сеть</p>
            </div>
            <div className="buttonBlock">
                <button onClick={() => setPage(4)} className="cancelButton">Отмена</button>
                <button onClick={sendData} className="nextButton">Сохранить</button>
            </div>
        </div>
    )
}

export default SocialMedia;