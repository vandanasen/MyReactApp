import React,{Component} from"react";
import blogImg from "../../../Assets/singleBlogImages/orangeTeacher.png";
import blogImg2 from "../../../Assets/singleBlogImages/studentGroup.png";
import singleBlogBanner from "../../../Assets/bannerImages/singleBlogBanner.png";
import "./SingleBlogPage.css";

import Banner from "../../Global/BannerComponent/Banner";

const breadText = ["Home", "About Us", "Blog", "code-a-thon Interview..."];
const bannerInfo = {
  bannerTitle: "Code-a-thon Interview with Jennifer Hoff (Pennsylvania Site Lead - Part 1) ",
  backgroundImage: singleBlogBanner,
}
class SingleBlogPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Banner info={bannerInfo} breadCrumbText={breadText} />
        <div className="singleBlogContainer">
          <div className="singleBlogButtonDiv">
            <button>
              <h5>Listen to Podcast</h5>
            </button>
          </div>
          <div className="singleBlogContent">
            <div className = "singleBlogImage">
              <img className = "singleBlogImage" src={blogImg} alt="teacher" />
            </div>
            <p>Why was the Code-A-Thon established?</p> 
            <p>I started this event because I saw a growing need for students to embrace STEAM-related careers. 
            The future is technology that requires higher-level thinking skills for the next generation workforce. 
            However, we're not filling these jobs. Many students' perceptions of what a developer or coder does are false. 
            Students and industries believe these positions require someone to be brilliant in science and math, 
            which is an incorrect representation of the opportunities out there for kids. I wanted to show students 
            the enormous amount of opportunities that exist for them if they get rid of the fear of the computer science field. 
            We Connect The Dots hosts a Back To School Code-A-Thon every year and invites schools to become host-sites to 
            introduce STEAM-related academic and career opportunities to students.</p>
            <p>I interviewed Jennifer Hoff, one of our site's lead representatives for our annual Code-A-Thon. 
            We discussed the overall program, its impact on our students and communities, and our upcoming January 2020 Code-A-Thon.</p> 
            <p>Jennifer Hoff is the founder of Hoff Communications, an advertising and marketing firm with a business-to-business 
            focus on the printing and publishing industries. She is also a schoolboard member for the William Penn schoolboard 
            district in Darby, Pennsylvania. Jennifer signed up William Penn School District as a host-site for the Code-A-Thon 
            and has been with us since we began the program 5 years ago. Below is Part One of a Two-part blog series featuring 
            an interview with Jennifer.</p>
            <div className = "singleBlogImage2">
              <img src={blogImg2} alt="class" />
            </div>
            <p>What is the difference between a Code-A-Thon and a Hackathon?</p>
            <p>In hackathons, students have already created an interest in coding and participate in this type of event to go 
            further using this unique skillset. A Code-A-Thon is targeted for students who've had little to no experience with coding.</p>
            <p>What brought Jennifer Hoff to bring the Code-A-Thon to the William Penn School District?</p>
            <p>"The William Penn School District is probably one of the most spirited but less financially resourced district in 
            the country,"" Jennifer said. STEAM careers are increasing rapidly, and she felt that jobs in these fields would be 
            perfect opportunities for the students in her district. "But unless we show them the way, they're [the students] thinking 
            that these jobs aren't for them. That's not correct."</p>
            <p>They're not just coding...</p>
            <p>Jennifer teaches her students necessary soft skills such as collaborating with one another, communicating productively 
            and positively, and thinking critically. Presentations skills are also essential skills. The quality of student presentations 
            over the years has grown dramatically as they gain the experience each year to improve. "Many students lack confidence 
            and this whole weekend is a huge confidence builder for them", Jennifer said. "In four years, the increase in quality of 
            presentations, compared to what they were five years ago, is off the charts! We've had a bunch of students do a rap presentation. 
            That's exactly what we want to promote: be your individual selves but show your aptitudes and be open to new skills."
            <br />She also demonstrated how other skills that students may not think would be related to coding can be utilized. For instance, 
            if someone has an artistic background, she showed how the industries would need someone like that in the tech field. 
            I want to immerse them in the program so they can get excited and want to take next steps.
            <br />Learn how Code-A-Thon made an impact in William Penn School District in our next post!</p> 
          </div>
          <div className="singleBlogNextButton">
            <button>
              <div>Next Post</div>
            </button>
          </div>
          <div className="singleBlogAllLink">
            <a href="Blog.js">
              <div>View all Blog Posts</div>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default SingleBlogPage;
