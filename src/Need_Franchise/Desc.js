import styles from "./MacBookPro1631.module.css";

const Desc = () => {
  return (
    <div className={styles.about}>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.groupParent}>
                <div className={styles.rectangleParent}>
                  <img
                    className={styles.groupChild}
                    alt=""
                    src="/rectangle-3@2x.png"
                  />
                  <img
                    className={styles.groupItem}
                    alt=""
                    src="/rectangle-4@2x.png"
                  />
                  <img
                    className={styles.groupInner}
                    alt=""
                    src="/rectangle-5@2x.png"
                  />
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.weAreCreativeParent}>
                    <div className={styles.weAreCreative}>Opt for Our Franchise</div>
                    <div className={styles.ourFastEasyContainer}>
                      <p className={styles.ourFastEasyProcessIsDesi}>
                        <span className={styles.ourFastEasyProcessIsDesi1}>
                        We are a MBDO- Multi Brand Discount Outlet, We Offer
                         Discounts throughout the year i.e.,365 days over
                          <span className={styles.e}>e</span>
                        </span>
                        <span className={styles.veInPresenting}>
                        National and International Brands in Apparel and Footwear. Our discounts vary from 30% - 80% in every category.
                        </span>
                      </p>
                    
                      <p className={styles.reinforcedWithIndustryExper}>
                        <span className={styles.reinforcedWithIndustry}>
                     <h3>What We Do</h3>
                        <li style={{margin:15}}>We here at Brandwala are indulged into Liquidation stock-lot business.</li>
                        <li style={{margin:15}}>We deal in to 2 categories majorly: Apparels and Footwear</li>
                        <li style={{margin:15}}>We have on board all major national and international brands</li>
                        <li style={{margin:15}}>We help small scale entrepreneurs to grow up and start their own business</li>

                        </span>
                      </p>
                    </div>
                  </div>
                  <div className={styles.frameChild} />
                </div>
              </div>
              </div>
              </div>
              
        </div>
      </div>
    </div>
  );
};

export default Desc;
