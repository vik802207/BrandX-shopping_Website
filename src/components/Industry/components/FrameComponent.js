import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.industInner}>
      <div className={styles.haveAProjectLetsChatParent}>
        <b className={styles.haveAProject}>{`Have a project? Let’s chat `}</b>
        <div className={styles.frameWrapper}>
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <b className={styles.sendMessage}>Send Message</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
