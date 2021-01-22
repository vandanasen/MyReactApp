import React from 'react';
import './ProgramSidebarCardCreatingSteam.css';
import Calendar from '../../../Assets/CalIcon.svg';
import Location from '../../../Assets/LocationIcon.svg';
import Clock from '../../../Assets/ClockIcon.svg';
import People from '../../../Assets/PeopleIcon.svg';

const agegroup = " Ages 13 to 18"

function ProgramSidebarCardCreatingSteam(){
        
    return(
        <div className="ProgramSidebarCardCreatingSteam">

            <div className="ProgramSidebarCreatingSteamRow"> 
                <img className="ProgramSidebarIcon" src={People} alt="People"/>
                <p className="ProgramSidebarBolded ProgramMarginLeft"> {agegroup} </p>
            </div>
            <div className="ProgramSidebarCreatingSteamRow">
                <img className="ProgramSidebarIcon" src={Calendar} alt="Calendar" />
                <p className="ProgramSidebarBolded ProgramMarginLeft"> Sept,30th - June 9</p> 
            </div>   
            <div className="ProgramSidebarCreatingSteamRow">
                <img className="ProgramSidebarIcon" src={Clock} alt="Clock" />
                <p className="ProgramSidebarBolded ProgramMarginLeft"> 4-6 pm</p>
            </div>
            <div className="ProgramSidebarCreatingSteamRow">
                <img className="ProgramSidebarIcon" src={Location} alt="Location" />
                <p className="ProgramSidebarBolded ProgramMarginLeft">  Online</p>
            </div>
        </div>   
    ); 
};
export default ProgramSidebarCardCreatingSteam;