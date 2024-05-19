import { useMemo } from "react";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({
  group2,
  discount,
  aMinimumDiscountOf5070ToE,
  propWidth,
  propAlignSelf,
  propPadding,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const frameDiv1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div className={styles.frameWrapper} style={frameDiv1Style}>
        <img className={styles.frameChild} loading="lazy" alt="" src={group2} />
      </div>
      <div className={styles.discountWrapper}>
        <div className={styles.discount}>{discount}</div>
      </div>
      <div className={styles.aMinimumDiscount}>{aMinimumDiscountOf5070ToE}</div>
    </div>
  );
};

export default FrameComponent2;
