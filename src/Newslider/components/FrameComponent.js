import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.rectangleWrapper}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-3@2x.png"
        />
      </div>
      <div className={styles.rectangleContainer}>
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/rectangle-7@2x.png"
        />
      </div>
      <div className={styles.rectangleFrame}>
        <img
          className={styles.frameInner}
          loading="lazy"
          alt=""
          src="/rectangle-8@2x.png"
        />
      </div>
      <div className={styles.frameDiv}>
        <img
          className={styles.rectangleIcon}
          loading="lazy"
          alt=""
          src="/rectangle-9@2x.png"
        />
      </div>
      <div className={styles.rectangleWrapper1}>
        <img
          className={styles.frameChild1}
          loading="lazy"
          alt=""
          src="/rectangle-10@2x.png"
        />
      </div>
      <img
        className={styles.frameChild2}
        loading="lazy"
        alt=""
        src="/rectangle-8@2x.png"
      />
      <img
        className={styles.frameChild3}
        loading="lazy"
        alt=""
        src="/rectangle-3@2x.png"
      />
      <img
        className={styles.frameChild4}
        loading="lazy"
        alt=""
        src="/rectangle-10@2x.png"
      />
      <img
        className={styles.frameChild5}
        loading="lazy"
        alt=""
        src="/rectangle-9@2x.png"
      />
      <img
        className={styles.frameChild6}
        loading="lazy"
        alt=""
        src="/rectangle-7@2x.png"
      />
    </section>
  );
};

export default FrameComponent;
