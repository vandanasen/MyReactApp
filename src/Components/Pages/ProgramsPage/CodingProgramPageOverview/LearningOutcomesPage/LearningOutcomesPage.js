import React,{Fragment} from 'react';
import Banner from '../../../../Global/BannerComponent/Banner';
import Covid19 from '../../../../Global/Covid19/Covid19';
import ProgramSidebarCard from '../../../../Global/ProgramSidebarCard/ProgramSidebarCard';
import SecondaryNavBar from '../../../../Global/NavBar/SecondaryNavBar/SecondaryNavBar';

import './LearningOutcomesPage.css';

const breadText = ["Home", "Programs", "Coding Programs","Learning Outcomes"]

const bannerInfo = {
     bannerTitle: "Coding Programs",
     //backgroundImage: BannerImage8,
 }

class LearningOutcomesPage extends React.Component{
    render() {
     return(
         
        <Fragment>
        
        
        <Covid19/>
        <Banner info={bannerInfo}  breadCrumbText={breadText} />
        <SecondaryNavBar/>
           <div className="CodingProgramPage-container">
           <div className="LearningOutcomesPageTitle">Learning Outcomes</div>
        
           <table className="LearningOutcomesPageOverviewsec">
               <tr>
                   <td className="LearningOutcomesPageHeaderBox" >
                       <div className="LearningOutcomesPageHeader">Foundational Coding </div>
                    </td>
                    <td className="LearningOutcomesPageHeaderBox" >
                       <div className="LearningOutcomesPageHeader">Technical problem solving skills </div>
                    </td>
               </tr>
               <tr>
                   <td className="LearningOutcomesPageHeaderBox" >
                       <div className="LearningOutcomesPageHeader">Team buiding </div>
                    </td>
                    <td className="LearningOutcomesPageHeaderBox" >
                       <div className="LearningOutcomesPageHeader">A career portfolio </div>
                    </td>
               </tr>
               <tr>
                   <td className="LearningOutcomesPageHeaderBox" >
                       <div className="LearningOutcomesPageHeader">Professional Leadership </div>
                    </td>
                    <td className="LearningOutcomesPageHeaderBox" >
                       <div className="LearningOutcomesPageHeader">Real world projects </div>
                    </td>
               </tr>
            </table>
        
            <div className="ProgramSidebar">  
             <ProgramSidebarCard/>
            </div>
        </div>
        
       
        </Fragment>
      
        
     );
    }
}
export default LearningOutcomesPage;