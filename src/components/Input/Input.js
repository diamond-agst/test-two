import React from "react";
import "./styles.scss"
import generalIcon from "../../assets/images/generalIcon.svg"

const Input = ({name, placeholder, onChange, valueInput, type}) => {
    return(
        <div className="inputBlock">
            <p>{name}</p>
            <div className="inputItem">
                <input type={type} value={valueInput} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}/>
            </div>
        </div>
    )
}

export default Input;