import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookPro164.module.css";
const MacBookPro164 = () => {
  const navigate = useNavigate();

  const onRightArrowBackup2SvgrepocClick = useCallback((e) => {
    e.preventDefault();
    navigate("/");
  }, [navigate]);

  const onLeftArrowBackup2SvgrepocoClick = useCallback((e) => {
    e.preventDefault();
    navigate("/macbook-pro-16-2");
  }, [navigate]);

  return (
    <div className={styles.macbookPro164}>
      <section className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/rectangle-1@2x.png" />
        <img
          className={styles.rightArrowBackup2SvgrepocIcon}
          loading="lazy"
          alt=""
          src="/rightarrowbackup2-svgrepocom.svg"
          onClick={onRightArrowBackup2SvgrepocClick}
        />
        <img
          className={styles.leftArrowBackup2SvgrepocoIcon}
          loading="lazy"
          alt=""
          src="/leftarrowbackup2-svgrepocom2.svg"
          onClick={onLeftArrowBackup2SvgrepocoClick}
        />
      </section>
      <section className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.aLookAt}>A Look at Our Franchise Outlets</div>
      </section>
    </div>
  );
};

export default MacBookPro164;
