import { FunctionComponent } from 'react';
import styles from './SearchModule.module.css';


const SearchModule = () => {
  	return (
    		<div className={styles.searchModule}>
      			<div className={styles.searchComponents}>
        				<div className={styles.searchBox}>
          					<img className={styles.searchIcon1} alt="" src="Search icon.png" />
                            <input type='text' className={styles.streetPhotography} />
        				</div>
                        <select className={styles.dropDown}>

       <option value="fruit" className={styles.categorySelected}>1 category selected</option>
     </select>
        				
        				<button type='submit' className={styles.button}>
          					<div className={styles.search}>Search</div>
        				</button>
      			</div>
      			<div className={styles.tags1} />
    		</div>);
};

export default SearchModule;
