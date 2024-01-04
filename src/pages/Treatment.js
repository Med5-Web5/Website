import { FunctionComponent } from 'react';
import styles from './Treatment.module.css';
import { Link } from 'react-router-dom';

const Treatment = () => {
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
              							<div className={styles.ellipseDiv} />
              							<div className={styles.div2}>3</div>
            						</div>
          					</div>
          					<div className={styles.groupWrapper1}>
            						<div className={styles.groupWrapper}>
              							<div className={styles.groupChild4} />
              							<div className={styles.div3}>4</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.frameParent}>
        				<div className={styles.treatmentWrapper}>
          					<b className={styles.treatment}>Treatment</b>
        				</div>
        				<div className={styles.frameGroup}>
          					<div className={styles.frameWrapper}>
            						<div className={styles.frameDiv}>
                                    <input type="radio" value="Acute" />
              							<div className={styles.acute}>{`Acute `}</div>
            						</div>
          					</div>
          					<div className={styles.frameWrapper1}>
            						<div className={styles.groupParent1}>
                                    <input type="radio" value="Preventive" />
              							<div className={styles.preventive}>Preventive</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.buttonMdSecParent}>
                        <Link to='/dr/gender/weight/'>
                            <button className={styles.buttonMdSec2}>
            						<div className={styles.btnText2}>Back</div>
          					</button>
                            </Link>
                            <Link to='/dr/gender/weight/treatment/treatments'>
          					<button className={styles.buttonMdSec3}>
            						<div className={styles.btnText2}>Continue</div>
          					</button>
                              </Link>
        				</div>
      			</div>
    		</div>);
};

export default Treatment;
