import FrameComponent2 from "./FrameComponent2";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.ourIndustryNeedsWrapper}>
          <b className={styles.ourIndustryNeeds}>Our Industry Needs</b>
        </div>
        <FrameComponent2
          prop="01"
          brandsUnderOneRoof="Brands Under One Roof"
          prop1="02"
          largeProcurementNetwork="Large procurement network"
          prop2="03"
          betterQualityAtAffordable="Better Quality at Affordable Prices"
        />
      </div>
      <FrameComponent2
        prop="04"
        brandsUnderOneRoof="Attractive Offers"
        prop1="05"
        largeProcurementNetwork="inventory Rotation"
        prop2="06"
        betterQualityAtAffordable="Transformation in Existing Retail Setup"
      />
    </div>
  );
};

export default FrameComponent1;
