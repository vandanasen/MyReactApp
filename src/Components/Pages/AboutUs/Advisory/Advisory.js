/*   Create by: Anita nasa
     Date: 09/28/20 */

import React, { Component } from 'react';
import './Advisory.css';
import Laurie from '../../../../Assests/Laurie-img.png';
import Mark from '../../../../Assets/mark.png';
import John from '../../../../Assets/John-Wargo.png';
import Kerry from '../../../../Assets/kerry-img.png';
import Chris from '../../../../Assets/Chris-Gomez.png';
import Luis from '../../../../Assets/luis-img.png';
import Michael from '../../../../Assets/michael-img.png';
import Doug from '../../../../Assets/Doug.png';
import Elizabeth from '../../../../Assets/Elizabeth.png';
import Modalbox from '../ModalBox/Modalbox'



class Advisory extends Component{

  constructor(props){

    super(props);
    this.state = {
        Members: [
        {   
            id: '01',
            name: 'Laurie',
            role: 'CEO & Education Mangement Consultant',
            imgSrc: Laurie,
            disc: `Laurie Carey is a new American educator – challenging the problems of American education with a multi-prong 
                    vision that brings the tools of business success, innovative educational practices, and strategic technology
                     to schools, districts, universities, teachers, students and parents. Laurie Carey is not the proprietor of 
                     another educational product or service. The entities that she has founded, Nebula Academy, Laurie Carey
                      Consulting, LLC and We Connect The Dots, Inc., are driven by ideas, passions, individual skills, partnerships 
                      and the efficacy of research. Both entities utilize mutually supporting designs to bring American education
                       to a new level of effectiveness and leadership by replacing stagnation and irrelevance with passionate 
                       motivational learning and teaching`

        },
    
        {
            id: '02',
            name: 'Mark Koffsky',
            role: 'Partner Koffsky Schwalb LLC',
            imgSrc: Mark,
            disc: `"Working with the WCTDs team, I get to apply my passion and talent in the legal field for an amazing mission
             to educate and inspire students in Science, Technology, Engineering, Arts, and Math (STEAM) careers."  To learn 
             more about Mark:  http://koffsky.com/`
        },
            
        {
            id: '03',
            name: 'Jenny Adames',
            role: 'Project Manager',
            imgSrc: '../../../../Assets/placeholder.png',
            disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti aliquid earum eos eaque, 
            iure quis architecto exercitationem tenetur recusandae laborum ab nihil officiis? Cumque debitis 
            cum laudantium qui ducimus possimus.`
        },
    
        {
            id: '04',
            name: 'John Wargo',
            role: 'Microsoft Program Manager',
            imgSrc: John,
            disc: `John is a professional software developer, writer, presenter, father, husband, and Geek. 
            For the last 10 years, he’s focused on enterprise mobility and building mobile apps. He’s an 
            author of 6 books on mobile development, including 4 on PhoneGap/Apache Cordova, and has been 
            a contributor to the open-source Apache Cordova project. He loves tinkering with IoT, building 
            and writing about projects for Arduino, Particle Photon, Raspberry Pi, Tessel 2, and more. He’s 
            currently a Principal Program Manager for Mobile Center at Microsoft
            `
        },

        {
            id: '05',
            name: 'Kerri Shotts',
            role: 'Adobe Developer Advocate',
            imgSrc: Kerry,
            disc: `Kerri Shotts is a Developer Advocate at Adobe Systems, Inc. She has a wide range of 
            experience with web and mobile application development, and is the author of several books 
            about PhoneGap, a popular hybrid mobile application framework. When not writing code or 
            technical documentation, she enjoys photography and music performance.`
        },
        {
            id: '06',
            name: 'Chris Gomez',
            role: 'Senior Software Engineer',
            imgSrc: Chris,
            disc: `Chris Gomez has been a software developer for over twenty years. He has built applications as varied as 
            dazzling kiosk-based attractions for guests at the most popular theme parks in the world to web-based commercial 
            loan analytics tools and clinical health data exchange.One of his passions is to bring the skills of software 
            development to the next generation of programmers whether they are today's youth, professional developers,
             or career changing adults. He organizes the "Kids Code" night at the Philly.NET Professional Developers
              group each year and founded a local game development group. Every step of the way he is looking to inspire 
              people of all ages to spark their interest in coding by making their first game or mobile app. Chris's 
              blog can be found at www.chrisgomez.com.`
        },

        {
            id: '07',
            name: 'Luis Tolosa',
            role: 'Game Developer',
            imgSrc: Luis,
            disc: `Luis first began learning how to code while studying Computer Science at Columbia University. 
            He followed the Vision and Graphics track which allowed him to take classes such as Computer Graphics, 
            Artificial Intelligence, Robotics, and 3D User Interfaces. Due to this coursework, Luis was able to conduct 
            research projects focusing on Augmented and Virtual Reality. Post-graduation, Luis went to work at Blue Sky 
            Studios to work Virtual Reality tools and experiences. He now works at Labrodex Studios as a Game Developer
             focusing on Gameplay systems and AI. Throughout his time with We Connect the Dots, Luis shared his knowledge
              of Computer Science by assisting in teaching Introduction to Coding and Game Development.`
        },

        {
            id: '08',
            name: 'Michael Teal',
            role: 'Director of Operations',
            imgSrc: Michael,
            disc: `I grew up with the prospect of technology making life better. Working with We Connect the Dots allows me to 
            help people recognize their learning style. Combining that with the introduction of new ways to learn, and 
            collaborate. This will help students understand what is out there, giving them an idea of the jobs and 
            what they like to do before getting to far into a career. Find Michael on LinkedIn.`
        },

        {
            id: '09',
            name: 'Doug Steinberger',
            role: 'Co-Chapter Lead for Sandusky County',
            imgSrc: Doug,
            disc: `Doug is a bioengineering alumni of the University of Toledo and the University of 
            California, Los Angeles.  He has worked as an engineer within the medical device industry
             in product development, testing, manufacturing, clinical, quality, and regulatory.  
             He currently is a consultant based out of Ohio, and loves to farm, play sports, and 
             give back to his community.`
        },

        {
            id: '10',
            name: 'Elizabeth Royster',
            role: 'Co-Chapter Lead for Sandusky County',
            imgSrc: Elizabeth,
            disc: `Elizabeth Royster is a registered professional Civil Engineer for the Sandusky County Engineers Office with 
            14 years experience and skilled in producing a complete set of roadway and drainage plans within client time and
             budget constraints. Her volunteer efforts include executive board work with the Women’s Transportation Seminar 
             and the Society of Women Engineers. Elizabeth was a site lead for the Sandusky County 2018 Code a Thon.`
        }
    ],
    
    isModalshow: false,

    memberIndex: 0,

    }
    
    this.closeOutside = React.createRef()

    this.closeModalHandler = this.closeModalHandler.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    
  }

     closeModalHandler = (e) => {this.setState({isModalshow: false})};
     
     handleClickOutside = event => {
        if (this.closeOutside.current && !this.closeOutside.current.contains(event.target)) {
          this.setState({
            isModalshow: false,
          });
        }
      };
     
     componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
     }
     componentWillUnmount() {
       document.removeEventListener("mousedown", this.handleClickOutside);
     }
    


    render(){
       
        const {name, role, imgSrc, disc} = this.state.Members[this.state.memberIndex]
        
        const style = {
            position: 'fixed',
            top: '25%',
            left: '50%',
            marginLeft: '-50%',
            zIndex: '10'
        }

        return (
            <div class="parent-container">

                <div className="team-content" ref={this.closeOutside}>
                <h4>"Indiviually Strong, Collectively Powerfull"</h4>
                    <span>-We Vonnect The Dots</span>
                </div>

              
                <div className="card-wrapper row row-div">

                    
                    {
                        this.state.Members.map( (member, index) => {
                        return (
                        <div key={member.id} className="col-lg-3 col-md-4 col-sm-6 col-xm-12">
                            <div className="img-box">

                           <img src={member.imgSrc} className="memberImg" 
                           onClick={(e) => {
                               this.setState({isModalshow: true,  memberIndex: index})
                               console.log('Clicked', index )
                                
                           }}/>
                         
                            <p className="intro-heading">{member.name}</p>
                        <small className="desc-hedding">{member.role}</small>
                        </div>
                          
                          
                        </div>
                         
                        )
                        })
                    } 

            
                </div>
                <div style={style}>
                    <Modalbox class="modal-position" isModalshow= {this.state.isModalshow} 
                    closeModle={this.closeModalHandler} 
                    name={name} role={role} disc={disc} imgSrc={imgSrc}
                    style={{position: "absolute",
                    top: "0"}}
                    />
                   
                   </div>

                    <div className="overlay overlay-active"></div>
            </div>
        )
    }
   
}

export default Advisory;