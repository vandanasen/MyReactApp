import React,{Fragment} from 'react';
import Banner from '../../../../Components/Global/BannerComponent/Banner';
import Covid19 from '../../../Global/Covid19/Covid19';
import ProgramSidebarCardCreatingSteam from '../../../Global/ProgramSidebarCardCreatingSteam/ProgramSidebarCardCreatingSteam';
import './CreatingSteamPageOverview.css';
class CreatingSteamPageOverview extends React.Component{
    render() {
     return(
         
        <Fragment>
           <Covid19/>
           <Banner/>
           <div className="CreatingSteamPage-container">
               <h1 className="CreatingSteamPageOverview-tittle">Overview</h1>
               <p className="CreatingSteamPageOverviewsec">Students participate in a two-week program Monday-Friday. Throughout the 10-day experiential learning program students gain competencies in 21st century workforce skills and awareness of STEAM career opportunities for today and in the future. Competencies that are integrated into the 10-day experience are, the Value of Lifelong Learning, Problem Solving, Self-Management, Teamwork, Collaboration On- and Offline, Information Media and Technology Skills, ICT Learning, Knowledge construction, Leaderships, Life and Career Skills.<p>Parents will receive all detailed information about the program after sign up.</p> </p>
        
               <div className="ProgramSidebar">  
                  <ProgramSidebarCardCreatingSteam/>
               </div>
            </div>
        </Fragment>
         );
        }
    }
    export default CreatingSteamPageOverview;