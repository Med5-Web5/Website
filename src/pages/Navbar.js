import { FunctionComponent } from 'react';
import {Link } from 'react-router-dom'
import styles from './NavbarStyle2NavbarLight.module.css';


const NavbarStyle2NavbarLight = () => {
  	return (
    		<div className={styles.navbarStyle2NavbarLight}>
      			<div className={styles.navbarBrandSec}>
        				<Link to='/'><b className={styles.med5}>
          					<span>Med</span>
          					<span className={styles.span}>5</span>
        				</b>
                        </Link>
      			</div>
      			<div className={styles.navbarToggler}>
        				<div className={styles.navbarTogglerIcon1} />
      			</div>
      			<div className={styles.collapseNavbarCollapse}>
        				<div className={styles.navbarNav}>
          					<div className={styles.navItemSec}>
            						<div className={styles.a1} />
          					</div>
          					<div className={styles.navItemSec1}>
                              <button type='submit'>	<div className={styles.buttonbtnprimaryColor}>
                                        
              							<b className={styles.btnText1}>Connect Wallet</b>
              							<img className={styles.icnArrowRightIcnXs1} alt="" src="icn arrow-right .icn-xs.png" />
                                          
            						</div>
                                    </button>
          					</div>
        				</div>
        				<div className={styles.frameParent}>
          					<div className={styles.homeWrapper}>
            						<b className={styles.home}>Home</b>
          					</div>
          					<div className={styles.webDoctorWrapper}>
            						<b className={styles.home}>Web Doctor</b>
          					</div>
          					<div className={styles.homeWrapper}>
            						<b className={styles.home}>Prescription</b>
          					</div>
          					<div className={styles.homeWrapper}>
            						<b className={styles.home}>Register as a doctor</b>
          					</div>
        				</div>
      			</div>
    		</div>);
};

export default NavbarStyle2NavbarLight;
