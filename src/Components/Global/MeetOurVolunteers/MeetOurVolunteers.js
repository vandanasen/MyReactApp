import React from 'react';
import './MeetOurVolunteers.css';

import image1 from '../../../Assets/ballpic.png';
import image2 from '../../../Assets/ballpic1.png';
import image3 from '../../../Assets/ballpic2.png';
import image4 from '../../../Assets/ballpic3.png';

function MeetOurVolunteers() {
 
  return(
    <div className="volunteerBannerContainer">
      
      <div className="volunteerBannerNote">
        <p className="volunteerBannerText">Be part of
        <span className="volunteerBannerTextBold"> We Connect the Dots </span> 
        by discovering our 
        <span className="volunteerBannerTextBold"> volunteer opportunities.</span></p>     
      </div>
        <img src={image1} className="balloonRed" alt="png"/>
          <img src={image2} className="balloonYellow" alt="png"/>
          <img src={image3} className="balloonBlue" alt="png"/>
        <img src={image4} className="balloonGreen" alt="png"/>
      <button className="volunteerBannerButton">
        volunteer
      </button>  
    </div>
        
  )
}

export default MeetOurVolunteers;