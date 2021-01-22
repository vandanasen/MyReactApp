import React, {Component} from 'react';
import './NameTitleCard.css';
import Laurie from '../../../Assests/Laurie-img.png'

class NameTitleCard extends Component {
    render() {
        return (
            <div className="nameCard">
                <figure className="nameTitleCard">
                <img className="nameTitleCardImage" src={Laurie} alt="" />
                <figcaption className="nameTitleCardFigCaption">
                    <span className="nameTitleCardSpan">Laurie Carey</span>
                        CEO & Education Management Consultant
                    </figcaption>
                </figure>
            </div>
        );
    }
}

export default NameTitleCard;