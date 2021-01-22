import React, { Component } from "react";
import styles from "./VolunteerPage.module.css";
import purpleRect from "../../../Assets/systematicImages/systematicRect.svg";
import greenEllipse from "../../../Assets/greenEllipse.svg";
import orangeEllipse from "../../../Assets/orangeEllipse.svg";
import darkGreenEllipse from "../../../Assets/darkGreenEllipse.svg";
import smallOrangeEllipse from "../../../Assets/smallOrangeEllipse.svg";
import purpleEllipse from "../../../Assets/purpleEllipse.svg";
import brightRdEllipse from "../../../Assets/brightRdEllipse.svg";
import redDotSphere from "../../../Assets/redDotSphere.svg";
import blueDotSphere from "../../../Assets/blueDotSphere.svg";
import smallRedDotSphere from "../../../Assets/smallRedDotSphere.svg";
import rightPurpleSphere from "../../../Assets/rightPurpleSphere.svg";
import caeleyLooney from "../../../Assets/caeleyLooney.png";
import bannerImage from "../../../Assets/bannerImages/volunteerBanner.png";
import Banner from "../../Global/BannerComponent/Banner";
import FAQCard from "../../Global/FAQCard/FAQCard";

let breadText = ["Home","Get Involved","Community Ambassador"];
const bannerInfo = {
  bannerTitle: "Student Opportunities",
  bannerSubHeader:"Become a Community Ambassador",
  bannerButtonText:"Apply Now",
  backgroundImage: bannerImage,
};

let FAQs = [
  {
    Question: "How long does the application process take?",
    Answer:
      "By volunteering with CAP you get to be exposed to many STEAM workforce development skills, and when you are exposed to this we hope that your first reaction is to want to show it to the rest of your peers and educators. ",
  },
  { Question: "How do I know if I’m a good fit?", Answer: "Lorem Ipsum" },
  { Question: "What is the time commitment?", Answer: "Lorem Ipsum" },
  { Question: "How am I helping my community?", Answer: "Lorem Ipsum" },
  { Question: "Can you volunteer anywhere in the US?", Answer: "Lorem Ipsum" },
  { Question: "What kind of volunteer work is done?", Answer: "Lorem Ipsum" },
  { Question: "What skills am I expected to have?", Answer: "Lorem Ipsum" },
  {
    Question: "Is there a certain time in the year I have to apply?",
    Answer: "Lorem Ipsum",
  },
];

class VolunteerPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Banner info={bannerInfo} breadCrumbText={breadText}/>
        <div className={styles.volunteerPageContainer}>
          {/* Ambassador Section */}
          <div className={styles.volunteerPageAmbassBox}>
            <div className={styles.volunteerPageAmbassBoxTitle}>
              <p>What is a Community Ambassador?</p>
              <img src={purpleRect} alt="purple rectangle" />
            </div>
            <div className={styles.volunteerPageAmbassBoxSummary}>
              <p>
                Community Ambassador Program or CAP is what gives We Connect the
                Dots life to flourish and spread the love and joy of learning
                and teaching about STEAM fields. Students will take part in
                planning conferences, designing programs, recruiting volunteers,
                learning and teaching a variety of educational material and many
                other activities centered around the goals of the organization
              </p>
            </div>
          </div>
          {/*What Will You Gain Section  */}
          <div className={styles.volunteerPageGainBox}>
            <div className={styles.volunteerPageGreenEllipseDiv}>
              <img src={greenEllipse} alt="green ellipse" />
            </div>
            <div className={styles.volunteerPageOrangeEllipseDiv}>
              <img src={orangeEllipse} alt="orange ellipse" />
            </div>
            <div className={styles.volunteerPageBlueDotSphere}>
              <img src={blueDotSphere} alt="blue dot sphere" />
            </div>
            <div className={styles.volunteerPageRedDotSphere}>
              <img src={redDotSphere} alt="red dot sphere" />
            </div>

            <div className={styles.volunteerPageGainInnerCard}>
              <div className={styles.volunteerPageGainCardTitle}>
                <p>What You Will Gain</p>
                <img src={purpleRect} alt="purple rectangle" />
              </div>
              <div className={styles.volunteerPageGainCardUlDiv}>
                <div className={styles.volunteerPageUl}>
                  <ul>
                    <li>Technical problem solving skills</li>
                    <li>Team building</li>
                    <li>Professional leadership</li>
                    <li>College recommendation letter</li>
                  </ul>
                </div>
                <div className={styles.volunteerPageUl}>
                  <ul>
                    <li>
                      Workplace learning experience with an industry expert
                    </li>
                    <li>A career portfolio</li>
                    <li>21st century STEAM workforce skills</li>
                    <li>Professional certifications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Program Requirements Section */}
          <div className={styles.volunteerPageRequiredBox}>
            <div className={styles.volunteerPageRequiredTitle}>
              <p>Program Requirements</p>
              <img src={purpleRect} alt="purple rectangle" />
            </div>
            <p>Students must meet all requirements</p>
            <div className={styles.volunteerPageRequiredUlDiv}>
              <ul>
                <li>
                  Be between 14 and 22 years of age in a high school or college
                  with a good academic standing (3.0 GPA or 83 min.){" "}
                </li>
                <li>
                  Complete application process, short essay, and submit two
                  letters of reference from an instructor or administrator at
                  his/her/their school
                </li>
                <li>
                  Commit to attending one WCTD conference as a support staff
                  volunteer, mentor, or event lead (one-week or two-week
                  program)
                </li>
                <li>
                  Commit to a minimum of 16 volunteer hours per month, 100 hours
                  overall annually, including regular monthly meetings
                </li>
                <li>
                  Have a passionate desire to be a leader, mentor, and guide to
                  other students. Interviews with established ambassadors and
                  WCTD Program Manager will determine final eligibility.
                </li>
              </ul>
            </div>
          </div>
          {/* Meet Our CAP ALumni Section */}
          <div className={styles.volunteerPageCapAlumniBox}>
            <div className={styles.volunteerPageDGreenEllipse}>
              <img src={darkGreenEllipse} alt="dark green ellipse" />
            </div>
            <div className={styles.volunteerPageSmRedDotEllipse}>
              <img src={smallRedDotSphere} alt="smaller red dot sphere" />
            </div>
            <div className={styles.volunteerPageCapAlumniTitle}>
              <p>Meet Our CAP Alumni</p>
              <img src={purpleRect} alt="purple rectangle" />
            </div>
            <div className={styles.volunteerPageCapCarley}>
              <div className={styles.volunteerPageCapLeft}>
                <img
                  src={caeleyLooney}
                  alt="Senior Community Ambassador Carley Looney"
                />
                <p>Caeley Looney</p>
                <p>Senior Community Ambassador</p>
              </div>
              <div className={styles.volunteerPageCapRight}>
                <p>
                  Caeley Looney joined WCTD in 2013. While attending
                  Embry-Riddle Aeronautical University in Florida, where she
                  studies Aerospace Engineering and Computer Science, Caeley
                  worked around a demanding class schedule, a litany of
                  important exams, and all the pressing challenges of college
                  life in order to help WCTD plan its conferences and Mobile App
                  Development Program. Caeley is passionate about 3D Printing
                  and the future applications of 3D printing tech, so when she
                  told WCTD that she wanted to attend the Inside 3D Printing
                  Conference in NYC, we were more than happy to accommodate her
                  request. Caeley has worked very hard to make WCTD what it is
                  today, and through her contributions we will be able to give
                  the same opportunity to other students in the future. Please
                  check out Caeley's (C) post conference interview with our
                  program manager, Stephen Sobierajski (S), below:
                </p>
              </div>
            </div>
            <div className={styles.volunteerPageQATitle}>
              <p>Q&A Interview with Caeley</p>
            </div>
            <div className={styles.volunteerPageQATopDiv}>
              <div className={styles.volunteerPageSmOrangeEllipse}>
                <img src={smallOrangeEllipse} alt="smaller orange ellipse" />
              </div>
              <div className={styles.volunteerPurpleEllipse}>
                <img src={purpleEllipse} alt="purple dot ellipse" />
              </div>
              <div className={styles.volunteerBrightRdEllipse}>
                <img src={brightRdEllipse} alt="bright red ellipse" />
              </div>
              <div className={styles.volunteerRightPurpleSphere}>
                <img src={rightPurpleSphere} alt="right purple dot sphere" />
              </div>
              <div className={styles.volunteerPageQADiv}>
                <p className={styles.volunteerPageQAQuestion}>
                  S: What was the community ambassador program able to do for
                  you? Where did it take you?
                </p>
                <p className={styles.volunteerPageQAAnswer}>
                  C: I attended the Inside 3D Printing Conference at the Javit's
                  Center in NYC. WCTD was able to provide me with a once in a
                  lifetime opportunity to see the leading edge of 3D printing
                  technology. It was really an amazing experience. I got to see
                  and experience technology that is not even available to the
                  public yet, but will be revolutionary when it emerges. The
                  things the industry has upcoming are going to be amazing.
                </p>
                <p className={styles.volunteerPageQAQuestion}>
                  S: What was accomplished by fulfilling your goal? What did you
                  get out of the experience?
                </p>
                <p className={styles.volunteerPageQAAnswer}>
                  C: I got to network with some really important people in the
                  3D printing industry and develop content for the Creating
                  STEAM Conference in July 2015. I think I accomplished a lot by
                  networking. I met the CEO of Makerbot, who agreed to assist in
                  helping us craft a curriculum for teaching 3D printing tech to
                  other students, and got to meet executives from a lot of other
                  companies, as well. I was also able to assist WCTD by learning
                  more, and being able to share it with other students. I think
                  it will aide in drafting curriculum for future programs.
                </p>
                <p className={styles.volunteerPageQAQuestion}>
                  S: You worked really hard to get to that conference. What was
                  the one thing you were most pleased to have done? What are you
                  most proud of?
                </p>
                <p className={styles.volunteerPageQAAnswer}>
                  C: I'd say that networking was the best part of the
                  experience. 3D printing is going to be a really important part
                  of our future and I was with some of the leading edge
                  innovators in existence today. It was very exciting. I gained
                  a lot of valuable insight on what is coming in the future, and
                  how people are bringing 3D printing into their business,
                  because it was not just people who make 3D printers who
                  attended, but also people who are using 3D printing to expand
                  their businesses and expand the tech through innovation.
                </p>
                <p className={styles.volunteerPageQAQuestion}>
                  S: Now that you have had this opportunity, how do you plan to
                  engage with other students and peers to teach them about what
                  you have learned?
                </p>
                <p className={styles.volunteerPageQAAnswer}>
                  C: WCTD's will be the best way for me to sort out all the info
                  and expand on it in the community. I'll be presenting at the
                  conference, writing about the experience on the blog, talking
                  to students, and we have a radio interview set up in a few
                  weeks where I will be talking about the conference and WCTD.
                  People need to understand how much 3D printing is going to be
                  impacting their lives. Companies are making medicines and
                  medical treatments, foods, consumer products, all with 3D
                  printing technology. I can't wait to tell other people about
                  what I saw and learned.
                </p>
                <p className={styles.volunteerPageQAQuestion}>
                  What was the most exciting exhibit or speech you witnessed at
                  the conference?
                </p>
                <p className={styles.volunteerPageQAAnswer}>
                  C: I really "geeked out" seeing all the technology in action.
                  I don't think I could point to one exhibit because they were
                  all so interesting. It was great to see how all the different
                  machines had differing capabilities but were accomplishing
                  things along similar lines.
                </p>
                <p className={styles.volunteerPageQAQuestion}>
                  S: Is there anything you would do differently if you could go
                  back again?
                </p>
                <p className={styles.volunteerPageQAAnswer}>
                  C: I wish I had spent more time in the exhibit halls. I spent
                  a lot of time listening to the speakers, which were great, but
                  I would like to have seen more of the exhibits and the
                  machines in action.
                </p>
                <p className={styles.volunteerPageQAQuestion}>
                  S: In your opinion, how can the Community Ambassador Program
                  be beneficial to other students in the future?
                </p>
                <p className={styles.volunteerPageQAAnswer}>
                  C: The Community Ambassador Program can provide once in a
                  lifetime experiences to lots of other students. Students
                  should pursue their interests and this program can provide
                  that. Not just 3D printing but anything that a student wants
                  to research and learn more about. There are lots of
                  opportunities here.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.volunteerPageFAQCard}>
          <FAQCard FAQS={FAQs}/>
        </div>
      </>
    );
  }
}

export default VolunteerPage;
