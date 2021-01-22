import React from 'react';
import './DonatePage.css';
import CallToAction from '../../Global/CallToAction/CallToAction';
import BannerComponent from '../../Global/BannerComponent/Banner';
import bannerImage from '../../../Assets/DonateBanner.png';

const breadText = ["Home", "Support Us", "Donate"]
const bannerInfo = {
 bannerTitle: "DONATE",
 backgroundImage: bannerImage,
}


function DonatePage() {
  return (
    <>
    <BannerComponent breadCrumbText={breadText} info={bannerInfo}/>
    <div className="DonatePageContainer">
      <CallToAction/>

      <button className="">
      </button>  
    </div>
    </>
  )

}
export default DonatePage;
