import React from 'react';
import "./ContactUsPage.css"
import contactImage from "../../../Assets/bannerImages/img-contact-us.png";

import BannerComponent from '../../Global/BannerComponent/Banner';
import NebulaAddress from '../../../Assets/img-nebula-address.png';
import facebook from '../../../Assets/contactPageImages/fb-icon.svg';
import linkedin from '../../../Assets/contactPageImages/linkedin-icon.svg';
import instagram from '../../../Assets/contactPageImages/instagram-icon.svg';
import twitter from '../../../Assets/contactPageImages/twitter-icon.svg';
import youtube from '../../../Assets/contactPageImages/youtube-icon.svg';
import ContactForm from './ContactForm'


 const bannerInfo = {
   bannerTitle: "Contact Us",
   backgroundImage: contactImage,

 }

 const breadText = ["Home","About Us","Contact Us"];


class ContactUsPage extends React.Component{
    render(){


        return (
          <div className = "ContactUsPageContainer">
             <BannerComponent className = "bannerContainer" info = {bannerInfo} breadCrumbText = {breadText}/>
        
          <div className = "contactPageLRContainer">

            <div className = "contactPageLeft">
          
              <ContactForm/>

            </div>
            <div className = "contactPageRight">
             
              <img className="nebullaMap" src={NebulaAddress} alt="" />
              <div className = "contactPageRightBottom">
                <div className = "addressPhoneContainer">
                  <div className = "addressContainer">
                    <p className = "contactPageText"><b>Address:</b></p>
                    <p className = "contactPageText">180 Michael Drive Syosset, NY 11791</p>
                  </div>
                  <div className = "phoneNumberContainer">
                    <p className = "contactPageText"><b>Phone Number:</b></p>
                    <p className = "contactPageText">631-468-7475</p>
                  </div>
                </div>
                <p className = "contactPageTex" style={{paddingTop: '10px', fontSize: '20px'}}><b>Connect with Us!</b></p>
                <div className = "contactPageRightIconContainer">
                  <a href="https://www.facebook.com/weconnectthedots/">       <img className="contactPageLogo" src={facebook} alt="" /></a>
           
                  <a href="https://www.instagram.com/weconnectthedots/"><img className="contactPageLogo" src={instagram} alt="" /></a>
                  <a href="https://www.linkedin.com/company/we-connect-the-dots-inc/"><img className="contactPageLogo" src={linkedin} alt="" /></a>
                  <a href="https://twitter.com/wctds"><img className="contactPageLogo" src={twitter} alt="" /></a>
                 <a href="https://www.youtube.com/channel/UCjlHJthxX6VFo1Yw0W3S7yw"><img className="contactPageLogo" src={youtube} alt="" /></a>


                </div>
                </div>
              
            </div>
            
            {/* <h1 style={{textAlign:"center"}}>
              Contact Us
            </h1> */}
            
            
          </div>
        </div>
        )
    }

}
export default ContactUsPage;
