import { FunctionComponent } from 'react';
import styles from './Final.module.css';


const Final = () => {
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
      			<div className={styles.ddfb0f7f2c154b68Adf82014f2Parent}>
        				<img className={styles.ddfb0f7f2c154b68Adf82014f2Icon} alt="" src="ddfb0f7f-2c15-4b68-adf8-2014f26063eb 1.png" />
        				<div className={styles.buttonMdSecParent}>
          					<div className={styles.buttonMdSec2}>
            						<div className={styles.btnText2}>Go back to search</div>
          					</div>
          					<div className={styles.buttonMdSec3}>
            						<div className={styles.btnText2}>Go to prescription</div>
          					</div>
        				</div>
        				<b className={styles.yourInputsHave1}>Your inputs have been sent!</b>
      			</div>
    		</div>);
};

export default Final;
