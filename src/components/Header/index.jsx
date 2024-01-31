import './style.css';
import nanLink from './navlink.json';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
    <div className="header-container">
        <div>Logo</div>
        <div> 
            {nanLink.map(({id, label, link})=>{
                return(<Link key={id} to={link} className='header-nav-link'>{label}</Link>)
            })}</div>
        <div>Profile</div>
    </div>)
}