import React, { Component } from "react";
import styles from "./Banner.module.css";
import programsImage from "../../../Assets/bannerImages/img-coding-programs.png";
import BreadCrumbNav from "../BreadCrumbNav/BreadCrumbNav";

class Banner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div
          className={styles.bannerContainer}
          style={{
            backgroundImage: `url(${
              this.props.info && this.props.info.backgroundImage
                ? this.props.info.backgroundImage
                : programsImage
            })`,
          }}
        >
          <div className={styles.bannerOverlay}></div>
          <div className={styles.bannerTitle}>
            <p>
              {this.props.info && this.props.info.bannerTitle
                ? this.props.info.bannerTitle
                : "WCTD"}
            </p>
          </div>
          {this.props.info && this.props.info.bannerSubHeader ? (
            <div className={styles.bannerSubHeader}>
              <p>{this.props.info.bannerSubHeader}</p>
            </div>
          ) : null}
          {this.props.info && this.props.info.bannerButtonText ? (
            <div className={styles.bannerButtonDiv}>
              <button>{this.props.info.bannerButtonText}</button>
            </div>
          ) : null}

          <div className={styles.bannerNavbar}>
            <h6>
              <BreadCrumbNav breadCrumbText={this.props.breadCrumbText} />
            </h6>
          </div>
        </div>
      </>
    );
  }
}

export default Banner;
