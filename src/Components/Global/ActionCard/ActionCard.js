import React, {Component} from 'react';
import donate from '../../../Assests/donate-icon.svg';
import fund from '../../../Assests/fund-scholarship-icon.svg';
import sponsor from '../../../Assests/sponsorship-icon.svg';

import './ActionCard.css';

class ActionCard extends Component {
    render() {
        return (
            <div className="cardStyle">
            <img src={donate} alt="" />
            <button className="callToActionButton">DONATE</button>
            </div>
        );
    }
}

export default ActionCard;


