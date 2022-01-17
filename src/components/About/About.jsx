import React from 'react';
import { useState } from 'react';
import './About.scss';
import img from '../../assets/man.jpg'; 

const About = () => {

    const [button, setButton] = useState(false);

    return (
        <div className="about" id="about">
            <div className="head">
                <span>About me</span>
                <p>Get to know me</p>
            </div>
            <div className="about_main">
                <div className="about_left">
                    <div className="img">
                         <img src={img}/>
                    </div>
                </div>
                <div className="about_right">
                        <span id="who">Who am i?</span>
                        <h6>I'm Alim Budaev, a visual UX/UI Designer and Web Developer</h6>
                        <p className="p_1">I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites
                             for years, which comply with the latest design trends. I help convert a vision and an 
                                idea into meaningful and useful products. 
                            Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
                   <div class="rows">
                   <div class="row_1">
                       <div>
                            <span>Name:</span>
                            <p>Alim Budaev</p>
                       </div>
                       <div>
                            <span>Email:</span>
                            <p>alim-budaev-2000@gmail.com</p>
                       </div>
                    </div>
                    <div class="row_2">
                        <div>
                            <span>Age:</span>
                            <p>21</p>
                        </div>
                        <div>
                            <span>From:</span>
                            <p>Moscow, Russia</p>
                        </div>   
                    </div>
                   </div>
                   <a
                   className={`btn_red ${button ? "active" : ""}`} 
                   onClick={() => setButton(!button)}>Contact me</a>
                </div>
            </div>
        </div>
    );
}

export default About;
