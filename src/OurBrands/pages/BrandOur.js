import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import ContentBoxes from "../components/ContentBoxes";
import FrameComponent from "../components/FrameComponent";
import styles from "./About.module.css";
import Four from "../components/Four";
import Five from "../components/Five";
import Six from "../components/Six";

const BrandOur = () => {
  return (
    <>
      <div className={styles.brandweb}>
        <ContentBoxes />
        <FrameComponent1 />
        <FrameComponent />
        <Four />
        <Five />
        <Six />
      </div>
    </>
  );
};

export default BrandOur;
