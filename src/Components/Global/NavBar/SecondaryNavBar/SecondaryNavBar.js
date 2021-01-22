import React, { Component } from 'react'
import './SecondaryNavBar.css';

class SecondaryNavBar extends Component {

    state = {
        isActive: false

    } 

    

    render() {

        return (
            <div>

            <div className="list-container">
                <ul class="list-wrapper">
                    <li className="list" activeClassName="active-line">
                        <a href="/Programs/codingProgram" className="nav-link active-line">Overview</a>
          
                        
                    </li>

                    <li className="list" >
                        <a href="/Programs/codingprogram/programdetail" className="nav-link">Program Details</a>
                    </li>

                    <li className="list" activeClassName="active-line">
                        <a href="/Programs/codingProgram/learningoutcomes" className="nav-link">Learning Outcome</a>
                    </li>

                    <li className="list">
                        <a href="/programs/codingprogram/programcosts" className="nav-link ">Program Costs</a>
                    </li>

                    <li className="list">
                        <a href="/programs/codingprogram/assessment" className="nav-link ">Assessment</a>
                    </li>

                    <li className="list">
                        <a href="/programs/codingprogram/faqs" className="nav-link">FAQ's</a>
                    </li>
                    
                    <li> <button className="regBtn btn"><a href="#">Register</a></button></li>
                </ul>   

                
            </div>    

            </div>
        )
    }
}

export default SecondaryNavBar;