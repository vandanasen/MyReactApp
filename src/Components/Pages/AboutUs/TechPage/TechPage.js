/*   Create by: Anita nasa
     Date: 09/28/20 */

     import React, { Component, useEffect } from 'react';
     import './TechPage.css';
     import Irene from '../../../../Assets/Irene.png';
     import Monica from '../../../../Assets/Monica.png';
     import Miriam from '../../../../Assets/Miriam.png';
    //  import Anci from '../../../../Assests/Anci.png';
    //  import Tali from '../../../../Assests/Tali.png';
     import Joan from '../../../../Assets/Joan-Coulter.png';
     import Vandana from '../../../../Assets/Vandana.png';
     import Modalbox from '../ModalBox/Modalbox';
     import Developer from './Developers';
     
     
     class TechTeam extends Component{
     
       constructor(props){
     
         super(props);
         this.state = {
            Members: [
             {
                 name: 'Irene Faminial',
                 role: 'UX/UI Design Lead',
                 imgSrc: Irene,
                 disc: `During my experience with We Connect The Dots, I was involved with Leading a team of UX/UI Designers to completely redesign We Connect The 
                        Dot’s website by improving their user experience and youth engagement. My role was to spearhead the project from beginning to end, guide
                        and mentor the team along the way. Working with We Connect The Dots has given me great learning and working experience-  cross-collaboration,
                        understanding others work process, honing my skills as a UX/UI Designer and developing leadership qualities.  Being involved with We Connect
                        The Dots was an amazing opportunity and helped me uncover potential qualities and helped build the confidence to reach higher. I had a great 
                        time working with We Connect The Dots and am grateful to work with a team of talented UX/UI Designers who made this journey enjoyable.`
     
             },
           
             {
                 name: 'Monica Lozano',
                 role: 'UX/UI Designer',
                 imgSrc: Monica,
                 disc: `My time volunteering with We Connect the Dots consisted of working remotely with a team of UX and UI Designers 
                        from different parts of the world. We worked together to redesign their website with the aim of  providing an 
                        intuitive experience. for people. This experience has helped me develop my skills and gain more confidence 
                        as a UX/UI Designer.  I also had the pleasure of learning and growing with a team of  passionate and motivated designers. 
                        I enjoyed my time volunteering with We Connect the Dots and am grateful to have been a part of this experience. `
             },
         
             {
                 name: 'Miriam Ali',
                 role: 'UX/UI Designer',
                 imgSrc: Miriam,
                 disc: `Worked with the UX team to help redesign the We Connect the Dots website to help highlight the different 
                        programs students can explore in the STEAM field. Working with We Connect the Dots has given me the opportunity 
                        to develop and improve my UX Design skills. It has also taught me how to work collaboratively as a remote team. 
                        I have enjoyed my time contributing and working with the We Conncect the Dots team and supporting their mission. `
             },
     
             {
                 name: 'Anci Sun',
                 role: 'UX/UI Designer',
                 imgSrc: '../../../../teamImages/Profile-Placeholder-Round.png',
                 disc: `During my experience with We Connect The Dots, I had the opportunity to work with a remote team of
                 UX/UI Designers to provide a holistic redesign to improve all aspects of the website. Our design goal was
                 to improve the site’s navigation and content, with the broader goal of providing a good website
                 experience to show the impact that We Connect The Dots has made for students interested in STEAM.
                 This has been a wonderful volunteer experience as I had the opportunity to work with a passionate and
                 like-minded team, in addition to improving my UX, UI, and research skills. It has given me immense joy
                 to be part of a team that strives to create engaging and meaningful experiences for others.
                 I have really enjoyed my time volunteering with We Connect The Dots and am excited to see the impact
                 that our team has made for students and other individuals who are interested in STEAM.`
             },
     
             {
                 name: 'Tali Friedman',
                 role: 'UX/UI Designer',
                 imgSrc: '../../../../teamImages/Profile-Placeholder-Round.png',
                 disc: `While working with We Connect The Dots, I was part of the UI/UX team. We focused on simplifying the ease of use on the existing 
                        website while maintaining the content and usability. Working for We Connect The Dots was empowering opportunity, I had a chance
                        to work on a large scale project with other professionals. It helped me gain skills and working with new tools while collaborating with peers.`
             },
     
             {
                 name: 'Joan Coulter',
                 role: 'UX/UI Designer',
                 imgSrc: Joan,
                 disc: `My time with We Connect the Dots was spent collaborating with other UX Designers in order to
                 redesign their website. My experience working with We Connect the Dots helped me develop my UX Design skills.
                 From research to design to user testing, I was involved in the whole design process.
                 Collaborating with other designers was also helpful in learning to work with others from different
                 backgrounds. It was also nice to learn from them and their strengths, I enjoyed my time with We Connect the Dots. It was a valuable learning experience for me and it
                 was fulfilling to be able to help create a more effective website for their users.`
             }
     
         ],

         devmembers: [
            {
                name: 'Vandana Senthil',
                role: 'Front End Developer Lead',
                imgSrc: Vandana,
                disc: `My experience with We Connect the Dots has been a great and it has let me delve into the various aspects of web development. 
                       I was part of the website redesign team, and our goal was to change the layout of the website to improve the user experience. 
                       Through this experience I have enhanced my design skills and look forward to being the lead developer in the next phase of the project. 
                       I also had the pleasant experience of working with others in my team. Sharing and discussing ideas with my colleagues has been a great 
                       boost for my team building skills as well. Overall, my volunteering for We Connect the Dots has been a wonderful experience and 
                       I am grateful for this opportunity and the people I have worked with.
                `
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
     
     <div className="team-content" ref={this.closeOutside} >
            <h4>"Indiviually Strong, Collectively Powerfull"</h4>
                <span>-We Vonnect The Dots</span>
            </div>

            <div>
                     <h1 className="teamTitle">UX/UI Designers</h1>
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

                   {/* UX designer section ends here */}

                         {/* Developer section start here */}
{/*                
                      <div>
                         <h1 className="teamTitle">Developers</h1>
                     </div>
                     
                     <div className="card-wrapper row row-div">

                
                {
                    this.state.devmembers.map( (member, index) => {
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
               
               </div> */}

                <Developer />
                 </div>
             )
         }
        
     }
     
     export default TechTeam;