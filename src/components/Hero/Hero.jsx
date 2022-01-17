import React, { useState, useEffect } from 'react';
import './Hero.scss';
import Particles from 'react-particles-js';
import Typewriter from 'typewriter-effect';

const Hero = (props) => {
    const [showParticles, setShowParticles] = useState(false);
  
        useEffect(() => {
            setTimeout(() => {
            setShowParticles(true);
            }, 100);
        }, []);
    return (
        <div className="hero" id="home">
            {showParticles &&(
                <Particles className="particles"
                params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 5
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    } 
                }}/>
            )}
            <h1 className="home_name">{props.name}<span>{props.surname}</span></h1> 
            <h1 className="typing">I'm a
            <span>
            <Typewriter
                options={{
                    strings: ['developer', 'designer'],
                    autoStart: true,
                    loop: true,
                  }}
            />   
            </span>
            </h1>
        </div>
    );
}

export default Hero;
