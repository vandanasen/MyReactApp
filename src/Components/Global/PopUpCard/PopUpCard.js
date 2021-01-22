
import React, { Component } from 'react';
import './PopUpCard.css';
import genericImage from '../../../Assets/Profile-Placeholder-Round.png';

class PopUpCard extends Component {
    constructor(props){
    super(props);    
    this.state = {
        
        }
    }

    render(){
        return(
          
            <div className="popUpContainer">
                <div>
                    <img className="popUpImagePhoto" alt= "personImage" src={this.props.info && this.props.info.image ? this.props.info.image : genericImage}/>
                    
                    <p className="popUpName">
                        {this.props.info && this.props.info.name ? this.props.info.name : 'John Smith'}
                    </p>
                </div>
                <div className="popUpContent">
                       {this.props.info && this.props.info.title ? this.props.info.title : 'Title: STEAM Coach'}
                       <br/>
                       <br/>
                       {this.props.info && this.props.info.description ? this.props.info.description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                 </div>
            
            </div>
        
        
        
        ) 
  }
}
export default PopUpCard;