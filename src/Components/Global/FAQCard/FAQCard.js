import React, { Component } from "react";
import "./FAQCard.css";

// let FAQs = [
//     {Question:"What is the teacher/ assistant to student ratio?",Answer:"Teacher to student ratio is 1:8"},
//     {Question:"What platform are students using during the online sessions?",Answer:"The platform we use is Microsoft 365"},
//     {Question:"Who is teaching the course?",Answer:"CAP Students with their Advisor and the Founder of We Connect The Dots."},
//     {Question:"How can students apply for scholarships?",Answer:"When scholarships are available, they will be posted online. These scholarships are dependent on donation and the amount od sponsorships we receive."},
//     {Question:"What equipments do students need to have access to? If they don’t have a computer, are there ways to get that funded?",Answer:"If students do not have a computer, dependent on the location, they are able to borrow one from us. We do not fund computers for students.    "},
//     {Question:"Can I drop in and see how my student is doing?",Answer:"Parents are only allowed to drop by at the end for student presentations."},

// ]

class FAQCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  QandA = () => {
    let FAQ = [];
    console.log(this.props);
    for (let i = 0; i < this.props.FAQS.length; i++) {
      const element = this.props.FAQS[i];
      FAQ.push(
        <div className="FAQQuestion" key={i}>
          {element.Question}
          <div className="FAQAnswer">{element.Answer}</div>
        </div>
      );
    }
    return FAQ;
  };
  render() {
    return (
      <div className="FAQCard">
        <div className="FAQHeader"> FAQ </div>

        {this.QandA()}
      </div>
    );
  }
}

export default FAQCard;
