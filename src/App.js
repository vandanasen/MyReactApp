import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Global/NavBar/NavBar.js";
import HomePage from "./Components/Pages/HomePage/HomePage";
import ProgramsPage from "./Components/Pages/ProgramsPage/ProgramsPage.js";
import Footer from "./Components/Global/Footer/Footer.js";
import UnderConstructionPage from "./Components/Pages/UnderConstructionPage/UnderConstructionPage";

import CodingProgramPageOverview from "./Components/Pages/ProgramsPage/CodingProgramPageOverview/CodingProgramPageOverview.js";
import LearningOutcomesPage from "./Components/Pages/ProgramsPage/CodingProgramPageOverview/LearningOutcomesPage/LearningOutcomesPage.js";
import AssessmentPage from "./Components/Pages/ProgramsPage/CodingProgramPageOverview/AssessmentPage/AssessmentPage.js";
import ProgramCosts from './Components/Pages/ProgramsPage/CodingProgramPageOverview/ProgramCosts/ProgramCosts.js'
import ProgramDetailPage from './Components/Pages/ProgramsPage/CodingProgramPageOverview/ProgramDetailPage/ProgramDetailPage.js'
import FAQ from './Components/Pages/ProgramsPage/CodingProgramPageOverview/FAQPage/Faqs.js'
import CreatingSteamPageOverview from "./Components/Pages/ProgramsPage/CreatingSteamPageOverview/CreatingSteamPageOverview.js";

import NewsPage from "./Components/Pages/NewsPage/NewsPage.js";
import NASDAQNewsPage from "./Components/Pages/NewsPage/NASDAQNewsPage/NASDAQNewsPage.js";
import CodeAThonNewsPage from "./Components/Pages/NewsPage/Code-A-ThonNewsPage/Code-A-ThonNewsPage";
import VolunteerPage from './Components/Pages/VolunteerPage/VolunteerPage';
import contactUs from './Components/Pages/ContactUsPage/ContactUsPage'
import GetInvolvedPage from "./Components/Pages/GetInvolved/GetInvolved";
import AffilatePage from './Components/Pages/AboutUs/AffilatePage/AffilatePage';
import CodeAThonPage from "./Components/Pages/CodeAThonPage/CodeAThonPage";
import DonatePage from "./Components/Pages/DonatePage/DonatePage";

import About from './Components/Pages/AboutUs/AboutUsPage'
import Team from './Components/Pages/AboutUs/OurTeamPage/OurTeamPage'
import Blog from './Components/Pages/AboutUs/BlogPage/BlogPage'
import SingleBlogPage from './Components/Pages/SingleBlogPage/SingleBlogPage'
import BecomeSponsorPage from './Components/Pages/GetInvolved/BecomeSponsorPage/BecomeSponsorPage'





function App() {
  return (
    <>
      <NavBar />
      <Switch>


        <Route path="/" component={HomePage}  exact/>
        <Route path="/about" component={About} exact/>
        <Route path="/about/team" component={Team} exact/>
        <Route path="/about/blog" component={Blog} exact/>
        <Route path="/about/blog/single" component={SingleBlogPage} exact/>
        <Route path="/about/nebula" component={AffilatePage} exact/> 
        <Route path="/programs" component={ProgramsPage} exact/>
        <Route path="/programs/code2021" component={CodeAThonPage} exact/>
        <Route path="/programs/codingprogram" component={CodingProgramPageOverview} exact/>
        <Route path="/programs/codingprogram/programcosts" component={ProgramCosts} exact />
        <Route path="/programs/codingprogram/learningoutcomes" component={LearningOutcomesPage} exact/>
        <Route path="/programs/codingprogram/programdetail" component={ProgramDetailPage} exact/>
        <Route path="/programs/codingprogram/faqs" component={FAQ} exact/>
        <Route path="/programs/codingprogram/assessment" component={AssessmentPage} exact/>
        <Route path="/programs/creatingSteam" component={CreatingSteamPageOverview} exact/>  
        <Route path="/news" component={NewsPage} exact/>
        <Route path="/news/nasdaq" component={NASDAQNewsPage} exact/>
        <Route path="/news/CodeAthon" component={CodeAThonNewsPage} exact />
        <Route path="/getinvolved" component={GetInvolvedPage} exact/>
        <Route path="/getinvolved/becomesponsor" component={BecomeSponsorPage} exact/>
        <Route path="/getinvolved/scholarship" component={UnderConstructionPage} exact/>
        <Route path="/getinvolved/donate" component={DonatePage} exact/>
        <Route path="/getinvolved/volunteer/general" component={UnderConstructionPage} exact/>
        <Route path="/getinvolved/volunteer/student" component={VolunteerPage} exact/>
        <Route path="/contactUs" component={contactUs} exact/>


        <Route path="*" component={UnderConstructionPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
