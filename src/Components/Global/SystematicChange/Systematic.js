import React, { Component } from "react";
import styles from "./Systematic.module.css";
import rectangle from "../../../Assets/systematicImages/systematicRect.svg";
import fund from "../../../Assets/systematicImages/fund-scholarship-icon.svg";
import sponsorship from "../../../Assets/systematicImages/sponsorship-icon.svg";
import donate from "../../../Assets/systematicImages/donate-icon.svg";

class Systematic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className={styles.systematicBox}>
          <div className={styles.systemTop}>
            <div className={styles.systemTopText}>
              Be a Part of Systemic Change
            </div>
            <img
              src={rectangle}
              alt="purple rectangle"
            />
          </div>
          <div className={styles.systemCardContainer}>
            <div className={styles.systematicCard}>
              <img
                className={styles.systemCardImg}
                src={fund}
                alt="scholarship fund icon"
              />
              <a className={styles.systemCardButton2} href="/getinvolved/scholarship">
                <div className={styles.systemText}>FUND SCHOLARSHIP</div>
              </a>
            </div>
            <div className={styles.systematicCard}>
              <img
                className={styles.systemCardImg}
                src={sponsorship}
                alt="scholarship fund icon"
              />
              <a className={styles.systemCardButton} href="/getinvolved/becomeSponsor">
                <div className={styles.systemText}>SPONSOR</div>
              </a>
            </div>
            <div className={styles.systematicCard}>
              <img
                className={styles.systemCardImg}
                src={donate}
                alt="scholarship fund icon"
              />

              <a className={styles.systemCardButton}
                 href="/getinvolved/donate">
                  <div className={styles.systemText}>DONATE</div>
                </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Systematic;
