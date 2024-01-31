/* eslint-disable react/prop-types */
import { useState } from "react"
import './style.css';
export default function PriceFilter({filterquery, getPriceRange}) {
    const [toggle, setToggle] = useState(false);
    return (
        <div>
            <button onClick={()=>setToggle(pre => !pre)}>price</button>
            {toggle  && 
                <div className="prifilter-container">
                    <div className="input-range-style ">
                        <span>{filterquery.pr.minPrice}</span>
                        <span>{filterquery.pr.maxPrice}</span>
                    </div>
                    <input type='range' min={filterquery.pr.minPrice} max={filterquery.pr.maxPrice} onChange={getPriceRange}/>
                </div>
            }
            
        </div>
        
    )
}