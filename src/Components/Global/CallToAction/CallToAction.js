import React from 'react'; 
import './CallToAction.css';

import greenCircle from '../../../Assets/GreenHalfCircle.png';
import yellowCircle from '../../../Assets/YellowHalfCircle.png';
import redVector from '../../../Assets/RedVector.png';
import purple from '../../../Assets/purple.svg';
import blueBarr from '../../../Assets/BlueBarrV.png';

function CallToAction() {
    return(
        
        <div className="callToActionContainer">

            <div className="callToActionTop">
                <p className="ActionWords">Give the Gift of Learning by Supporting</p>
                <p className="ActionWords">our Organization</p>
                <img className="blueBarr" src={blueBarr}  alt="Blue line"></img>
            </div>
            

            <div className="ButtonContainer">
                <button className="CallAbutton">$50</button>
                   <button className="CallAbutton">$100</button>
                   <button className="CallAbutton">$150</button>
                <button className="CallAbutton">OTHER</button>

                
            </div>
                <div className="yellowCircleDiv">
                   <img src={yellowCircle}  alt="Yellow circle"></img>
                </div>

                <div className="purpleCircleDiv">
                   <img src={purple}  alt="Purple circle"></img>
                </div>

                <div className="greenCircleDiv">
                   <img src={greenCircle}  alt="green circle"></img>
                </div>

                <div className="redCircleDiv">
                   <img src={redVector}  alt="red circle"></img>
                </div>
                {/* <img className="greenCircle" src={greenCircle}></img>
                    <img className="yellowCircle" src={yellowCircle}></img>
                      <img className="redVector" src={redVector}></img>
                    <img className="blueVector" src={blueVector}></img>
                 */}
            <div className="CallToActionNotes">
                <p>100% of your donations are invested in programs support and delivrery</p>
                <p>Donation of all amounts are appreciated and reconized on our social media.</p>
            </div>
        </div>
    )
}
export default CallToAction; 



