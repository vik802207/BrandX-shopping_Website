import { FunctionComponent } from "react";
import styles from "./ContentBoxes.module.css";

const Six = () => {
  return (
    <section className={styles.contentBoxes}>
      <div className={styles.contentBoxesInner}>
        <div className={styles.frameWrapper}>
          <div className={styles.rectangleParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/rectangle-3-4@2x.png"
            />
            <img
              className={styles.frameItem}
              loading="lazy"
              alt=""
              src="/rectangle-2-3@2x.png"
            />
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/rectangle-2-2@2x.png"
            />
            <img
              className={styles.rectangleIcon}
              loading="lazy"
              alt=""
              src="/rectangle-3-4@2x.png"
            />
            <img
              className={styles.frameChild1}
              loading="lazy"
              alt=""
              src="/rectangle-2-3@2x.png"
            />
            <img
              className={styles.frameChild2}
              alt=""
              src="/rectangle-2-2@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Six;
