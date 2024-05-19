import styles from "./MacBookPro1631.module.css";

const MacBookPro1631 = () => {
  return (
    <div className={styles.industry}>
      <div className={styles.industryChild} />
      <b className={styles.ourIndustryNeeds}>Our Industry Needs</b>
      <div className={styles.brandsUnderOneContainer}>
        <p className={styles.p}>
          <b>01</b>
        </p>
        <p className={styles.brandsUnderOne}>Brands Under One Roof</p>
      </div>
      <div className={styles.attractiveOffers}>
        <p className={styles.p1}>
          <b>04</b>
        </p>
        <p className={styles.attractiveOffers1}>Attractive Offers</p>
      </div>
      <div className={styles.largeProcurementNetworkContainer}>
        <p className={styles.p2}>
          <b>02</b>
        </p>
        <p className={styles.largeProcurementNetwork}>
          Large procurement network
        </p>
      </div>
      <div className={styles.inventoryRotation}>
        <p className={styles.p3}>
          <b>05</b>
        </p>
        <p className={styles.inventoryRotation1}>inventory Rotation</p>
      </div>
      <div className={styles.betterQualityAtContainer}>
        <p className={styles.p4}>
          <b>03</b>
        </p>
        <p className={styles.betterQualityAt}>
          Better Quality at Affordable Prices
        </p>
      </div>
      <div className={styles.transformationInExistingContainer}>
        <p className={styles.p5}>
          <b>06</b>
        </p>
        <p className={styles.transformationInExisting}>
          Transformation in Existing Retail Setup
        </p>
      </div>
      <div className={styles.nextStep}>Next Step</div>
      <b className={styles.haveAProject}>{`Have a project? Let’s chat `}</b>
      <div className={styles.industryItem} />
      <b className={styles.sendMessage}>Send Message</b>
    </div>
  );
};

export default MacBookPro1631;
