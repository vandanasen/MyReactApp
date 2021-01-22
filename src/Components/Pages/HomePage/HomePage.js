import React from "react";
import "./HomePage.css";

import Banner from "../../../Components/Global/BannerComponent/Banner";
import SystematicChange from "../../../Components/Global/SystematicChange/Systematic";
import BlogCard from "../../../Components/Global/BlogCard/BlogCard";
import LocationMap from "./LocationMap";

import HomePageImage from "../../../Assets/bannerImages/homePage.png";
import MapImage from "../../../Assets/map.png";
import MapImage1 from "../../../Assets/map1.png";
import HomeHeader from "../../../Assets/homePageHeader.png";
import ForStudents from "../../../Assets/forStudentsCard.png";
import ForEveryone from "../../../Assets/forEveryoneCard.png";
import RedGreenCircles from "../../../Assets/redGreenCircles.png";
import UpComingHeader from "../../../Assets/upcomingEventsHeader.png";
import GreenRedCircles from "../../../Assets/greenRedCircles.png";
import EventsPreview from "../../../Assets/eventsPreviewCard.png";
import EventsPreview2 from "../../../Assets/eventsPreviewCard.png";
import EventsPreview3 from "../../../Assets/eventsPreviewCard.png";
import BlogCardImg1 from "../../../Assets/blogCardImages/blogcard1.png";
import BlogCardImg2 from "../../../Assets/blogCardImages/kidsWithDrone.png";
import BlogCardImg3 from "../../../Assets/blogCardImages/teacherInOrange.png";
import ArrowLeft from "../../../Assets/arrowLeft.png";
import ArrowRight from "../../../Assets/arrowRight.png";


const bannerInfo = {
	bannerTitle: "Registration is now open for our 2021 Code-A-Thon!",
	backgroundImage: HomePageImage,
};

let blogCardSettings1 = {
    cardImage: BlogCardImg1,
    cardDate: "November 12, 2019",
    cardTitle: "Code-a-thon Interview with Jennifer Hoff (Pennsylvania Site Lead - Part 2)",
}
let blogCardSettings2 = {
    cardImage: BlogCardImg2,
    cardDate: "Novemeber 2, 2019",
    cardTitle: "Code-a-thon Interview with Jennifer Hoff (Pennsylvania Site Lead - Part 1)",
}
let blogCardSettings3 = {
    cardImage: BlogCardImg3,
    cardDate: "Novemeber 2, 2019",
    cardTitle: "Creating Systems Change",
}

class HomePage extends React.Component {
	constructor () {
		super();
		this.state = {mapSrc : MapImage};
	}

 changeLocation(src) {
	this.setState({mapSrc : src});
}

render() {
	return (
		<div>
			<Banner info={bannerInfo} />
			<div className="homeContainer">
				<div className="blueBackground">
					<p className="hpMessage">
						We unlock the potential for students of all ages and economic
						backgrounds to discover their passion and create attainable
						achievements within STEAM careers.
					</p>
					<div className="statSheetContainer">
						<div className="statSheet">
							<div className="statColumn">
								<h1 className="numbersBold">1560</h1>
								<p className="mainBodyText">
									Students have participated in We Connect the Dots programs to
									date
								</p>
							</div>
							<span className="dottedBorder"></span>
							<div className="statColumn">
								<h1 className="numbersBold">800</h1>
								<p className="mainBodyText">
									Industry leaders have taken part in monitoring and educating
									our students
								</p>
							</div>
							<span className="dottedBorder"></span>
							<div className="statColumn">
								<h1 className="numbersBold">90%</h1>
								<p className="mainBodyText">
									Students have gone on to pursue a major or minor in a Steam
									related field.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="pLocationsContainer">
					<div className="pLocationsLeftRight">
						<div className="pLocationsLeft">
							<h1 className="locations">Program Locations</h1>
							<div className="purpleRect"></div>
							<button type="button" className="locationButton" onClick={() =>this.changeLocation(MapImage)}>
								Primary Location
							</button>
							<span  onClick={() =>this.changeLocation(MapImage1)} className="codeAThonText" style={{cursor: 'pointer'}}>Annual Code-A-Thon Locations</span>
							<a href="/programs" className="viewPButton">
								VIEW PROGRAMS
							</a>
						</div>
						<div className="pLocationsRight">
							<div className="mapColumn">
								<LocationMap src={this.state.mapSrc} />
							</div>
						</div>
					</div>
				</div>
				<div className="volunteersContainer">
					<div className="homeHeader">
						<img src={HomeHeader} alt="png"/>
					</div>
					<div className="vCardsLeftRight">
						<a href="/getinvolved/volunteer/student" className="forStudents"><img src={ForStudents}  alt="png"></img></a>
						<a href="/getinvolved/volunteer/general" className="forEveryone"><img src={ForEveryone}  alt="png"></img></a>
					</div>
                    <div className="redGreenCircles">
                        <img src={RedGreenCircles}  alt="png"></img>
                    </div>
				</div>
				<div className="upcomingEventsContainer">
                        <div  className="upcomingHeader"><img src={UpComingHeader} alt="png"></img></div>
                    <div className="eventCardsLeftRight">
                            <img src={EventsPreview} className="eventsPreview" alt="png"></img>
                            <img src={EventsPreview2} className="eventsPreview2" alt="png"></img>
                            <img src={EventsPreview3} className="eventsPreview3" alt="png"></img>
                        <div className="greenRedCircles">
                            <img src={GreenRedCircles}  alt="png"></img>
                        </div>
                    </div>
			    </div>
                <div>
				<SystematicChange />
                </div>
                <div className="blogPostContainer">
                    <div className="blogPostMain">
                        <h1 className="blogPostText">Blog Posts</h1>
                        <div className="blogPostPurpleRect"></div>
                    </div>
                    <div className="blogCardImages">
                    <BlogCard cardInfo={blogCardSettings1} />
                    <BlogCard cardInfo={blogCardSettings2}/>
                    <BlogCard cardInfo={blogCardSettings3}/>
                    </div>
                    <div className="viewAllPost">
                        <a href="/about/blog">View All Post</a>
                    </div>
                    <div className="arrowLeft">
                        <img src={ArrowLeft} alt="png"></img>
                    </div>
                    <div className="arrowRight">
                        <img src={ArrowRight} alt="png"></img>
                    </div>
                </div>
			</div>
		</div>
	);
}
}

export default HomePage;
