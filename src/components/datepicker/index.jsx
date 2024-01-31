/* eslint-disable react/prop-types */

import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";
import './style.css'

export default function DatePickerShow({startDate, setStartDate}) {
    return (
        <>
            <span>
                Depart
            </span>
            <DatePicker
            // showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            />
        </>
    )
}