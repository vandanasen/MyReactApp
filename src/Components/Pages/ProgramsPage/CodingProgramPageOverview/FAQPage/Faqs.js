import React,{useState,Fragment} from 'react';
import './Faqs.css';
import {accordionData} from './AccordionData';
import Banner from '../../../../Global/BannerComponent/Banner';
import SecondaryNavBar from '../../../../Global/NavBar/SecondaryNavBar/SecondaryNavBar';
const breadText = ["Home", "Programs", "Coding Programs","FAQ's"]




function Faqs(props) {

    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if(clicked === index){
            return setClicked(null)
        }
        setClicked(index)
    }

    return (
        <Fragment>

       
        <Banner breadCrumbText={breadText}/>
        <SecondaryNavBar/>
        <div className="accordion-section">
            <div className="container-wrap">
                        <div >
                    <h1 className="heading">FAQ's</h1>
                    </div>
                    </div>
            {/* <div className="accordion-container"> */}
            {accordionData.map((data, index) => {
                return(
                    <div className="container-wrap">
                        <div className="wrap" onClick={() => toggle(index)} key={index}>
                   
                   <p className="qesHeading">{data.question}</p>
                   <button style={{fontSize: '30px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#fff', padding: '5px 10px', color: 'rgb(62, 59, 59)'}}>{clicked === index ? '_' : '+'}</button>
                    {/* <span style={{fontSize: '35px'}}>{clicked === index ? '_' : '+'}</span> */}
                  
                    {/* {clicked === index ? (
                        <div className="dropdown">
                        <p className="ansContent">{data.answers}</p>
                        </div>
                    ) : null } */}
                    </div>
                    {clicked === index ? (
                        <div className="dropdown">
                        <p className="ansContent">{data.answers}</p>
                        </div>
                    ) : null }
                    
                    </div>
                )
            })}
           
                    <div className="bottomSpace"></div>
                   
    
        </div>
        </Fragment>
    )
}

export default Faqs
