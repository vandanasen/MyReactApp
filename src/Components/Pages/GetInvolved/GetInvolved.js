import React, { Component } from "react";
import styles from "./GetInvolved.module.css";
import Banner from "../../Global/BannerComponent/Banner";
import ProgramDescriptionCard from "../../Global/ProgramDescriptionCard/ProgramDescriptionCard";
import ProgramDescriptionCardTwo from "../../Global/ProgramDescriptionCard/ProgramDescriptionCardTwo";
import bannerImage from "../../../Assets/banner-background-getInvolved.png";
import handshake from "../../../Assets/programDescCardImages/handshake.png";
import aquaLayout from "../../../Assets/programDescCardImages/aquaLayout.svg";
import purpleCircle from "../../../Assets/programDescCardImages/purpleCircle.svg";
import twoStudents from "../../../Assets/programDescCardImages/twoStudents.png";
import purpleLayout from "../../../Assets/programDescCardImages/purpleLayout.svg";
import aquaCircle from "../../../Assets/programDescCardImages/aquaCircle.svg";
import redCircle from "../../../Assets/programDescCardImages/redCircle.svg";
import orangeLayout from "../../../Assets/programDescCardImages/orangeLayout.svg";
import redLayout from "../../../Assets/programDescCardImages/redLayout.svg";
import orangeCircle from "../../../Assets/programDescCardImages/orangeCircle.svg";

const breadText = ["Home", "Get Involved"];
const bannerInfo = {
  bannerTitle: "GET INVOLVED",
  backgroundImage: bannerImage,
};

let cardSettings1 = {
  cardImage: handshake,
  backgroundColor: "#FDFDFD",
  layoutImage: aquaLayout,
  circleImage: purpleCircle,
  header: [<p>Become a Sponsor</p>],
  summaryText: (
    <p>
      We seek strategic and enthusiastic partnerships that will drive the fiscal
      and operational growth of our organization.
    </p>
  ),
};
let cardSettings2 = {
  cardImage: twoStudents,
  backgroundColor: "#F8F8F8",
  layoutImage: purpleLayout,
  circleImage: aquaCircle,
  header: [<p>Volunteer</p>],
  summaryText: (
    <p>
      We need volunteers to help us run the oragnization. Impact your community
      while gaining experience"
    </p>
  ),
};

let cardSettings3 = {
  cardImage: handshake,
  backgroundColor: "#FDFDFD",
  layoutImage: orangeLayout,
  circleImage: redCircle,
  header: [<p>Fund a Scholarship</p>],
  summaryText: (
    <p>
      Funding a scholarship creates a ripple effect in how we demonstrate the
      value of a diverse workforce and shape the lives of the recipient of the
      scholarship, their families and communities they live in.
    </p>
  ),
};
let cardSettings4 = {
  cardImage: twoStudents,
  backgroundColor: "#F8F8F8",
  layoutImage: redLayout,
  circleImage: orangeCircle,
  header: [<p>Donate</p>],
  summaryText: (
    <p>
      Be a part of the change by making a one time donation or invest in
      reoccurring donations through a monthly or annual donation.
    </p>
  ),
};
class GetInvolved extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Banner info={bannerInfo} breadCrumbText={breadText} />
        <div className={styles.getInvolvedTitle}>
          Join us in building the next generation of Scientists, Technologists,
          Engineers, Artists, and Mathematicians for changing the world in
          positive ways.
        </div>
        <ProgramDescriptionCardTwo progDescInfo={cardSettings1} />
        <ProgramDescriptionCard progDescInfo={cardSettings2} />
        <ProgramDescriptionCardTwo progDescInfo={cardSettings3} />
        <ProgramDescriptionCard progDescInfo={cardSettings4} />
      </>
    );
  }
}

export default GetInvolved;
