import React from 'react';
import { Link } from 'react-router-dom';


class UnderConstructionPage extends React.Component{
    render(){
        return (
          <div>
            <h1 style={{textAlign:"center"}}>
              This page is currently under construction!
              <br/>
              <Link to="/">Go to Home </Link>
            </h1>
          </div>
        )
    }

}
export default UnderConstructionPage;