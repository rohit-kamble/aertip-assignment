/* eslint-disable react/prop-types */

import Select from "react-dropdown-select";
import './style.css';
export default function DropDownMenu({data, filterBySort}) {
    return (
        <Select options={data} values={[data[0]]} className="drop-down-menu" onChange={filterBySort} />
    )
}