import { FunctionComponent } from 'react';
import styles from './Gender.module.css';
import { Link } from 'react-router-dom';

const Gender = () => {
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
            						<div className={styles.ellipseParent}>
              							<div className={styles.ellipseDiv} />
              							<div className={styles.div}>1</div>
            						</div>
          					</div>
          					<div className={styles.groupFrame}>
            						<div className={styles.ellipseParent}>
              							<div className={styles.groupChild2} />
              							<div className={styles.div1}>2</div>
            						</div>
          					</div>
          					<div className={styles.groupDiv}>
            						<div className={styles.ellipseParent}>
              							<div className={styles.groupChild2} />
              							<div className={styles.div2}>3</div>
            						</div>
          					</div>
          					<div className={styles.groupWrapper1}>
            						<div className={styles.ellipseParent}>
              							<div className={styles.groupChild2} />
              							<div className={styles.div2}>4</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.frameParent}>
        				<div className={styles.genderWrapper}>
          					<b className={styles.gender}>{`Gender `}</b>
        				</div>
        				<div className={styles.frameGroup}>
          					<div className={styles.frameWrapper}>
            						<div className={styles.frameDiv}>
                                    
            <input type="radio" value="Female" />
            <div className={styles.female}>{`Female `}</div>
          
              							
            						</div>
          					</div>
          					<div className={styles.frameWrapper}>
            						<div className={styles.frameDiv}>
            <input type="radio" value="option2" />
            <div className={styles.female}>Male</div>
          
              							
            						</div>
          					</div>
        				</div>
        				<div className={styles.buttonMdSecParent}>
          					<Link to='/dr/'><button  className={styles.buttonMdSec2}>
            						<div className={styles.btnText2}>Cancel</div>
          					</button>
                              </Link>
                             < Link to='/dr/gender/weight'>
          					<button className={styles.buttonMdSec2}>
            						<div className={styles.btnText2}>Continue</div>
          					</button>
                            </Link>
        				</div>
      			</div>
    		</div>);
};

export default Gender;
