import React from "react";
import "./ProgramsPage.css";


import Covid19 from '../../Global/Covid19/Covid19';
import Banner from '../../Global/BannerComponent/Banner';
import ProgramDescriptionCard from '../../Global/ProgramDescriptionCard/ProgramDescriptionCard'
import ProgramDescriptionCard2 from '../../Global/ProgramDescriptionCard/ProgramDescriptionCardTwo'

import Message1 from '../../../Assets/industryLeaders.svg'
import Message2 from '../../../Assets/programDetails.svg'
import BannerImage from '../../../Assets/bannerImages/img-programs.png'
import Vector22 from '../../../Assets/vector22.png'
import ProgramDescCardTopRed from '../../../Assets/programDescCardImages/programDescCardTopRed.png';
import ProgramDescCardTopBlue from '../../../Assets/programDescCardImages/programDescCardTopBlue.png';
import ProgramDescCardTopGreen from '../../../Assets/programDescCardImages/programDescCardTopGreen.png';
import ProgramDescCardTopYel from '../../../Assets/programDescCardImages/programDescCardTopYel.png';
import PinkLayout from '../../../Assets/programDescCardImages/pinkLayout.svg';
import AquaLayout from '../../../Assets/programDescCardImages/aquaLayout.svg';
import GreenLayout from '../../../Assets/programDescCardImages/greenLayout.svg';
import OrangeLayout from '../../../Assets/programDescCardImages/orangeLayout.svg';
import AquaCircle from '../../../Assets/programDescCardImages/aquaCircle.svg';
import OrangeCircle from '../../../Assets/programDescCardImages/orangeCircle.svg';
import OrangeCircle2 from '../../../Assets/programDescCardImages/orangeCircle2.svg';
import DarkGreenCircle from '../../../Assets/programDescCardImages/darkGreenCircle.svg';


let breadText = ["Home", "Programs"];

let bannerInfo = {
	bannerTitle: "Programs",
	backgroundImage: BannerImage,
};

 let cardSettings1 = {
     cardImage: ProgramDescCardTopRed,
     backgroundColor: "#FDFDFD",
     layoutImage: PinkLayout,
     circleImage: AquaCircle,
     header: [<p>Building a PC</p>, <p>Ages 13-18 6 hour learning and skill building</p>],
     summaryText: (
     <p>
     We seek strategic and enthusiastic partnerships that will drive the fiscal
     and operational growth of our organization.
     </p>
     ),
    };

 let cardSettings2 = {
     cardImage: ProgramDescCardTopBlue,
     backgroundColor: "#F8F8F8",
     layoutImage: AquaLayout,
     circleImage: OrangeCircle,
     header: [<p>Code-A-Thon 2021 </p>, <p>Ages 13-18 2 Day Competition</p>],
     summaryText: (
     <p>
     We seek strategic and enthusiastic partnerships that will drive the fiscal
     and operational growth of our organization.
     </p>
     ),
    };

 let cardSettings3 = {
     cardImage: ProgramDescCardTopGreen,
     backgroundColor: "#FDFDFD",
     layoutImage: GreenLayout,
     circleImage: OrangeCircle2,
     header: [<p>Coding Programs </p>, <p>Ages 13-18 10 Day Summer Program </p>],
     summaryText: (
     <p>
     We seek strategic and enthusiastic partnerships that will drive the fiscal
     and operational growth of our organization.
     </p>
     ),
    };

 let cardSettings4 = {
     cardImage: ProgramDescCardTopYel,
     backgroundColor: "#F8F8F8",
     layoutImage: OrangeLayout,
     circleImage: DarkGreenCircle,
     header: [<p>Creating STEAM Program </p>, <p>Ages 13-18 10 Day Summer Program </p>],
     summaryText: (
     <p>
     We seek strategic and enthusiastic partnerships that will drive the fiscal
     and operational growth of our organization.
     </p>
     ),
    };


function ProgramsPage() {
    return(
       <div className="programsContainer">
        <Covid19/>
        <Banner info={bannerInfo} breadCrumbText={breadText}/>
            <div className="programsPageNote">
               <img src={Message1} className="mainTextBold" alt="svg"/>
               <img src={Message2} className="subText" alt="svg"/>
               <img src={Vector22} className="vector22" alt="png"/>
             </div>
        <ProgramDescriptionCard progDescInfo={cardSettings1}/>
        <ProgramDescriptionCard2 progDescInfo={cardSettings2}/>
        <ProgramDescriptionCard progDescInfo={cardSettings3}/>
        <ProgramDescriptionCard2 progDescInfo={cardSettings4}/>
        </div>
    );
}

export default ProgramsPage;
        
        