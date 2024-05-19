import GroupComponent from "./GroupComponent";
import styles from "./MainFRAME.module.css";

const MainFRAME = () => {
  return (
    <section className={styles.mainFRAME}>
      <div className={styles.frameParent}>
        <div className={styles.clientsTestimonialWrapper}>
          <b className={styles.clientsTestimonial}>Clients Testimonial</b>
        </div>
        <div className={styles.frameGroup}>
          <GroupComponent ellipse1="/ellipse-1@2x.png" />
          <div className={styles.ellipseParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/ellipse-11@2x.png"
            />
            <div className={styles.frameContainer}>
              <div className={styles.iAmGratefulForYourHardAnWrapper}>
                <div className={styles.iAmGratefulContainer}>
                  <span>
                    <p
                      className={styles.iAmGrateful}
                    >{`I am grateful for your hard and devoted work on my business project! `}</p>
                    <p
                      className={styles.iNeverExpected}
                    >{`I never expected it to be a bomb, however, in the end, it turned out to `}</p>
                    <p className={styles.beAGreat}>
                      be a great success. I love the individual approach and
                      creativity!
                    </p>
                  </span>
                </div>
              </div>
              <b className={styles.sahilKumar}>Sahil Kumar</b>
              <div className={styles.rectangleParent}>
                <div className={styles.frameItem} />
                <div className={styles.rectangleGroup}>
                  <div className={styles.frameInner} />
                  <div className={styles.ellipseDiv} />
                  <div className={styles.frameChild1} />
                  <div className={styles.frameChild2} />
                  <div className={styles.frameChild3} />
                </div>
              </div>
            </div>
          </div>
          <GroupComponent
            ellipse1="/ellipse-12@2x.png"
            propDisplay="flex"
            propMinWidth="unset"
            propHeight="21px"
            propBackgroundColor="#d9d9d9"
            propBackgroundColor1="#d9d9d9"
            propBackgroundColor2="#08fe6a"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.ellipseGroup}>
              <img
                className={styles.ellipseIcon}
                loading="lazy"
                alt=""
                src="/ellipse-13@2x.png"
              />
              <div className={styles.rectangleContainer}>
                <div className={styles.rectangleDiv} />
                <div className={styles.iAmGratefulContainer1}>
                  <span>
                    <p
                      className={styles.iAmGrateful1}
                    >{`I am grateful for your hard and devoted work on my business project! `}</p>
                    <p
                      className={styles.iNeverExpected1}
                    >{`I never expected it to be a bomb, however, in the end, it turned out to `}</p>
                    <p className={styles.beAGreat1}>
                      be a great success. I love the individual approach and
                      creativity!
                    </p>
                  </span>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.sahilKumarParent}>
                    <b className={styles.sahilKumar1}>Sahil Kumar</b>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.rectangleParent1}>
                        <div className={styles.frameChild4} />
                        <div className={styles.frameChild5} />
                        <div className={styles.frameChild6} />
                        <div className={styles.frameChild7} />
                        <div className={styles.frameChild8} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainFRAME;
