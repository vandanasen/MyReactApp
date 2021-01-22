import styles from "./BreadCrumbNav.module.css";
import React, { Component } from "react";

class BreadCrumbNav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  createBreadCrumbs() {
    let results = [];
    if (!this.props.breadCrumbText) {
      return [];
    }
    for (let i = 0; i <= this.props.breadCrumbText.length - 1; i++) {
      results.push(
        <li key={i}>{this.props.breadCrumbText[i]}</li>,
        <li key={i + 100}>{">"}</li>
      );
    }
    results.pop()
    return results;
  }
  render() {
    return (
      <>
        <div>
          <ul className={styles.breadcrumb}>
            {this.createBreadCrumbs()}
            {/* <li>H</li>
            <li>Pictures</li>
            <li>Summer 15</li> */}
          </ul>
        </div>
      </>
    );
  }
}

export default BreadCrumbNav;
