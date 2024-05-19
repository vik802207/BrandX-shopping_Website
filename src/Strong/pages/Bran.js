import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./Bran.module.css";

const Bran = () => {
  return (
    <div className={styles.bran}>
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default Bran;
