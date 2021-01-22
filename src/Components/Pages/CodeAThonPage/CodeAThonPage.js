import React, { Component } from "react";
import styles from "./CodeAThonPage.module.css";
import codeAThonImg from "../../../Assets/codeathongallery1.png";
import leftArrow from "../../../Assets/leftarrow.svg";
import rightArrow from "../../../Assets/rightarrow.svg";
import Banner from "../../Global/BannerComponent/Banner";
import FAQCard from "../../Global/FAQCard/FAQCard";
import codeAThonBanner from "../../../Assets/bannerImages/codeathonBanner.png";

const breadText = ["Home", "Programs", "Code-a-Thon 2021"];
const bannerInfo = {
  bannerTitle: "CODE-A-THON 2021",
  backgroundImage: codeAThonBanner,
};
let FAQs = [
  {
    Question: "What type of coding languages are involved?",
    Answer: "Coding languages such as HTML, CSS and Javascript are involved.",
  },
  {
    Question: "Will we work individually or working in teams?",
    Answer: "You will be working in Teams.",
  },
  {
    Question: "How can my child learning/participating after the Code-a-thon?",
    Answer:
      "They can continue learning by participating in our Coding Programs.",
  },
  {
    Question: "Will laptops or necessary tech be provided?",
    Answer: "Yes, we will provide laptops and necessary items.",
  },
  {
    Question:
      "Will students be spending the night? Where will the students sleep?",
    Answer:
      "Yes, they will be spending the night. They will sleep in sleeping bags in designated room spaces, available in different locations.",
  },
  { Question: "Will meals be provided?", Answer: "Yes" },
  {
    Question: "Are there prizes?",
    Answer: "First, Second and Third. These vary due to budget.",
  },
  {
    Question: "Are parents allowed to be there?",
    Answer:
      "Parents are only allowed at the end, during student presentations.",
  },
];
class CodeAThonPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Banner info={bannerInfo} breadCrumbText={breadText} />
        <div className={styles.codeAThonContainer}>
          <div className={styles.codeAThonButtonDiv}>
            <button>
              <div>Register Now</div>
            </button>
          </div>
          <div className={styles.codeAThonProgDetailsDiv}>
            <p>Program Details</p>
            <p>
              Code-A-Thon is a Free Program. Students will work in teams of 4 to
              get creative and solve global problems as they demonstrate their
              ideas through coding. Students will gain valuable skills that can
              be taken outside the classroom and aid them in entering the
              workforce later in life. For many students in underserved
              communities, learning to code can support a positive change for
              their future and for their families. WCTD has taken the best
              practices of the traditional hackathon concept, normally delivered
              for college and entrepreneur students and melded it with our
              experiential learning and neuroscience research based teaching
              approach. Creating a new innovative experience for students ages
              13-18, an age that is critical to expose them to career
              opportunities and the skills needed to be successful.
              <br /> Parents will receive all detailed information about the
              program after sign up.
            </p>
            <p>PROFESSIONAL EXPERIENCE EXPOSURE</p>
            <p>
              Students engage in learning how to code with HTML5, CSS and
              JavaScript, while learning how to utilize industry platforms to
              build websites, and Github to store projects for portfolio
              development, providing students a unique way to stand out when
              applying for internships, college applications, and job
              interviews. The program is about getting students out of their
              comfort zones to learn 21st century workforce skills. Competing in
              diverse teams, students work to explore global issues and create a
              functional website that offered a solution to society. This
              weekend is not just about learning to code, it was about learning
              to work in teams, solve complex problems, cross collaborate,
              synthesize information, and most importantly meet new friends and
              have fun learning.
            </p>
          </div>
          <div className={styles.codeAThonGalleryBox}>
            <div className={styles.codeAThonGalleryTitle}>
              <p>Gallery</p>
              <div className={styles.codeAThonImageDiv}>
                <img src={leftArrow} alt="left arrow" />
                <img src={codeAThonImg} alt="student code-a-thon gathering" />
                <img src={rightArrow} alt="right arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.codeAThonFAQ}>
          <FAQCard FAQS={FAQs} />
        </div>
      </>
    );
  }
}

export default CodeAThonPage;
