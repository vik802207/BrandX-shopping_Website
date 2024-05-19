import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookPro165.module.css";

const MacBookPro165 = () => {
  const navigate = useNavigate();

  const onRightArrowBackup2SvgrepocClick = useCallback((e) => {
    e.preventDefault();
    navigate("/macbook-pro-16-4");
  }, [navigate]);

  const onLeftArrowBackup2SvgrepocoClick = useCallback((e) => {
    e.preventDefault();
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.macbookPro162}>
      <img
        className={styles.macbookPro162Child}
        alt=""
        src="/rectangle-1@2x.png"
      />
      <img
        className={styles.rightArrowBackup2SvgrepocIcon}
        alt=""
        src="/rightarrowbackup2-svgrepocom.svg"
        onClick={onRightArrowBackup2SvgrepocClick}
      />
      <img
        className={styles.leftArrowBackup2SvgrepocoIcon}
        alt=""
        src="/leftarrowbackup2-svgrepocom2.svg"
        onClick={onLeftArrowBackup2SvgrepocoClick}
      />
    </div>
  );
};

export default MacBookPro165;
