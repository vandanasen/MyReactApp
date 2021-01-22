import React,{Fragment} from 'react';
import Banner from '../../../../../Components/Global/BannerComponent/Banner';
import Covid19 from '../../../../Global/Covid19/Covid19';
import ProgramSidebarCard from '../../../../Global/ProgramSidebarCard/ProgramSidebarCard';
import SecondaryNavBar from '../../../../Global/NavBar/SecondaryNavBar/SecondaryNavBar';
import './AssessmentPage.css';
const breadText = ["Home", "Programs", "Coding Programs", "Assessment"]

const bannerInfo = {
     bannerTitle: "Coding Programs",
     //backgroundImage: BannerImage8,
 }
class AssessmentPage extends React.Component{
    render() {
     return(
         
        <Fragment>
        
        
        <Covid19/>
        <Banner info={bannerInfo}  breadCrumbText={breadText}/>
        <SecondaryNavBar/>
           <div className="CodingProgramPage-container">
           <h1 className="CodingProgramPageOverview-tittle">Schedule an Assessment</h1>
        
           <section className="CodingProgramPageOverviewsec">If you are not sure the coding classes are for your child let us help you better understand their capabilities with learning to code. Whether that is to determine if our sessions are too challenging or not challenging enough, let us work with you to determine the right fit for your child. Schedule a one hour assessment with our instructors to evaluate the students current capabilities. We will provide feedback to you and your child and make recommendations on next steps to engage in learning to code that meets your their overall goals.</section>
        
            <div className="ProgramSidebar">  
             <ProgramSidebarCard/>
            </div>
        </div>
        
       
        </Fragment>
      
        
     );
    }
}
export default AssessmentPage;