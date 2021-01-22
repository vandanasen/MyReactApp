import React, {Component} from 'react';
import './NewsSnippetCard.css';
import newssnippetimage1 from "../../../Assets/NewsPageImages/newssnippetimage1.png"
import purplearrow from "../../../Assets/purplearrow.png";
class NewsSnippetCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <>
                <div className="newssnippetcontainer">
                    <img 
                        className="newssnippetimage"
                        src={this.props.newsPageInfo && this.props.newsPageInfo.cardImage ? this.props.newsPageInfo.cardImage:''}
                        alt="students in a classroom"/>
                
                        <div className="newssnippettextcontainer">
                        {this.props.newsPageInfo && this.props.newsPageInfo.header ? this.props.newsPageInfo.header: <p></p>}
                        {this.props.newsPageInfo && this.props.newsPageInfo.summaryText ? this.props.newsPageInfo.summaryText: <p></p>}
                        <p className="purplecolor">READ STORY  <img src={purplearrow}alt="students in a classroom"/></p>
                    </div>
                </div>
            </>
        );
    }
}

export default NewsSnippetCard;