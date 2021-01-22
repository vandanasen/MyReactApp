import React,{Fragment} from 'react';
import NASDAQBellCeremonyImage1 from '../../../../Assets/NewsPageImages/NASDAQBellCeremonyImage1.png';
import NASDAQBellCeremonyImage2 from '../../../../Assets/NewsPageImages/NASDAQBellCeremonyImage2.png';
import NASDAQBellCeremonyImage3 from '../../../../Assets/NewsPageImages/NASDAQBellCeremonyImage3.png';
import Banner from '../../../../Components/Global/BannerComponent/Banner';
import './NASDAQNewsPage.css';
class News extends React.Component{
    render() {
     return(
         
        <Fragment>
           <Banner/> 
           <div className="page-container">
              <h1 className="page-title">NASDAQ BELL CEREMONY</h1>
        
              <section className="nasdaqsec">On Feb 4, 2016, We Connect The Dots joined Microsoft at the podium for the opening ceremonies at the Nasdaq Market Site in NYC. Present at the opening for We Connect The Dots were Laurie Carey, Founder and Executive Director; Stephen Sobierajski, Program Manager; Luis Tolosa, Sr. Student Ambassador; Vincent Occhiogrosso, President - Community Ambassador Program; and Anthony Brigante, Student Ambassador. Present for Microsoft were Donna Abrusci and Antuan Santana, Operations & Community Managers.</section>

        
              <img className="NASDAQImg1" src={NASDAQBellCeremonyImage1} alt="We Connect The Dots employees at the NASDAQ Bell Ceremony"/>
       
              <img className="NASDAQImg2" src={NASDAQBellCeremonyImage2} alt="We Connect The Dots employees at the NASDAQ Bell Ceremony"/>
            </div>
        
            <div>
               <img className="NASDAQImg3"  src={NASDAQBellCeremonyImage3} alt="NASDAQ Bell Ceremony"/>
               <video></video>
               <a href="/NewsPage/CompanyNewsPage.js">
                  <button className="primarybutton" > VIEW ALL COMPANY NEWS
                  </button>
               </a>
            </div>
       
        </Fragment>
      
        
     );
    }
}
export default News;