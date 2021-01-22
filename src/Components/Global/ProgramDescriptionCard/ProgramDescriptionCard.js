import React, { Component } from "react";
import styles from "./ProgramDescriptionCard.module.css";
// import programDescCardCircle from "../../../Assets/programDescCardCircle.svg";
// import programDescCardTopRed from "../../../Assets/programDescCardTopRed.png";
// import programDescCardMidRed from "../../../Assets/programDescCardMidRed.svg";
// import programDescCardBotRed from "../../../Assets/programDescCardBotRed.svg";
class ProgramDescriptionCard extends Component {
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
        {/* Card1 */}
        <div
          className={styles.programDescCardBoxOne}
          style={{ background: this.props.progDescInfo && this.props.progDescInfo.backgroundColor ? this.props.progDescInfo.backgroundColor : 'white' }}
        >
          <div className={styles.programDescCardLeft}>
            <div className={styles.programDescCardTitle}>
              { this.props.progDescInfo && this.props.progDescInfo.header ? this.props.progDescInfo.header[0] : <p></p> }
            </div>
            <div className={styles.programDescCardSummary}>
              {this.props.progDescInfo && this.props.progDescInfo.header ? this.props.progDescInfo.header[1]: <p></p>}
              {this.props.progDescInfo && this.props.progDescInfo.summaryText ? this.props.progDescInfo.summaryText: <p></p>}
            </div>
            <div className={styles.programDescCardButDiv}>
              <button>LEARN MORE</button>
            </div>
          </div>

          <div className={styles.programDescCardRight}>
            <div className={styles.programDescCardTopImgDiv}>
              <img
                src={this.props.progDescInfo && this.props.progDescInfo.cardImage ? this.props.progDescInfo.cardImage: ''}
                alt="students working"
                width={400}
                height={280}
              />
            </div>
            <div className={styles.programDescCardTopMidDiv}>
              <img src={this.props.progDescInfo && this.props.progDescInfo.circleImage ? this.props.progDescInfo.circleImage : ''} alt="ball" />
            </div>
            <div className={styles.programDescCardBotImgDiv}>
              <img
                src={this.props.progDescInfo && this.props.progDescInfo.layoutImage ? this.props.progDescInfo.layoutImage : ''}
                alt="background"
                width={400}
                height={280}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProgramDescriptionCard;
