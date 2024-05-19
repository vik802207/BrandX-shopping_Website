import React ,{useEffect} from 'react'
import './Gallery.css'
function Gallery() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets-global.website-files.com/661aa640f533866984229ddd/js/webflow.7d66b54ec.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
  {/* This site was created in Webflow. https://www.webflow.com */}
  {/* Last Published: Tue Apr 16 2024 14:36:15 GMT+0000 (Coordinated Universal Time) */}
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1" name="viewport" />
  <meta content="Webflow" name="generator" />

  <section data-w-id="4181e251-9f16-cd9c-95b9-3ec4170743cc" className="track">
    <div className="camera">
      <div className="frame">
        <div className="item">
          <img
            src="https://assets-global.website-files.com/661aa640f533866984229ddd/661e56cd36ce7f253c0ec717_mostafa-meraji-X0yKdR_F9rM-unsplash.jpg"
            loading="lazy"
            sizes="100vw"
            srcSet="
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56cd36ce7f253c0ec717_mostafa-meraji-X0yKdR_F9rM-unsplash-p-500.jpg   500w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56cd36ce7f253c0ec717_mostafa-meraji-X0yKdR_F9rM-unsplash-p-800.jpg   800w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56cd36ce7f253c0ec717_mostafa-meraji-X0yKdR_F9rM-unsplash-p-1080.jpg 1080w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56cd36ce7f253c0ec717_mostafa-meraji-X0yKdR_F9rM-unsplash-p-1600.jpg 1600w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56cd36ce7f253c0ec717_mostafa-meraji-X0yKdR_F9rM-unsplash-p-2000.jpg 2000w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56cd36ce7f253c0ec717_mostafa-meraji-X0yKdR_F9rM-unsplash-p-2600.jpg 2600w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56cd36ce7f253c0ec717_mostafa-meraji-X0yKdR_F9rM-unsplash-p-3200.jpg 3200w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56cd36ce7f253c0ec717_mostafa-meraji-X0yKdR_F9rM-unsplash.jpg        4000w
        "
            alt=""
            className="image-12"
          />
        </div>
        <div className="item">
          <img
            src="https://assets-global.website-files.com/661aa640f533866984229ddd/661e56cd36ce7f253c0ec6d0_erica-zhou-IHpUgFDn7zU-unsplash%20(1).jpg"
            loading="lazy"
            sizes="100vw"
            srcSet="
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56cd36ce7f253c0ec6d0_erica-zhou-IHpUgFDn7zU-unsplash%20(1)-p-500.jpg   500w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56cd36ce7f253c0ec6d0_erica-zhou-IHpUgFDn7zU-unsplash%20(1)-p-800.jpg   800w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56cd36ce7f253c0ec6d0_erica-zhou-IHpUgFDn7zU-unsplash%20(1)-p-1080.jpg 1080w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56cd36ce7f253c0ec6d0_erica-zhou-IHpUgFDn7zU-unsplash%20(1)-p-1600.jpg 1600w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56cd36ce7f253c0ec6d0_erica-zhou-IHpUgFDn7zU-unsplash%20(1)-p-2000.jpg 2000w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56cd36ce7f253c0ec6d0_erica-zhou-IHpUgFDn7zU-unsplash%20(1)-p-2600.jpg 2600w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56cd36ce7f253c0ec6d0_erica-zhou-IHpUgFDn7zU-unsplash%20(1).jpg        2967w
        "
            alt=""
            className="image-13"
          />
        </div>
        <div className="item">
          <img
            src="https://assets-global.website-files.com/661aa640f533866984229ddd/661e570e2a2cb05bb8962f84_alexander-kovacs-GMGdhtYeROY-unsplash.jpg"
            loading="lazy"
            sizes="100vw"
            srcSet="
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e570e2a2cb05bb8962f84_alexander-kovacs-GMGdhtYeROY-unsplash-p-500.jpg   500w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e570e2a2cb05bb8962f84_alexander-kovacs-GMGdhtYeROY-unsplash-p-800.jpg   800w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e570e2a2cb05bb8962f84_alexander-kovacs-GMGdhtYeROY-unsplash-p-1080.jpg 1080w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e570e2a2cb05bb8962f84_alexander-kovacs-GMGdhtYeROY-unsplash-p-1600.jpg 1600w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e570e2a2cb05bb8962f84_alexander-kovacs-GMGdhtYeROY-unsplash-p-2000.jpg 2000w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e570e2a2cb05bb8962f84_alexander-kovacs-GMGdhtYeROY-unsplash-p-2600.jpg 2600w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e570e2a2cb05bb8962f84_alexander-kovacs-GMGdhtYeROY-unsplash-p-3200.jpg 3200w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e570e2a2cb05bb8962f84_alexander-kovacs-GMGdhtYeROY-unsplash.jpg        5983w
        "
            alt=""
            className="image-14"
          />
        </div>
        <div className="item">
          <img
            src="https://assets-global.website-files.com/661aa640f533866984229ddd/661e56ccd566e9b406036746_mike-petrucci-c9FQyqIECds-unsplash.jpg"
            loading="lazy"
            sizes="100vw"
            srcSet="
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56ccd566e9b406036746_mike-petrucci-c9FQyqIECds-unsplash-p-500.jpg   500w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56ccd566e9b406036746_mike-petrucci-c9FQyqIECds-unsplash-p-800.jpg   800w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56ccd566e9b406036746_mike-petrucci-c9FQyqIECds-unsplash-p-1080.jpg 1080w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56ccd566e9b406036746_mike-petrucci-c9FQyqIECds-unsplash-p-1600.jpg 1600w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56ccd566e9b406036746_mike-petrucci-c9FQyqIECds-unsplash-p-2000.jpg 2000w,
          https://assets-global.website-files.com/661aa640f533866984229ddd/661e56ccd566e9b406036746_mike-petrucci-c9FQyqIECds-unsplash.jpg        2304w
        "
            alt=""
            className="image-15"
          />
        </div>
      </div>
    </div>
  </section>
</>

  )
}

export default Gallery