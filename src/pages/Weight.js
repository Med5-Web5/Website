import { FunctionComponent } from 'react';
import styles from './Weight.module.css';
import { Link } from 'react-router-dom';

const Weight = () => {
  	return (
    		<div className={styles.groupParent}>
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupChild} />
        				<div className={styles.rectangleGroup}>
          					<div className={styles.groupItem} />
          					<div className={styles.groupInner} />
          					<div className={styles.rectangleDiv} />
          					<div className={styles.groupChild1} />
          					<div className={styles.groupWrapper}>
            						<div className={styles.groupWrapper}>
              							<div className={styles.ellipseDiv} />
              							<div className={styles.div}>1</div>
            						</div>
          					</div>
          					<div className={styles.groupFrame}>
            						<div className={styles.groupWrapper}>
              							<div className={styles.ellipseDiv} />
              							<div className={styles.div1}>2</div>
            						</div>
          					</div>
          					<div className={styles.groupDiv}>
            						<div className={styles.groupWrapper}>
              							<div className={styles.groupChild3} />
              							<div className={styles.div2}>3</div>
            						</div>
          					</div>
          					<div className={styles.groupWrapper1}>
            						<div className={styles.groupWrapper}>
              							<div className={styles.groupChild3} />
              							<div className={styles.div2}>4</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.frameParent}>
        				<div className={styles.weightWrapper}>
          					<b className={styles.weight}>Weight</b>
        				</div>
        				<div className={styles.frameGroup}>
          					<div className={styles.frameDiv}>
            						<div className={styles.groupParent1}>
              							<input type="radio" value="20 to 40 kg | 44 to 88 lbs" />
              							<div className={styles.to40Kg1}>20 to 40 kg | 44 to 88 lbs</div>
            						</div>
            						<div className={styles.groupParent2}>
                                    <input type="radio" value="40 to 60 kg | 88 to 132 lbs" />
              							<div className={styles.to60Kg88To132LbsWrapper}>
                								<div className={styles.to60Kg1}>40 to 60 kg | 88 to 132 lbs</div>
              							</div>
            						</div>
            						<div className={styles.groupParent1}>
                                    <input type="radio" value="60 to 80 kg | 132 to 176 lbs<" />
              							<div className={styles.to40Kg1}>60 to 80 kg | 132 to 176 lbs</div>
            						</div>
          					</div>
          					<div className={styles.frameParent1}>
            						<div className={styles.groupParent4}>
                                    <input type="radio" value="80 to 100 kg | 176 to 220 lbs<" />
              							<div className={styles.to100Kg1}>80 to 100 kg | 176 to 220 lbs</div>
            						</div>
            						<div className={styles.groupParent5}>
                                    <input type="radio" value="100 to 120 kg | 220 to 264 lbs" />
              							<div className={styles.to120Kg1}>100 to 120 kg | 220 to 264 lbs</div>
            						</div>
            						<div className={styles.groupParent6}>
                                    <input type="radio" value="more than 120kg | 220 to 264 lbs" />
              							<div className={styles.moreThan120kg1}>more than 120kg | 220 to 264 lbs</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.buttonMdSecParent}>
                            <Link to='/dr/gender'>
          					<button className={styles.buttonMdSec2}>
            						<div className={styles.btnText2}>Back</div>
          					</button>
                              </Link>
                              <Link to='/dr/gender/weight/treatment'>
          					<button className={styles.buttonMdSec3}>
            						<div className={styles.btnText2}>Continue</div>
          					</button>
                              </Link>
        				</div>
      			</div>
    		</div>);
};

export default Weight;
