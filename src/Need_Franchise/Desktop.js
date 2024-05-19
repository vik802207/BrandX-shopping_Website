import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.ourModelWrapper}>
            <b className={styles.ourModel}>Our Model</b>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.wrapper}>
                <b className={styles.b}>01</b>
              </div>
              <b className={styles.businessNurturing}>Business Nurturing</b>
            </div>
            <div className={styles.weAssistInvestorsContainer}>
              <p className={styles.weAssistInvestors}>
                We assist Investors in basic needs and
              </p>
              <p className={styles.weAssistInvestors}>
                help them nurture their business
              </p>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.container}>
                <b className={styles.b}>02</b>
              </div>
              <b className={styles.ourAssistance}>Our Assistance</b>
            </div>
            <div className={styles.weAssistInvestorContainer}>
              <p className={styles.weAssistInvestors}>
                We assist investor in Marketing,
              </p>
              <p className={styles.weAssistInvestors}>
                Basic infrastructure and POS
              </p>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.frame}>
                <b className={styles.b2}>03</b>
              </div>
              <b className={styles.ourAssistance}>Store Investment</b>
            </div>
            <div className={styles.ourStoreInvestmentContainer}>
              <p className={styles.weAssistInvestors}>
                Our store investment starts from 10 lakh
              </p>
              <p className={styles.weAssistInvestors}>
                and it can vary to 50 lakh investment
              </p>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.frame}>
                <b className={styles.b3}>04</b>
              </div>
              <b className={styles.ourAssistance}>Flexible Model</b>
            </div>
            <div className={styles.weHaveAContainer}>
              <p className={styles.weAssistInvestors}>
                We have a very flexible model
              </p>
              <p className={styles.weAssistInvestors}>
                depending upon inventory budget
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
