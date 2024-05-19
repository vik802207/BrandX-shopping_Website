import { FunctionComponent } from "react";
import styles from "./Client.module.css";
import MiniSlider from "../components/MiniSlider";
import MacBookPro16 from "../pages/MacBookPro16";
import Display from "../Newslider/components/pages/Display";

const Client = () => {
  return (
    <>
   
    <div className={styles.client}>
   
      <div className={styles.ourStrongNetworkParent}>
        <div className={styles.ourStrongNetwork}>Our Strong Network</div>
        <div className={styles.frameParent}>
          <div className={styles.solarSystem89668571Parent}>
            <img
              className={styles.solarSystem89668571Icon}
              alt=""
              src="/solarsystem-8966857-1@2x.png"
            />
            <div className={styles.weHave300DistributorsThroWrapper}>
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
          </div>
          <div className={styles.luxury150258081Parent}>
            <img
              className={styles.solarSystem89668571Icon}
              alt=""
              src="/luxury-15025808-1@2x.png"
            />
            <div className={styles.weHave300DistributorsThroWrapper}>
              <div className={styles.weHave300Container}>
                <p
                  className={styles.throughWhichOur}
                >{`TIE-UPS WITH MAJOR BRANDS `}</p>
                <p className={styles.throughWhichOur}>
                  AND BRAND MANUFACTURERS
                </p>
              </div>
            </div>
          </div>
          <div className={styles.luxury150258081Parent}>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            <div className={styles.weHave300DistributorsThroWrapper}>
              <div className={styles.weHave300Container}>
                <p className={styles.throughWhichOur}>
                  STRONG PRESENCE IN MARKET AS
                </p>
                <p
                  className={styles.throughWhichOur}
                >{`BRAND STOCKIST AND SUPER `}</p>
                <p className={styles.throughWhichOur}>STOCKIST</p>
              </div>
            </div>
          </div>
          <div className={styles.luxury150258081Parent}>
            <img
              className={styles.solarSystem89668571Icon}
              alt=""
              src="/saturn-1@2x.png"
            />
            <div className={styles.weHave300DistributorsThroWrapper}>
              <div className={styles.weHave300Container}>
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
      <div style={{zoom:0.77}}> 
      <Display/>
      </div>
    </div>
    </>
  );
};

export default Client;
