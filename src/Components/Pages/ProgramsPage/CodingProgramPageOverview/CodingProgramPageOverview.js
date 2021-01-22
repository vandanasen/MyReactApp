import React,{Fragment} from 'react';
import Banner from '../../../../Components/Global/BannerComponent/Banner';
import Covid19 from '../../../Global/Covid19/Covid19';
import ProgramSidebarCard from '../../../Global/ProgramSidebarCard/ProgramSidebarCard';
import SecondaryNavBar from '../../../Global/NavBar/SecondaryNavBar/SecondaryNavBar';

import './CodingProgramPageOverview.css';
import Faqs from './FAQPage/Faqs'
const breadText = ["Home", "Programs", "Coding Programs"]

const bannerInfo = {
     bannerTitle: "Coding Programs",
     //backgroundImage: BannerImage8,
 }

class CodingProgramPageOverview extends React.Component{
    render() {
     return(
         
        <Fragment>
        
        
        <Covid19/>
        <Banner info={bannerInfo}  breadCrumbText={breadText}/>
        <SecondaryNavBar/>
           { <div className="CodingProgramPage-container">
           <h1 className="CodingProgramPageOverview-tittle">OVERVIEW</h1>
        
           <section className="CodingProgramPageOverviewsec">Learning to code helps students to build computational thinking skills. Our method instructs learners how to approach new information and new problems using the same cognitive processes as computer scientists.We assess learning needs prior to and during participation in our program to plan personalized objectives. Sessions provide project-based experiential learning wherein students gain knowledge and demonstrate competency through projects, working together both in-person and digitally on our collaboration platform with others.Parents will receive all detailed information about the program after sign up.</section>
        
            <div className="ProgramSidebar">  
             <ProgramSidebarCard/>
            </div>
        </div> }
        
     
        </Fragment>
      
        
     );
    }
}
export default CodingProgramPageOverview;