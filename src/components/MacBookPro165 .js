import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookPro165.module.css";

const MacBookPro165 = () => {
  const navigate = useNavigate();

  const onRightArrowBackup2SvgrepocClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLeftArrowBackup2SvgrepocoClick = useCallback(() => {
    navigate("/macbook-pro-16-1");
  }, [navigate]);

  return (
    <div className={styles.macbookPro162}>
      <section className={styles.fRAME}>
        <img className={styles.fRAMEChild} alt="" src="/rectangle-11@2x.png" />
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
    </div>
  )
}
export default MacBookPro165; 