import styles from "./Frame.module.css";
import { Link } from "react-router-dom";
const Frame = () => {
  return (
    <div className={styles.mac4}>
      <img className={styles.mac4Child} alt="" src="/rectangle-1.svg" />
      <div className={styles.mac4Item} />
      <div className={styles.mac4Inner} />
      <div className={styles.frameDiv} />
      <img className={styles.searchIcon} alt="" src="/search.svg" />
      <div className={styles.homeParent}>
        <div className={styles.home}><Link to='/' style={{color:'white',textDecoration:'none'}}> Home</Link></div>
        <div className={styles.aboutUs}> <Link to='/aboutUs' style={{color:'white',textDecoration:'none'}}>About us</Link></div>
        <div className={styles.ourBrands}><Link to='/ourBrands' style={{color:'white',textDecoration:'none'}}>Our Brands</Link></div>
        <div className={styles.gallery}><Link to='/gallery' style={{color:'white',textDecoration:'none'}}>Gallery</Link></div>
        <div className={styles.needFranchise}><Link to='/Need-franchise' style={{color:'white',textDecoration:'none'}}>Need Franchise</Link></div>
        <div className={styles.contactUs}><Link to='/contact-Us' style={{color:'white',textDecoration:'none'}}>Contact us</Link></div>
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <div className={styles.haveProjectWrapper}>
          <div className={styles.haveProject}>Have Project</div>
        </div>
      </div>
      <img
        className={styles.croppedBw311Icon}
        alt=""
        src="/croppedbw31-11@2x.png"
      />
    </div>
  );
};

export default Frame;
