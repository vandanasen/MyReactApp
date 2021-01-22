/*   Create by: Anita nasa
     Date: 09/28/20 */

     import React, { Component } from 'react';
     import './CommunityAmbassadorPage.css';
     import Lisa from '../../../../Assets/Lisa.png';
     import Henry from '../../../../Assets/Henry.png';
     import Ariel from '../../../../Assets/Ariel.png';
     import Tuqa from '../../../../Assets/Tuqa.png';
     import Mark from '../../../../Assets/mark.png';
     import Vincent from '../../../../Assets/Vincent.png';
     import Modalbox from '../ModalBox/Modalbox';
     
     
     
     class CommunityAmbassadors extends Component{
     
       constructor(props){
     
         super(props);
         this.state = {
             Members: [

                {
                    name: 'Vincent Occhiogrosso',
                    role: 'CAP Program Manager',
                    imgSrc: Vincent,
                    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla ex debitis, 
                    quam amet voluptas repellat minima voluptatibus consequatur assumenda, 
                    perspiciatis cum laboriosam saepe voluptatem. perspiciatis cum laboriosam saepe voluptatem.`
                },

                {
                    name: 'Henry Lam',
                    role: 'CA Technologies Director FP&A',
                    imgSrc: Henry,
                    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla ex debitis, 
                    quam amet voluptas repellat minima voluptatibus consequatur assumenda, 
                    perspiciatis cum laboriosam saepe voluptatem. perspiciatis cum laboriosam saepe voluptatem.`
                },

                {
                    name: 'Ariel Fleurimond',
                    role: 'Instructional Designer',
                    imgSrc: Ariel,
                    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla ex debitis, 
                    quam amet voluptas repellat minima voluptatibus consequatur assumenda, 
                    perspiciatis cum laboriosam saepe voluptatem. perspiciatis cum laboriosam saepe voluptatem.`
                },

                {
                    name: 'Tuqa Youssef',
                    role: '',
                    imgSrc: Tuqa,
                    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla ex debitis, 
                    quam amet voluptas repellat minima voluptatibus consequatur assumenda, 
                    perspiciatis cum laboriosam saepe voluptatem. perspiciatis cum laboriosam saepe voluptatem.`
                },

                {
                    name: 'Mark Koffsky',
                    role: 'Partner | Koffsky Schwalb LLC',
                    imgSrc: Mark,
                    disc: `"Working with the WCTDs team, I get to apply my passion and talent in the legal
                     field for an amazing mission to educate and inspire students in Science, Technology,
                      Engineering, Arts, and Math (STEAM) careers." 
                      To learn more about Mark: http://koffsky.com/`
                },
                {
                    name: 'Lisa Fleming',
                    role: 'Finance Consultant',
                    imgSrc: Lisa,
                    disc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nulla ex debitis, 
                    quam amet voluptas repellat minima voluptatibus consequatur assumenda, 
                    perspiciatis cum laboriosam saepe voluptatem. perspiciatis cum laboriosam saepe voluptatem.`
        
                }
             
            
     
         ],
         
         isModalshw: false,
         memberIndex: 0
     
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

            <div>
                     <h1 className="teamTitle">Community Ambassadors</h1>
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
     
     export default CommunityAmbassadors;