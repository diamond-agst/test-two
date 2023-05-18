import React from "react";
import "./styles.scss"
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DateInput = ({name, onChange, error, valueInput}) => {
    return(
        <div className="inputBlock">
            <p>{name}</p>
            <div>
                <LocalizationProvider dateAdapter={AdapterDayjs} style={error ? {border: "1px solid red"} : null}>
                    <DatePicker 
                    onChange={(newValue) => onChange(newValue["$d"])} value={dayjs(valueInput || 0)}/>
                </LocalizationProvider>
            </div>
        </div>
    )
}

export default DateInput;