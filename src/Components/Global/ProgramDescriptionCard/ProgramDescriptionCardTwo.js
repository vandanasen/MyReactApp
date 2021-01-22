import React, { Component } from "react";
import styles from "./ProgramDescriptionCard.module.css";
class ProgramDescriptionCardTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {/* Card 2 */}
        <div
          className={styles.programDescCardBoxTwo}
          style={{ background: this.props.progDescInfo && this.props.progDescInfo.backgroundColor ? this.props.progDescInfo.backgroundColor : 'white' }}
        >
          <div className={styles.programDesCardBoxTwoLeft}>
            <div className={styles.programDescCardTwoTopImgDiv}>
              <img
                src={this.props.progDescInfo && this.props.progDescInfo.cardImage ? this.props.progDescInfo.cardImage : ''}
                width={400}
                height={280}
                alt="students sitting"
              />
            </div>
            <div className={styles.programDescCardTwoMidImgDiv}>
              <img src={this.props.progDescInfo && this.props.progDescInfo.circleImage ? this.props.progDescInfo.circleImage : ''} alt="ball" />
            </div>
            <div className={styles.programDescCardTwoBotImgDiv}>
              <img
                src={this.props.progDescInfo && this.props.progDescInfo.layoutImage ? this.props.progDescInfo.layoutImage : ''}
                alt="background"
                width={400}
                height={280}
              />
            </div>
          </div>
          <div className={styles.programDesCardBoxTwoRight}>
            <div className={styles.programDescCardTwoTitle}>
              {this.props.progDescInfo && this.props.progDescInfo.header && this.props.progDescInfo.header[0] ? this.props.progDescInfo.header[0] : ''}
            </div>
            <div className={styles.programDescCardSummaryTwo}>
              {this.props.progDescInfo && this.props.progDescInfo.header && this.props.progDescInfo.header[1] ? this.props.progDescInfo.header[1] : ''}
              {this.props.progDescInfo && this.props.progDescInfo.summaryText ? this.props.progDescInfo.summaryText : ''}            </div>
            <div className={styles.programDescCardButDivTwo}>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProgramDescriptionCardTwo;
