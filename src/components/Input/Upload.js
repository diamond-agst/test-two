import React, {useRef, useState} from "react";
import "./styles.scss"
import upload from "../../assets/images/upload.svg";
import done from "../../assets/images/done.svg";
import close from "../../assets/images/close.svg";

const Upload = ({name, onChange, valueInput}) => {
    const fileInput = useRef()
    const[file, setFile] = useState(valueInput)

    const onUpload = (e) => {
        setFile(e.target.files[0].name)
        onChange(e.target.files[0].name)
    }

    return(
        <div className="inputBlock">
            <p>{name}</p>
            {file ?
            <div className="uploadBlock">
                <div className="uploadDone">
                    <div>
                       <img src={done}/>
                        <p>{file}</p> 
                    </div>
                    <img onClick={() => setFile(null)} src={close}/>
                </div>
                
            </div>:
            <div>
                    <input
                ref={fileInput}
                onChange={onUpload}
                type="file"
                style={{ display: "none" }}
                />
                <div className="uploadBlock" onClick={() => fileInput.current.click()}>
                    <p>Выберите или перетащите файл</p>
                    <div className="uploadButton">
                        <img src={upload}/>
                    </div>
                </div>
            </div>
        }
            
            
        </div>
    )
}

export default Upload;