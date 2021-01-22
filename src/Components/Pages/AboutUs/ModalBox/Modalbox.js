import React, { Component } from 'react';
// import { Modal } from 'react-bootstrap';
import './Modalbox.css'

 class Modalbox extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: this.props.name,
            role: this.props.role,
            disc: this.props.disc,
            imgSrc: this.props.imgSrc,
            isModalshow : this.props.isModalshow,
            closeModle: this.props.closeModle
        }
    }
    
    render() {

       return (
            <div>
             <div className="modal-container"
              style={{
                display: this.props.isModalshow ? 'block' : 'none'
            }}
             >
        
                <div className="modal-wrapper" 
                // style={{
                //     display: this.props.isModalshow ? 'block' : 'none'
                // }}
                >
                    
                    <div className="modal-img">
                        <img src={this.props.imgSrc} alt="image"/>
                        <p></p>
                    </div>
                    <div className="modal-disc">
                     <h3>{this.props.name}</h3>
                     <h4>{this.props.role}</h4>
                     <p>{this.props.disc}</p>
                        <span className="close-modal-btn"
                             onClick={this.props.closeModle}
                        >&times;</span>
                    </div>
                </div>
                </div>

              
            </div>
        )
    }
} 


export default Modalbox