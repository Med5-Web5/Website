import { FunctionComponent } from 'react';
import styles from './Results.module.css';


const Results = () => {
  	return (
    		<div className={styles.results}>
      			<div className={styles.articles}>
        				<div className={styles.article1}>
          					<div className={styles.selected4} />
          					<img className={styles.featuredImageIcon} alt="" src="Featured image.png" />
          					<div className={styles.drBrentfordJuniorParent}>
            						<div className={styles.drBrentfordJunior1}>Dr Brentford Junior</div>
            						<div className={styles.physicianParent}>
              							<div className={styles.physician}>Physician</div>
              							<div className={styles.frameChild} />
              							<div className={styles.february1420231}>February 14,  2023</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.article1}>
          					<div className={styles.selected4} />
          					<img className={styles.featuredImageIcon} alt="" src="Featured image.png" />
          					<div className={styles.drBrentfordJuniorParent}>
            						<div className={styles.drBrentfordJunior1}>Dr Sarah Hammil</div>
            						<div className={styles.physicianParent}>
              							<div className={styles.physician}>Physician</div>
              							<div className={styles.frameChild} />
              							<div className={styles.physician}>January 13, 2022</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.article1}>
          					<div className={styles.selected4} />
          					<img className={styles.featuredImageIcon} alt="" src="Featured image.png" />
          					<div className={styles.drBrentfordJuniorParent}>
            						<div className={styles.drBrentfordJunior1}>Dr Sirius Lancaster</div>
            						<div className={styles.physicianParent}>
              							<div className={styles.physician}>Pharm Dr</div>
              							<div className={styles.frameChild} />
              							<div className={styles.physician}>January 13, 2020</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.article4}>
          					<div className={styles.selected4} />
          					<div className={styles.icon1} />
          					<img className={styles.featuredImageIcon} alt="" src="Featured image.png" />
          					<div className={styles.drBrentfordJuniorParent}>
            						<div className={styles.drBrentfordJunior1}>Dr Marcus Robin</div>
            						<div className={styles.physicianParent}>
              							<div className={styles.physician}>Dentist</div>
              							<div className={styles.frameChild} />
              							<div className={styles.february1420231}>June 12,  2019</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.footer}>
        				<div className={styles.footerChild} />
        				<div className={styles.link}>
          					<div className={styles.showMeMore1}>Show me more results</div>
          					<img className={styles.arrow1Stroke1} alt="" src="Arrow 1 (Stroke).png" />
        				</div>
        				<div className={styles.divider1}>
          					<div className={styles.divider2} />
        				</div>
        				<div className={styles.results1}>531 results</div>
      			</div>
    		</div>);
};

export default Results;
