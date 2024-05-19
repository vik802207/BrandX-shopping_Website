import { FunctionComponent } from "react";
import styles from "./Frame1.module.css";
import { Link } from "react-router-dom";

const Frame1 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.brandwalaWrapper}>
              <div className={styles.brandwala}>BrandX</div>
            </div>
            <div className={styles.brandsInEveryPocketWrapper}>
              <div className={styles.brandsInEvery}>Brands in Every Pocket</div>
            </div>
            <div className={styles.locationParent}>
              <img className={styles.locationIcon} alt="" src="/location.svg" />
              <div className={styles.brandsInEvery}>
                <p
                  className={styles.s12AzadNagar}
                >{`S-12 Azad Nagar, Near `}</p>
                <p
                  className={styles.s12AzadNagar}
                >{`Central Academy School, `}</p>
                <p className={styles.s12AzadNagar}>{`Behind Ram Dham `}</p>
                <p className={styles.s12AzadNagar}>Bhilwara, Rajasthan</p>
                <p className={styles.s12AzadNagar}> (311001)</p>
              </div>
            </div>
            <div className={styles.callParent}>
              <img className={styles.callIcon} alt="" src="/call.svg" />
              <div className={styles.brandsInEvery}>(+91) 8838487918</div>
            </div>
            <div className={styles.callParent}>
            <img className={styles.callIcon} alt="" src="/telegram.svg" />
            <div className={styles.brandsInEvery}>brandXindiaofficial@gmail.com</div>
          </div>

          </div>
          <div className={styles.quickLinksParent}>
            <div className={styles.quickLinks}>Quick Links</div>
            <div className={styles.frameChild} />
            <div className={styles.home}><Link to='/' style={{textDecoration:'none',color:'var(--color-gray-1001)'}}> Home</Link> </div>
            <div className={styles.home}><Link to='/aboutUs' style={{textDecoration:'none',color:'var(--color-gray-1001)'}}>About Us</Link></div>
            <div className={styles.home}><Link to='/ourBrands' style={{textDecoration:'none',color:'var(--color-gray-1001)'}}>Our Brands</Link></div>
            <div className={styles.home}><Link to='/gallery' style={{textDecoration:'none',color:'var(--color-gray-1001)'}}>Gallery</Link></div>
            <div className={styles.home}><Link to='/Need-franchise' style={{textDecoration:'none',color:'var(--color-gray-1001)'}}>Need Franchise</Link></div>
            <div className={styles.home}><Link to='/contact-Us' style={{textDecoration:'none',color:'var(--color-gray-1001)'}}>Contacts</Link></div>
            <div className={styles.privacyPolicy}><Link to='/privacy-policy' style={{textDecoration:'none',color:'var(--color-gray-1001)'}}>Privacy Policy</Link></div>
          </div>
        </div>
        <div className={styles.frameItem} />
        <div className={styles.copyright2022BrandwalaAlWrapper}>
          <div className={styles.brandsInEvery}>
            <p className={styles.s12AzadNagar}>
              COPYRIGHT © 2022 BRANDX. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
