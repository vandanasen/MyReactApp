import React, {Component} from "react";
import styles from "./BlogCard.module.css";
import blogCardImg from "../../../Assets/blogCardImages/blogcard1.png";
import arrowIcon from "../../../Assets/blogCardImages/arrow-icon.svg";



class BlogCard extends Component {
	render () { 
    return (
		<>
			<div className={styles.blogCardBox}>
				<div className={styles.blogCardImgDiv}>
					<img
						src={
							this.props.cardInfo.cardImage && this.props.cardInfo
								? this.props.cardInfo.cardImage
								: blogCardImg
						}
						alt="students working"
					/>
				</div>
				<div className={styles.blogCardBottom}>
					<div className={styles.blogCardDate}>
						{this.props.cardInfo.cardDate && this.props.cardInfo
							? this.props.cardInfo.cardDate
							: "date of the event"}
					</div>
					<div className={styles.blogCardTitle}>
						{this.props.cardInfo.cardTitle && this.props.cardInfo
							? this.props.cardInfo.cardTitle
							: "Title of the event"}
					</div>
					<button className={styles.blogCardRead}>
						<p>read</p>
						<img style={{width: '50px'}} src={arrowIcon} alt="arrow icon" />
					</button>
				</div>
			</div>
		</>
    );
  };
};

export default BlogCard;
