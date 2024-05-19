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

  return (
    <div className={styles.groupParent} style={frameDivStyle}>
      <img className={styles.frameChild} alt="" src={group2} />
      <div className={styles.discount}>{discount}</div>
      <div className={styles.aMinimumDiscount}>{aMinimumDiscountOf5070ToE}</div>
    </div>
  );
};

export default FrameComponent2;
