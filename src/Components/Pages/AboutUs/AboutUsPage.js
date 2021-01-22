import React,{Fragment} from "react";
import Banner from "../../Global/BannerComponent/Banner";
import SystematicChange from "../../Global/SystematicChange/Systematic";
import MeetOurVolunteers from "../../Global/MeetOurVolunteers/MeetOurVolunteers";
import AboutusPageImage from "../../../Assets/bannerImages/AboutUsBanner.png";
import rectangle from "../../../Assets/systematicImages/systematicRect.svg";
import realworldicon from "../../../Assets/AboutUsPageImages/real-world-icon.svg";
import activepartnershipicon from "../../../Assets/AboutUsPageImages/active-partnership-icon.svg";
import innovativeprogicon from "../../../Assets/AboutUsPageImages/innovative-programs-icon.svg";
import './AboutUsPage.css';
const bannerInfo = {
	bannerTitle: "About Us",
	backgroundImage: AboutusPageImage,
};


function About() {
	return (
		<Fragment>
			<Banner info={bannerInfo} />
			<div className="AboutUsPageContainer">
			    <h3 className="AboutUsPageSubtitle1">Who We Are</h3>
			    <img className="rect1" src={rectangle} alt="purple rectangle"/>
			    <div className="AboutUsPageTextContainer">
					<p>We are a social venture creating positive systemic change to today’s education system from K-to-Career. We provide underrepresented populations with access to immersive learning experiences to teach information technology and computer science education.
					</p>
			    </div>
			  
			</div>
			<div className="AboutUsPageContainer">
			    <h3 className="AboutUsPageSubtitle1">Our Mission</h3>
			    <img className="rect1" src={rectangle} alt="purple rectangle"/>
			    <div className="AboutUsPageTextContainer">
					<p>To excite, inform and educate students about Science, Technology, Engineering, Arts, and Math (STEAM) careers.  Through a collaboration with the community, education, government and technology industry, We Connect The Dots provides awareness and education of the 21st Century workforce skills. With the opportunities available to students embracing STEAM careers.  Impacting students at a local, national and global level, our programs empower students to find their own paths in STEAM.
					</p>
			    </div>
			  
			</div>
			<div className="AboutUsPageBigContainer">
			    <h3 className="AboutUsPageSubtitle2">What We Offer</h3>
			    <img className="rect2" src={rectangle} alt="purple rectangle"/>
				<div className="AboutUsPageiconcontainer">
				<img className="AboutUsPageIcon" src={realworldicon} alt="a briefcase icon"/>
				<h5 className="AboutUsPageIconTitle">Real World Experiences</h5>
				</div>
				
				<div className="AboutUsPageBigTextContainer">
				<p>We Connect The Dots allows students ranging in all ages the ability to experience career opportunities and determine the right path for their education. Our programs are created to offer real world experiences to help participants expand their knowledge with industry professionals in Science, Technology, Engineering, Arts, Math (STEAM) fields.</p>	
				</div>
				<div className="AboutUsPageiconcontainer">
				<img className="AboutUsPageIcon2" src={activepartnershipicon} alt="a hand shake icon"/>
				<h5 className="AboutUsPageIconTitle">Active Patnerships</h5>
				</div>	
				
				<div className="AboutUsPageBigTextContainer">
				<p>We bridge education with active partnerships and industry leaders to support the new generation future endeavors. Our community empowers educators and industry leaders with tools and the resources needed to reignite learning through the integration of up to date technology trends, and blending learning experiences. These partnerships enable our students to work with mentors and coaches, and be actively involved in job shadowing and internships.</p>	
				</div>
				<div className="AboutUsPagelasticoncontainer">
				<img className="AboutUsPageIcon3" src={innovativeprogicon} alt="an invention icon"/>	
				<h5 className="AboutUsPageIconTitle">Innovative Programs</h5>
				</div>
				<div className="AboutUsPageBigTextContainer">
				<p>We unite participants with mentorship, education and internships with our industry leaders, partners and educators. By providing these opportunities, we help build foundational skills to develop their long-term goals.</p>	
				</div>	
			</div>
			
			<SystematicChange />
			<MeetOurVolunteers/>
			
		</Fragment>
	);
}

export default About;