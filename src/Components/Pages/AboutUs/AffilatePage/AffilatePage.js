import React from "react"
import "./AffilatePage.css"
import Banner from "../../../Global/BannerComponent/Banner"
import icon from "../../../../Assets/Nebula-academy-icon.png"
import logo from "../../../../Assets/nebula-academy.png"
import vector from "../../../../Assets/Vector23.png"
import backgroundimg from "../../../../Assets/affilateimage.png"

const info = {
    bannerTitle: "Nebula Academy",
    backgroundImage: backgroundimg
}

const breadCrumbText = ['Home', "About Us", "Nebula Academy"]

function AffilatePage() {
    return (
        <>
            <Banner info={info} breadCrumbText={breadCrumbText}/>
            <div className="AffilateContainer">
                <p> To excite, inform and educate students about Science, Technology, Engineering, Arts, and Math (STEAM) careers.  Through a collaboration with the community, education, government and technology industry, WCTD provides awareness and education of the 21st Century workforce skills. With the opportunities available to students embracing STEAM careers.  Impacting students at a local, national and global level, our programs create a hunger for learning that empowers students to find their own paths to success.</p>
                <h1 className="checkusout">Check us out!</h1>
                <img src={vector} alt="vector"/>       
                <div>
                    <img src={logo} alt="logo"/>       
                    <img src={icon} alt="icon"/> 
                </div>     
            </div>
        </>
    )

}
export default AffilatePage