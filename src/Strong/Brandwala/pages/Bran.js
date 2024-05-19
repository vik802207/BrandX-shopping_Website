import FrameComponent2 from "../components/FrameComponent2";
import styles from "./Bran.module.css";

const Bran = () => {
  return (
    <div className={styles.bran}>
      <div className={styles.whyBrandwala}>Why BrandX</div>
      <div className={styles.branChild} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <FrameComponent2
              group2="/new/logoD.svg"
              discount="Discount"
              aMinimumDiscountOf5070ToE="A Minimum Discount of 50%-70% to End User"
            />
            <FrameComponent2
              group2="/new/group-33.svg"
              discount="Genuine Brands"
              aMinimumDiscountOf5070ToE="BrandX is dealing in 250+ Brands, all under one roof"
              propWidth="267.3px"
              propAlignSelf="unset"
            />
            <FrameComponent2
              group2="/new/group-44.svg"
              discount="Varied Options"
              aMinimumDiscountOf5070ToE="An large range of options to choose from"
              propWidth="267.3px"
              propAlignSelf="unset"
            />
          </div>
          <div className={styles.lineParent}>
            <div className={styles.frameChild} />
            <div className={styles.frameItem} />
          </div>
        </div>
        <div className={styles.ourStrongNetwork}>Our Strong Network</div>
        <div className={styles.frameWrapper}>
          <div className={styles.groupParent}>
            <div className={styles.solarSystem89668571Parent}>
              <img
                className={styles.solarSystem89668571Icon}
                alt=""
                src="/solarsystem-8966857-1@2x.png"
              />
              <div className={styles.weHave300Container}>
                <p
                  className={styles.throughWhichOur}
                >{`WE HAVE 300+ DISTRIBUTORS `}</p>
                <p
                  className={styles.throughWhichOur}
                >{`THROUGH WHICH OUR STOCK `}</p>
                <p className={styles.throughWhichOur}>IS PROCURED</p>
              </div>
            </div>
            <div className={styles.luxury150258081Parent}>
              <img
                className={styles.luxury150258081Icon}
                alt=""
                src="/luxury-15025808-1@2x.png"
              />
              <div className={styles.tieUpsWithMajorContainer}>
                <p
                  className={styles.throughWhichOur}
                >{`TIE-UPS WITH MAJOR BRANDS `}</p>
                <p className={styles.throughWhichOur}>
                  AND BRAND MANUFACTURERS
                </p>
              </div>
            </div>
            <div className={styles.groupWrapper}>
              <div className={styles.strongPresenceInMarketAsBParent}>
                <div className={styles.strongPresenceInContainer}>
                  <p className={styles.throughWhichOur}>
                    STRONG PRESENCE IN MARKET AS
                  </p>
                  <p
                    className={styles.throughWhichOur}
                  >{`BRAND STOCKIST AND SUPER `}</p>
                  <p className={styles.throughWhichOur}>STOCKIST</p>
                </div>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              </div>
            </div>
            <div className={styles.saturn1Parent}>
              <img
                className={styles.saturn1Icon}
                alt=""
                src="/saturn-1@2x.png"
              />
              <div className={styles.linkedWithMajorContainer}>
                <p className={styles.throughWhichOur}>
                  LINKED WITH MAJOR E-COMMERCE
                </p>
                <p
                  className={styles.throughWhichOur}
                >{`COMPANIES WHO LIQUIDATE THE `}</p>
                <p className={styles.throughWhichOur}>STOCK IN MARKET</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bran;
