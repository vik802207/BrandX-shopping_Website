import React from 'react'
import '../Home.css'
import image from './Brand.jpg'
import styles from './Brandwala.module.css'
import img from './lap.jpg';
import img1 from './Laptop.jpg'
function BrandWala() {
  return (
    <>
   <div className='About'>
   <div className={styles.macbookPro161}>
   <div className={styles.unsplashsyto3xs06fuParent}>
     <img
       className={styles.unsplashsyto3xs06fuIcon}
       loading="lazy"
       alt=""
       src={img}
     />
     <img
       className={styles.unsplashflpc9Vocj4Icon}
       alt=""
       src={img1}
     />
     <img
       className={styles.unsplash7okkfhxrxnwIcon}
       alt=""
       src={image}
     />
   </div>
   <div className={styles.macbookPro161Inner}>
     <div className={styles.frameParent}>
       <div className={styles.rectangleParent}>
         <div className={styles.frameChild} />
         <div className={styles.aboutBrandwalaParent}>
           <div className={styles.aboutBrandwala}>About BrandX</div>
           <div className={styles.digitalizingTrendsAndContainer}>
             <p className={styles.digitalizingTrendsAnd}>
               Digitalizing trends and disruptive technologies are giving
               companies the
             </p>
             <p
               className={styles.abilityToRadically}
             >{`ability to radically change business models, and create new products `}</p>
             <p className={styles.andServices}>and services.</p>
           </div>
         </div>
       </div>
       <div className={styles.todayWeAreContainer}>
         <p className={styles.todayWeAre}>
           Today we are a MBDO- Multi Brand Discount Outlet, We Offer
           Discounts throughout
         </p>
         <p className={styles.theYearIe365}>
           the year i.e.,365 days over National and International Brands in
           Apparel and Foot
         </p>
         <p className={styles.wearOurDiscounts}>
           -wear Our discounts vary from 30% – 80% in every category.
         </p>
       </div>
     </div>
  
   </div>
   </div>
   </div>
    </>
  )
}

export default BrandWala