import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameItem} />
        </div>
      </div>
      <div className={styles.ourStrongNetworkWrapper}>
        <div className={styles.ourStrongNetwork}>Our Strong Network</div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.solarSystem89668571Parent}>
          <img
            className={styles.solarSystem89668571Icon}
            loading="lazy"
            alt=""
            src="/solarsystem-8966857-1@2x.png"
          />
          <div className={styles.weHave300DistributorsThroWrapper}>
            <div className={styles.weHave300Container}>
              <p className={styles.weHave300}>{`WE HAVE 300+ DISTRIBUTORS `}</p>
              <p
                className={styles.throughWhichOur}
              >{`THROUGH WHICH OUR STOCK `}</p>
              <p className={styles.isProcured}>IS PROCURED</p>
            </div>
          </div>
        </div>
        <div className={styles.luxury150258081Parent}>
          <img
            className={styles.luxury150258081Icon}
            loading="lazy"
            alt=""
            src="/luxury-15025808-1@2x.png"
          />
          <div className={styles.tieUpsWithMajorBrandsAndWrapper}>
            <div className={styles.tieUpsWithMajorContainer}>
              <p
                className={styles.tieUpsWithMajor}
              >{`TIE-UPS WITH MAJOR BRANDS `}</p>
              <p className={styles.andBrandManufacturers}>
                AND BRAND MANUFACTURERS
              </p>
            </div>
          </div>
        </div>
        <div className={styles.vectorParent}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
          <div className={styles.strongPresenceInMarketAsBWrapper}>
            <div className={styles.strongPresenceInContainer}>
              <p className={styles.strongPresenceIn}>
                STRONG PRESENCE IN MARKET AS
              </p>
              <p
                className={styles.brandStockistAnd}
              >{`BRAND STOCKIST AND SUPER `}</p>
              <p className={styles.stockist}>STOCKIST</p>
            </div>
          </div>
        </div>
        <div className={styles.saturn1Parent}>
          <img
            className={styles.saturn1Icon}
            loading="lazy"
            alt=""
            src="/saturn-1@2x.png"
          />
          <div className={styles.linkedWithMajorECommerceCWrapper}>
            <div className={styles.linkedWithMajorContainer}>
              <p className={styles.linkedWithMajor}>
                LINKED WITH MAJOR E-COMMERCE
              </p>
              <p
                className={styles.companiesWhoLiquidate}
              >{`COMPANIES WHO LIQUIDATE THE `}</p>
              <p className={styles.stockInMarket}>STOCK IN MARKET</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
