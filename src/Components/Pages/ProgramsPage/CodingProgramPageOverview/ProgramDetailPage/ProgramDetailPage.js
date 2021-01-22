import React,{Fragment} from 'react';
import Banner from '../../../../../Components/Global/BannerComponent/Banner';
import Covid19 from '../../../../Global/Covid19/Covid19';
import ProgramSidebarCard from '../../../../Global/ProgramSidebarCard/ProgramSidebarCard';
import SecondaryNavBar from '../../../../Global/NavBar/SecondaryNavBar/SecondaryNavBar';

import './ProgramDetailPage.css';

const breadText = ["Home", "Programs", "Coding Programs","Program Details"]

const bannerInfo = {
     bannerTitle: "Coding Programs",
     //backgroundImage: BannerImage8,
 }

class ProgramDetailPage extends React.Component{
    render() {
     return(
         
        <Fragment>
        
        
        <Covid19/>
        <Banner info={bannerInfo}  breadCrumbText={breadText}/>
        <SecondaryNavBar/>
           { <div className="ProgramDetailPage-container">
           <h1 className="ProgramDetailPage-tittle">Program Details</h1>
        
           <section className="ProgramDetailPagesec">Students will work on projects that are incorporated with the United Nations Sustainable Development Goals, to teach students to solve real-world problems through coding. 

           As students progress in the abilities to code they will have opportunities to work on game design, mobile application development, physical computing with IoT devices, Drones, Robotics, and more. 

           With the support of our STEAM Coaches, trained in cognitive learning approaches, they will build capacity while having fun learning coding competencies. Students will utilize a number of platforms in the programs, including but not limited to; Github, Scratch, Makecode, DroneBlocks, VisualStudio Code, Microsoft Azure, and Amazon Web Services.  

           This is a on going Program where students earn pins as a part of their coding accomplishments.  Each registered student will receive a backpack branded to show they are learning to code and a place they can proudly show their accomplishment pins.

           <p>
           Program Accomplishment Pins
           <p>
           Depending on where a student enters the program the accomplishment pin starting point will vary. All assessment requirements are outline for students as a part of the coding curriculum and shared within our collaboration spaces so that students can strive to achieve milestones and progress in coding.  Our coding backpacks with accomplishment pins are a way for students to be recognized for their hard work.
           </p>
           </p>

           <p>
            Foundations in CS Pin 
            <p>
            Student demonstrates mastery of a Drag and Drop platform and has completed a full assessment with a STEAM Coach. Students are now ready to move to line coding using one of the following languages: JavaScript,Python, HTML. CSS
            </p>
           </p>
           

           
           </section>
        
            <div className="ProgramSidebar">  
             <ProgramSidebarCard/>
            </div>
        </div> }
        
        
        </Fragment>
      
        
     );
    }
}
export default ProgramDetailPage ;