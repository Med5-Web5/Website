import { FunctionComponent } from 'react';
import styles from './Container.module.css';
import { Link } from 'react-router-dom';

const Description = () => {
  	return (
    		<div className={styles.container1}>
      			<div className={styles.checkupContainer1}>
        				<div className={styles.drBrentfordJuniorParent}>
          					<b className={styles.drBrentfordJunior1}>Dr Brentford Junior</b>
          					<div className={styles.physician}>Physician</div>
          					<div className={styles.fixedWidthFixedHeightSec1} />
        				</div>
        				<div className={styles.prioritizeYourWellBeingContainer}>
          					<p className={styles.prioritizeYourWellBeing1}>Prioritize your well-being with a 3-minute self-guided health checkup on Med 5. Gain valuable insights into potential causes of your symptoms and receive prescription from your doctor.</p>
        				</div>
        				<div className={styles.buttonMdSecParent}>
          					<Link to='/dr/gender' className={styles.buttonMdSec1}>
            						<div className={styles.btnText1}>Begin Checkup</div>
          					</Link>
          					<div className={styles.theInformationYou1}>{`The information you give is safe and won’t be shared: `}</div>
        				</div>
      			</div>
      			<img className={styles.containerChild} alt="" src="Rectangle 87.png" />
    		</div>);
};

export default Description;
