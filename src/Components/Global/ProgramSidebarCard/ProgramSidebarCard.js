import React from 'react';
import './ProgramSidebarCard.css';
import Calendar from '../../../Assets/CalIcon.svg';
import Location from '../../../Assets/LocationIcon.svg';
import Clock from '../../../Assets/ClockIcon.svg';
import People from '../../../Assets/PeopleIcon.svg';

let agerange = " Ages 7 to 18 "
let agerange1 = " Ages 7 to 12: "
let agerange2 = " Ages 13 to 18: "



function ProgramSidebarCard(){
        
    return(
        <div className="ProgramSidebarCard">

            <div className="ProgramSidebarRow"> 
                <img className="ProgramSidebarIcon" src={People} alt="People"/>
                <p className="ProgramSidebarBolded ProgramMarginLeft"> {agerange} </p>
            </div>

            <div className="ProgramSidebarRow">
                <img className="ProgramSidebarIcon" src={Calendar} alt="Calendar" />
                <div className="ProgramSidebarColumn">
                    <p className="ProgramSidebarBolded">Sept. 30th - June 15</p> <p>Option of 5, 10, 15,</p><p>or 30 weeks</p>
                    <br/>
                                
                    <div className="ProgramSidebarRowinrow">
                        <p className="ProgramMarginLeft"> <span className="ProgramSidebarBolded">{agerange1} </span>      Monday, Tuesday, Thursday, & Sunday</p>
                    </div> 
                        
                    <div className="ProgramSidebarRowinrow"> 
                        <p className="ProgramMarginLeft">  <span className="ProgramSidebarBolded">{agerange2}</span>      Wednesday </p> 
                    </div> 
                </div>   

            </div>

            <div className="ProgramSidebarRow">
                <img className="ProgramSidebarIcon" src={Clock} alt="Clock" />
                <p className="ProgramSidebarBolded ProgramMarginLeft">4-6 pm</p>
            </div>

            <div className="ProgramSidebarRow">
                <img className="ProgramSidebarIcon" src={Location} alt="Location" />
                <p className="ProgramSidebarBolded ProgramMarginLeft">  Online</p>
            </div>
        
        </div>
    );

    
};

export default ProgramSidebarCard;