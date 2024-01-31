/* eslint-disable react/prop-types */
import './style.css';
export default function ResultCard({item}) {
    return (
        <div className="result-container">
            <div className='container-center'>{item.al}</div>
            <div>
                <div className='resul-time'><span>{item.at}</span><span>{item.dt}</span></div>
                <div>{item.fr} ------------- {item.to}</div>
            </div>
            <div className='container-center'>{item.ft}</div>
        </div>
    )
}