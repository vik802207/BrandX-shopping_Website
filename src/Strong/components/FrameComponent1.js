import FrameComponent2 from "./FrameComponent2";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  return (
    <header className={styles.frameParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.whyBrandwala}>Why Brandwala</div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <FrameComponent2
          group2="/logoD.svg"
          discount="Discount"
          aMinimumDiscountOf5070ToE="A Minimum Discount of 50%-70% to End User"
        />
        <div className={styles.frameDiv}>
          <FrameComponent2
            group2="/group-33.svg"
            discount="Genuine Brands"
            aMinimumDiscountOf5070ToE="Brandwala is dealing in 250+ Brands, all under one roof"
            propWidth="unset"
            propAlignSelf="stretch"s
            propPadding="0px var(--padding-15xl) 0px var(--padding-14xl-7)"
          />
        </div>
        <FrameComponent2
          group2="/group-44.svg"
          discount="Varied Options"
          aMinimumDiscountOf5070ToE="An large range of options to choose from"
          propWidth="267px"
          propAlignSelf="unset"
          propPadding="0px var(--padding-14xl) 0px var(--padding-14xl-6)"
        />
      </div>
    </header>
  );
};

export default FrameComponent1;
