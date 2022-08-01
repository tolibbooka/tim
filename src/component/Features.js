import React from 'react';

const Features = () => {
    return (
        <div>
            <div className="otasi">
                <div className="bolasi">
                    <h1>Your everyday <br /> tasks, automated.</h1>
                    <p>Whirl lets you design and streamline <br /> your everyday tasks and workflows <br /> in just a few clicks.</p>
                    <button>Book a demo</button>
                    <a href="">Learn more</a>
                </div>
                <div className="bolasi2">
                    <img src='img/bola.png' alt="" />
                </div>
            </div>
            <div className="by">
                <h3>Trusted by 50,000+ companies</h3>
                <img src="img/Frame.png" alt="" />
            </div>

            <div className="card">
                <div className="card2">
                    <img src="img/Vector.png" alt="" />
                    <h1>Fast. Really fast.</h1>
                    <p>Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat.</p>
                </div>
                <div className="card3">
                    <img src="img/card2.png" alt="" />
                    <h1>More bang for buck.</h1>
                    <p>Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat.</p>
                </div>
                <div className="card4">
                    <img src="img/card3.png" alt="" />
                    <h1>Safe and secure.</h1>
                    <p>Ut enim ad minim veniam, quis nostrud <br /> exercitation ullamco laboris nisi ut <br /> aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;