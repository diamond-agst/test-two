import React, { useState } from "react";
import "./styles.scss"
import { ReactComponent as Man } from '../../assets/images/man.svg';
import { ReactComponent as Woman } from '../../assets/images/woman.svg';

const Gender = ({name, onChange, valueInput}) => {
    const [woman, setWoman] = useState()

    return(
        <div className="inputBlock" style={{marginRight: 0}}>
            <p>{name}</p>
            <div className="inputGender">
                <div onClick={() => {
                    onChange("man")
                    setWoman(false)
                    }} 
                    style={woman ? {border: "1px solid #E4E5E7"} : {border: "1px solid #5795FD"}} className="genderItem">
                    <Man fill={woman ? "#E4E5E7" : "#5795FD"}/>
                    <h1 style={woman ? {color: "#E4E5E7"} : {color: "#5795FD"}}>M</h1>
                </div>
                <div onClick={() => {
                    onChange("woman")
                    setWoman(true)
                    }} style={!woman ? {border: "1px solid #E4E5E7"} : {border: "1px solid #5795FD"}} className="genderItem">
                    <Woman fill={!woman ? "#E4E5E7" : "#5795FD"}/>
                    <h1 style={!woman ? {color: "#E4E5E7"} : {color: "#5795FD"}}>Ж</h1>
                </div>
            </div>
        </div>
    )
}

export default Gender;