import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Indust.module.css";

const Indust = () => {
  return (
    <div className={styles.indust}>
      <div className={styles.industInner}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameChild} />
        </div>
      </div>
      <section className={styles.industChild}>
        <div className={styles.frameParent}>
          <FrameComponent1 />
          <div className={styles.nextStep}>Next Step</div>
        </div>
      </section>
      <FrameComponent />
    </div>
  );
};

export default Indust;
