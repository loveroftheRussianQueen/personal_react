import React, { useState} from 'react';
import './Sidebar.scss';
import { SlidebarData } from "./SlidebarData";
import spike from '../../assets/spike_pic.jpg';
import About from '../About/About'
import Hero from '..//Hero/Hero';
import Service from '../Service/Service';
import Form from '../Form/Form';
import Footer from '../Footer/Footer';

const Sidebar = () => {
    const [sideBar, setSidebar] = useState(false);
    const [currentId, setCurrentId] = useState("");

    return (
        <div className="sidebar">
        <span className="btn" onClick={() => setSidebar(!sideBar)}>Menu</span>
            <div className="profile">
                <img src={spike}/>
                <span>Alim Budaev</span>
                <span>Available for work</span>
            </div>
            <ul className="sidebarlist" id={sideBar ? "hidden" : ""}>
            {SlidebarData.map((val,key) =>{
                return (
                <li 
                    className={`row ${currentId === val.link ? "active" : ""}`}
                    key={key} 
                    onClick={()=> {
                        setCurrentId(val.link);
                        document.getElementById(val.link).scrollIntoView();  
                    }}>
                    {""}
                    <div>
                        {val.title}
                    </div>
                    </li>
                );
            })}
            </ul>
        </div>
    );
}

export default Sidebar;
