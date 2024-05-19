import { FunctionComponent } from "react";
import styles from "./MacBookPro16.module.css";

const About1 = () => {
  return (
    <div className={styles.macbookPro161}>
      <div className={styles.natureAndSkillsOfBrandwalaWrapper}>
        <b className={styles.natureAndSkills}>Nature and Skills of BrandX</b>
      </div>
      <div className={styles.aCompanyHavingRequiredSkilWrapper}>
        <b className={styles.aCompanyHavingContainer}>
          <p className={styles.aCompanyHaving}>
            A Company Having Required Skill Sets and 6 years of Working
            Experience in this Industry
          </p>
        </b>
      </div>
      <div className={styles.groupParent}>
        <div className={styles.groupContainer}>
          <img className={styles.groupChild} alt="" src="/group-1.svg" />
          <b className={styles.accountingFinance}>{`Accounting & Finance`}</b>
        </div>
        <div className={styles.groupDiv}>
          <img className={styles.groupItem} alt="" src="/group-2.svg" />
          <b className={styles.branding}>Branding</b>
        </div>
        <div className={styles.groupDiv}>
          <img className={styles.groupItem} alt="" src="/group-3.svg" />
          <b className={styles.staffRecruitment}>Staff Recruitment</b>
        </div>
        <div className={styles.groupParent2}>
          <img className={styles.groupItem} alt="" src="/group-4.svg" />
          <b className={styles.customerRetention}>Customer Retention</b>
        </div>
        <div className={styles.groupDiv}>
          <img className={styles.groupItem} alt="" src="/group-5.svg" />
          <b className={styles.salesMarketing}>{`Sales & Marketing`}</b>
        </div>
      </div>
    </div>
  );
};

export default About1;
