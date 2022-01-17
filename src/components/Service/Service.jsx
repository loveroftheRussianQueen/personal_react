import React from 'react';
import './Service.scss';
import { AiFillHtml5, AiFillPicture } from 'react-icons/ai';
import { BiTargetLock } from 'react-icons/bi';
import { SiWebflow } from 'react-icons/si';
import { IoMdMove, IoMdRocket } from 'react-icons/io';

const Service = () => {
    return (
        <div className="services" id="services">
            <div className="header">
                <span>My services</span>
                <p>Services I offer to my clients</p>
            </div>
            <div className="rows">
                <div className="single">
                    <span><AiFillHtml5/></span>
                    <h6>Design Trends</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="single">
                    <span><AiFillPicture/></span>
                    <h6>Design Trends</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="single">
                    <span><BiTargetLock/></span>
                    <h6>Design Trends</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="single">
                    <span><SiWebflow/></span>
                    <h6>Design Trends</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="single">
                    <span><IoMdMove/></span>
                    <h6>Design Trends</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
                <div className="single">
                    <span><IoMdRocket/></span>
                    <h6>Design Trends</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    );
}

export default Service;
