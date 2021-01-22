import React, { Component } from "react";
import './BecomeSponsor.css'
import Banner from "../../../Global/BannerComponent/Banner";
import bannerImage from "../../../../Assets/bannerImages/SponsorBanner.png";
import highlighImage from "../../../../Assets/sponsorPageImages/sponsor_highlight.png";
import dots from '../../../../Assets/redDotSphere.svg';

// Sponsors
import sponsor1 from '../../../../Assets/sponsorPageImages/abc 2.png'
import sponsor2 from '../../../../Assets/sponsorPageImages/Adobe 2.png'
import sponsor3 from '../../../../Assets/sponsorPageImages/awseducate 2.png'
import sponsor4 from '../../../../Assets/sponsorPageImages/cdw 2.png'
import sponsor5 from '../../../../Assets/sponsorPageImages/charlottehousing 2.png'
import sponsor6 from '../../../../Assets/sponsorPageImages/connectotech 2.png'
import sponsor7 from '../../../../Assets/sponsorPageImages/Disney 2.png'
import sponsor8 from '../../../../Assets/sponsorPageImages/farmerspantry 2.png'
import sponsor9 from '../../../../Assets/sponsorPageImages/Hunter 2.png'
import sponsor10 from '../../../../Assets/sponsorPageImages/insight 2.png'
import sponsor11 from '../../../../Assets/sponsorPageImages/koffsky 2.png'
import sponsor12 from '../../../../Assets/sponsorPageImages/launchpad 2.png'
import sponsor13 from '../../../../Assets/sponsorPageImages/lauriecarey 2.png'
import sponsor14 from '../../../../Assets/sponsorPageImages/microsoft 2.png'
import sponsor15 from '../../../../Assets/sponsorPageImages/missiondisrupt 2.png'
import sponsor16 from '../../../../Assets/sponsorPageImages/motionrobotics 2.png'
import sponsor17 from '../../../../Assets/sponsorPageImages/nyit 2.png'
import sponsor18 from '../../../../Assets/sponsorPageImages/pennwood 2.png'
import sponsor19 from '../../../../Assets/sponsorPageImages/pta 2.png'
import sponsor20 from '../../../../Assets/sponsorPageImages/savvyhires 2.png'
import sponsor21 from '../../../../Assets/sponsorPageImages/stemconnector 2.png'
import sponsor22 from '../../../../Assets/sponsorPageImages/terra 2.png'
import sponsor23 from '../../../../Assets/sponsorPageImages/theclaire 2.png'


let breadText = ["Home", "Get Involved", "Become A Sponsor"];
const bannerInfo = {
  bannerTitle: "Become A Sponsor",
  backgroundImage: bannerImage,
};


class BecomeSponsorPage extends Component {
  render() {
    return (
      <section className="sponsor_section">

        <Banner info={bannerInfo} breadCrumbText={breadText} />
        <div className="sponsor_heading">Be a part of empowering the future generation <br></br> of STEAM by sponsoring a program</div>

        <ul className="sponsor_program_grid">
          <div className="sponsor_program_grid_item">Annual Code-A-Thon Program</div>
          <li className="sponsor_program_grid_item">Coding programs for ages 7-18</li>
          <li className="sponsor_program_grid_item">Community Ambassador Program</li>
          <li className="sponsor_program_grid_item">Software Engineer Bootcamp</li>
          <div className="sponsor_program_grid_item">CreatingSTEAM</div>
        </ul>

        <div className="sponsor_program_highlight">

          <div className="sponsor_program_section">
            <div className="sponsor_program_highlight_text">
              <h1>Inspiring students in STEAM</h1>
              <p>Over the past 6 years we have enabled students of all ages and economic backgrounds to explore new careers in STEAM. We influence and inspire over 1000 students per year who go on to either major or minor in a STEAM related career path. This is made possible by the generous support of our sponsors.</p>
            </div>
            <div className="sponsor_program_highlight_text">
              <h1>What sponsorship can provide our students</h1>
              <p>Sponsorship offers students from under represented communities the chance  to participate in our program at no cost. Sponsorship also offers the opportunity for students to engage with mentors and coaches, as well as the ability to be actively involved in job shadowing and internships. </p>
            </div>
          </div>

          <div className="sponsor_program_highlight_image">
            <img alt="Classroom Picture" src={highlighImage}></img>
            <div className="sponsor_program_highlight_imagebackground_circles">
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
              <div className="circle">  </div>
            </div>
          </div>

        </div>

        <div className="sponsor_list">
          <h1>Current and Past Sponsors</h1>
          <div ></div>
          <ul className="sponsor_list_grid">
            <li className="sponsor_list_grid_item"><img alt="ABC INOAC Exterior Systems, LLC" src={sponsor1} ></img></li>
            <li className="sponsor_list_grid_item"><img alt="Adobe" src={sponsor2}></img></li>
            <li className="sponsor_list_grid_item"><img alt="AWS Educate" src={sponsor3}></img></li>
            <li className="sponsor_list_grid_item"><img alt="CDW" src={sponsor4}></img></li>
            <li className="sponsor_list_grid_item"><img alt="Charlotte Housing and Neighborhood Services" src={sponsor5}></img></li>
            <li className="sponsor_list_grid_item"><img alt="Connect to Tech" src={sponsor6}></img></li>
            <li className="sponsor_list_grid_item"><img alt="Disney" src={sponsor7}></img></li>
            <li className="sponsor_list_grid_item"><img alt="Farmer's Pantry" src={sponsor8}></img></li>
            <li className="sponsor_list_grid_item"><img alt="Hunter Business School" src={sponsor9}></img></li>
            <li className="sponsor_list_grid_item"><img alt="Insight" src={sponsor10}></img></li>
            <li className="sponsor_list_grid_item"><img alt="Koffsky Schwalb" src={sponsor11}></img></li>
            <li className="sponsor_list_grid_item"><img alt="LaunchPad Long Island" src={sponsor12}></img></li>
            <li className="sponsor_list_grid_item"><img alt="Laurie Carey Consulting" src={sponsor13}></img></li>
            <li className="sponsor_list_grid_item"><img alt="Microsoft" src={sponsor14}></img></li>
            <li className="sponsor_list_grid_item"><img alt="Mission Disrupt" src={sponsor15}></img></li>
            <li className="sponsor_list_grid_item"><img alt="Motion Controls Robotics" src={sponsor16}></img></li>
            <li className="sponsor_list_grid_item"><img alt="College of Engineering and Computing Science" src={sponsor17}></img></li>
            <li className="sponsor_list_grid_item"><img alt="Penn Wood Foundation" src={sponsor18}></img></li>
            <li className="sponsor_list_grid_item"><img alt="New York State PTA" src={sponsor19}></img></li>
            <li className="sponsor_list_grid_item"><img alt="Savvy Hires" src={sponsor20}></img></li>
            <li className="sponsor_list_grid_item"><img alt="Stem Connector" src={sponsor21}></img></li>
            <li className="sponsor_list_grid_item"><img alt="Terra State Community College" src={sponsor22}></img></li>
            <li className="sponsor_list_grid_item"><img alt='The Claire Friedlander Family Foundation' src={sponsor23}></img></li>
          </ul>
        </div>

      </section>
    );
  }
}

export default BecomeSponsorPage;
