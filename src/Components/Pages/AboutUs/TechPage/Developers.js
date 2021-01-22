/*   Create by: Anita nasa
     Date: 09/28/20 */

     import React, { Component } from 'react';
     import Vandana from '../../../../Assets/Vandana.png';
     import Modalbox from '../ModalBox/Modalbox';
     
     
     
     class Developers extends Component{
     
       constructor(props){
     
         super(props);
         this.state = {
     
         Developers: [
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
         
         isModalshw: false,
         memberIndex: 0
         }

         this.closeModalHandler = this.closeModalHandler.bind(this);
        }
    
        closeModalHandler = (e) => {this.setState({isModalshow: false})};
     
    render(){
       
        const {name, role, imgSrc, disc} = this.state.Developers[this.state.memberIndex]
        
        const style = {
            position: 'fixed',
            top: '25%',
            left: '50%',
            marginLeft: '-50%',
            zIndex: '10'
         }
        
        
     return (
        <div class="parent-container">
   
                      <div>
                         <h1 className="teamTitle">Developers</h1>
                     </div>
                     
                     <div className="card-wrapper row row-div">

                
                {
                    this.state.Developers.map( (member, index) => {
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

                
                 </div>
             )
         }
        
     }
     
     export default Developers;