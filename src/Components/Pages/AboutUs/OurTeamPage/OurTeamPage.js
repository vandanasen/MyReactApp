import React from "react";
import Banner from "../../../Global/BannerComponent/Banner";
import OurTeamPageImage from "../../../../Assets/bannerImages/OurTeamBanner.png";
import NameTitleCard from "../../../Global/NameTitleCard/NameTitleCard";
import Advisory from "../Advisory/Advisory";
import BusinessAndSales from "../Business&sales/Business&sales";
import CommunityAmbassadors from "../CommunityAmbassadorPage/CommunityAmbassadorPage"
import TechTeam from "../TechPage/TechPage"


const bannerInfo = {
	bannerTitle: "Our Team",
	backgroundImage: OurTeamPageImage,
};


function OurTeam(props) {


	return (
		<div>
			<Banner info={bannerInfo} />
            <div style={{
				display:'flex', 
				maxWidth: '100vw',
				flexWrap:'wrap', 
				margin: '30px 0px 30px 0px', 
				justifyContent: 'space-around'
				}}
				
				>
               

                <Advisory />

				{/* <BusinessAndSales />
               <CommunityAmbassadors />
                <TechTeam />  */}
            </div>
		</div>
	);
}

export default OurTeam;
					
					
					
					 

