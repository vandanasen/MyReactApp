import React from "react";

import Banner from "../../../Global/BannerComponent/Banner";
import BlogPageImage from "../../../../Assets/bannerImages/BlogBanner.png";


const bannerInfo = {
	bannerTitle: "Blog",
	backgroundImage: BlogPageImage,
};



function Blog() {
	return (
		<div>
			<Banner info={bannerInfo} />
            
		</div>
	);
}

export default Blog;