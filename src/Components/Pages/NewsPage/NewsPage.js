import React, {Fragment} from 'react';
import './NewsPage.css';
import NewsSnippetCard from '../../Global/NewsSnippetCard/NewsSnippetCard';
import Banner from '../../../Components/Global/BannerComponent/Banner';
import BannerImage from '../../../Assets/bannerImages/news-banner-img.png'
import redDotSphere from "../../../Assets/redDotSphere.svg";
import orangeEllipse from "../../../Assets/orangeEllipse.svg";
import greenDotSphere from "../../../Assets/greenDotSphere.svg";
import lightBlueEllipse from "../../../Assets/lightBlueEllipse.svg";
import Vector from '../../../Assets/NewsPageImages/purpleVector.png'
import newssnippetimage1 from "../../../Assets/NewsPageImages/newssnippetimage1.png"
import newssnippetimage2 from "../../../Assets/NewsPageImages/newssnippetimage2.png"
import newssnippetimage3 from "../../../Assets/NewsPageImages/newssnippetimage3.png"
import newssnippetimage4 from "../../../Assets/NewsPageImages/newssnippetimage4.png"

let breadText = ["Home", "News"];

let bannerInfo = {
	bannerTitle: "News",
	backgroundImage: BannerImage,
};

let cardSetting1 = {
    cardImage: newssnippetimage1,
    header:(<p><h4>Stories from 2019 Code-A-Thon</h4></p>) ,
    summaryText: (
    <p>
    Students invest in their future by spending their weekend 
    learning invaluable technology skills with the support of 
    Microsoft and our host partners.
    </p>
    ),
};
let cardSetting2 = {
    cardImage: newssnippetimage2,
    header:(<p><h4>NASDAQ Bell Ceremony</h4></p>) ,
    summaryText: (
    <p>
    Students invest in their future by spending their 
    weekend learning invaluable technology skills with 
    the support of Microsoft and our host partners.
    </p>
    ),
};
let cardSetting3 = {
    cardImage:newssnippetimage3,
    header:(<p><h4>November 4, 2019</h4></p>) ,
    summaryText: (
    <p>
    We Connect the Dots is awarded NYS Grant in partnership 
    with Nebula Academy to provide underserved populations 
    with training for entry level Tech Jobs.
    </p>
    ),
};
let cardSetting4 = {
    cardImage: newssnippetimage4,
    header:(<p><h4>September 26, 2019</h4></p>) ,
    summaryText: (
    <p>
    We Connect the Dots Partners with Marcum’s Raffa Social Capital 
    Advisors to Provide More Underserved Students Access to Tech Jobs.
    </p>
    ),
};

function NewsPage() {
    
    return (
        <Fragment>
        <Banner info={bannerInfo} breadCrumbText={breadText}/>
            <div className="newsHighlightContainer">
                <div className="newsHighlight"> 
                    <p>News Highlight</p>
                    <img src={Vector} alt="vector" />
                </div>
                <div className= "lightBlueEllipse">
                    <img src={lightBlueEllipse} alt="light blue ellipse" />
                </div>
                <div className= "greenDotSphere">
                    <img src={greenDotSphere} alt="smaller green dot sphere" />
                </div>
                <div className="newsSnippets1">
                    <NewsSnippetCard newsPageInfo={cardSetting1}/>
                </div>
                <div className= "orangeEllipse">
                    <img src={orangeEllipse} alt="orange ellipse" />
                </div>
                <div className= "redDotSphere">
                    <img src={redDotSphere} alt="smaller red dot sphere" />
                </div>  
                <div className="newsSnippets2">
                    <NewsSnippetCard newsPageInfo={cardSetting2}/>
                </div>
            </div>
            <div className="latestNewsContainer">
                <div className="latestNews"> 
                    <p>Our Latest News</p>
                    <img src={Vector} alt="vector" />
                </div>
                <NewsSnippetCard newsPageInfo={cardSetting3}/>
                <NewsSnippetCard newsPageInfo={cardSetting4}/>
                <div className="newsButton">
                    <button>
                        <div>View All</div>
                    </button>
                </div>
            </div>
        </Fragment>  
        );
    }
export default NewsPage;
