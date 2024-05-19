
import FrameComponent from '../FrameComponent'
import styles from './MacBookPro1631.module.css'
import  MainFRAME from '../MainFRAME'

const MacBookPro1631 = () => {
  return (
    <div className={styles.new}>
      <div className={styles.newItem} />
      <MainFRAME />
      <div className={styles.brandsWorkingWithUsWrapper}>
        <h2 className={styles.brandsWorkingWith}>Brands Working With Us</h2>
      </div>
      <FrameComponent />
    </div>
  );
};

export default MacBookPro1631;
