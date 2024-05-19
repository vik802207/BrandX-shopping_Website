import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookPro16.module.css";

const MacBookPro16 = () => {
  const navigate = useNavigate();

  const onLeftArrowBackup2SvgrepocoClick = useCallback((e) => {
    e.preventDefault();
    navigate("/macbook-pro-16-4");
  }, [navigate]);

  const onLeftArrowBackup2Svgrepoco1Click = useCallback((e) => {
    e.preventDefault();
    navigate("/macbook-pro-16-2");
  }, [navigate]);

  return (
    <div className={styles.macbookPro161} >
      <section className={styles.rectangleParent}>
        <img className={styles.frameChild} alt="" src="/abc.jpg" />
       
      </section>
    </div>
  );
};

export default MacBookPro16;
