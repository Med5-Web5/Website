import { FunctionComponent } from 'react';
import styles from './Symptoms.module.css';
import { Link, TextField } from 'react-router-dom';

const Symptoms = () => {
  	return (
    		<div className={styles.groupParent}>
      			<div className={styles.rectangleParent}>
        				<div className={styles.groupChild} />
        				<div className={styles.rectangleGroup}>
          					<div className={styles.groupItem} />
          					<div className={styles.groupInner} />
          					<div className={styles.rectangleDiv} />
          					<img className={styles.rectangleIcon} alt="" src="Rectangle 4357.png" />
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
              							<div className={styles.ellipseDiv} />
              							<div className={styles.div3}>4</div>
            						</div>
          					</div>
        				</div>
      			</div>
      			<div className={styles.frameParent}>
        				<div className={styles.symptomsWrapper}>
          					<b className={styles.symptoms}>Symptoms</b>
        				</div>
        				<div className={styles.whatSymptomsAre1}>What symptoms are you experiencing?</div>
          					<div className={styles.searchDefaultWrapper}>
            						<div className={styles.searchDefault}>
              							<div className={styles.searchDefault}>
                								<div className={styles.searchDefault}>
                  									<div >
                                                      <input className={styles.searchEgHeadacheParent}
   type="text"
   placeholder="Search here"
  />
                    										
                    										<img className={styles.shape227Icon1} alt="" src="Shape 227.png" />
                  									</div>
                								</div>
              							</div>
            						</div>
          					</div>
          					<div className={styles.buttonMdSecParent}>
                              <Link to='/dr/gender/weight/treatment/treatments/'>
            						<button className={styles.buttonMdSec2}>
              							<div className={styles.btnText2}>Back</div>
            						</button>
                                    </Link>
                                    <Link to='/dr/gender/weight/treatment/treatments/symptoms/final'>
            						<button className={styles.buttonMdSec3}>
              							<div className={styles.btnText2}>Continue</div>
            						</button>
                                    </Link>
          					</div>
          					</div>
          					</div>);
        				};
        				
        				export default Symptoms;
        				