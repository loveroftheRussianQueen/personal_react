import React, { useState} from 'react';
import './Sidebar.scss';
import { SlidebarData } from "./SlidebarData";

const Sidebar = () => {
    const [sideBar, setSidebar] = useState(false);


    return (
        <div className="sidebar">
        <span class="btn" onClick={() => setSidebar(!sideBar)}>Menu</span>
            <div className="profile">
                <span>Alim Budaev</span>
                <span>Available for work</span>
            </div>
            <ul className="sidebarlist" id={sideBar ? "hidden" : ""}>
            {SlidebarData.map((val,key) =>{
                return (
                <li 
                    className="row"
                    id={window.location.pathname == val.link ? "active" : ""}
                    key={key} 
                    onClick={()=> {
                        window.location.pathname = val.link
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
