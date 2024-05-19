import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({
  prop,
  brandsUnderOneRoof,
  prop1,
  largeProcurementNetwork,
  prop2,
  betterQualityAtAffordable,
}) => {
  return (
    <div className={styles.brandsUnderOneRoofParent}>
      <div className={styles.brandsUnderOneContainer}>
        <span className={styles.brandsUnderOneContainer1}>
          <p className={styles.p}>
            <b>{prop}</b>
          </p>
          <p className={styles.brandsUnderOne}>{brandsUnderOneRoof}</p>
        </span>
      </div>
      <div className={styles.largeProcurementNetworkContainer}>
        <span className={styles.largeProcurementNetworkContainer1}>
          <p className={styles.p1}>
            <b>{prop1}</b>
          </p>
          <p className={styles.largeProcurementNetwork}>
            {largeProcurementNetwork}
          </p>
        </span>
      </div>
      <div className={styles.betterQualityAtContainer}>
        <span className={styles.betterQualityAtContainer1}>
          <p className={styles.p2}>
            <b>{prop2}</b>
          </p>
          <p className={styles.betterQualityAt}>{betterQualityAtAffordable}</p>
        </span>
      </div>
    </div>
  );
};

export default FrameComponent2;
