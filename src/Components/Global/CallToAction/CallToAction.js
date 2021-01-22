import React from 'react'; 
import './CallToAction.css';
import programsImage from "../../../Assets/bannerImages/img-coding-programs.png";
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
                <img className="blueBarr" src={blueBarr}></img>
            </div>
            

            <div className="ButtonContainer">
                <button className="CallAbutton">$50</button>
                   <button className="CallAbutton">$100</button>
                   <button className="CallAbutton">$150</button>
                <button className="CallAbutton">OTHER</button>

                
            </div>
                <div className="yellowCircleDiv">
                   <img src={yellowCircle}></img>
                </div>

                <div className="purpleCircleDiv">
                   <img src={purple}></img>
                </div>

                <div className="greenCircleDiv">
                   <img src={greenCircle}></img>
                </div>

                <div className="redCircleDiv">
                   <img src={redVector}></img>
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



{/* <div classname="callToActionContainer1">
                 <p className="ActionWords">Donate with Amazon Smile</p>
            <div>
                <img className="blueBarr" src={blueBarr}></img>
            </div>
               <p>A simple an automatic way for you to support We Connect The Dots,Inc</p>
               <p>every time you shop at no cost to you.</p>
            <div className="ButtonContainer1">
                <button className="CallAbutton">GO TO AMAZONSMILE</button>
            </div>
            <div>
                <p>if you have any question about donating you can contact us</p>
            </div>
        </div> */}