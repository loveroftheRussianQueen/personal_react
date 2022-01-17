import React from 'react';
import './Footer.scss';
import { BsFillMapFill, BsFillTelephoneFill } from 'react-icons/bs';
import { FaInstagramSquare, FaGithub, FaTelegram, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer" id="contact">
            <div className="container">
                <div className="box">
                    <span><BsFillMapFill/></span>
                    <p><a href="https://goo.gl/maps/1xSN6jDcQcnik2E47">Moscow, Russia.</a></p>
                </div>
                <div className="box">
                    <span><BsFillTelephoneFill/></span>
                    <p><a href="tel:+79280814017">+79280814017</a></p>
                </div>
                <div className="box">
                    <span><FaPaperPlane/></span>
                    <p><a href="mailto:alim-budaev-2000@gmail.com">alim-budaev-2000@gmail.com</a></p>
                </div>
                </div>
                <div class="icons">
                    <a href="https://www.instagram.com/vicious.walker/" className="icon" id="inst"><FaInstagramSquare/></a>
                    <a href="https://github.com/loveroftheRussianQueen" className="icon" id="git"><FaGithub/></a>
                    <a href="tg://resolve?domain=carl_in_da_house" className="icon" id="tg"><FaTelegram/></a>
                </div>
                <p>Copyright © 2022, all rights reserved</p>
        </div>
    );
}

export default Footer;
