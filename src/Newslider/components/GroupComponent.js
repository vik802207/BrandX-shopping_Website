import { useMemo } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({
  ellipse1,
  propDisplay,
  propMinWidth,
  propHeight,
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
}) => {
  const sahilKumarStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
      height: propHeight,
    };
  }, [propDisplay, propMinWidth, propHeight]);

  const ellipseDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const ellipseDiv1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const ellipseDiv2Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  return (
    <div className={styles.ellipseParent}>
      <img className={styles.frameChild} loading="lazy" alt="" src={ellipse1} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <div className={styles.iAmGratefulContainer}>
          <p
            className={styles.iAmGrateful}
          >{`I am grateful for your hard and devoted work on my business project! `}</p>
          <p
            className={styles.iNeverExpected}
          >{`I never expected it to be a bomb, however, in the end, it turned out to `}</p>
          <p className={styles.beAGreat}>
            be a great success. I love the individual approach and creativity!
          </p>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.sahilKumarParent}>
            <b className={styles.sahilKumar} style={sahilKumarStyle}>
              Sahil Kumar
            </b>
            <div className={styles.frameContainer}>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameInner} />
                <div className={styles.ellipseDiv} style={ellipseDivStyle} />
                <div className={styles.frameChild1} style={ellipseDiv1Style} />
                <div className={styles.frameChild2} style={ellipseDiv2Style} />
                <div className={styles.frameChild3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
