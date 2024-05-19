import React, { Component, useEffect,useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar  = ()=>  {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets-global.website-files.com/661aa640f533866984229ddd/js/webflow.ccb5b1bba.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);
  

    return (
      <div>
        {/* This site was created in Webflow. https://www.webflow.com */}{/* Last Published: Sat Apr 13 2024 19:53:55 GMT+0000 (Coordinated Universal Time) */}
        <head>
        <meta charSet="utf-8" />
        <title>New</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        </head>
        <body>
        <div id="root">
        <div className="body">
        <div className="div-block">
          <div className="div-block-3">
            <img src="\new\BRANDX LOGO_page-0001.jpg" loading="lazy" width={88} alt="" className="image" />
          </div>
          <section className="section" >
            <h4 className="heading"> <Link className='hove' to='/'> Home</Link> </h4>
            <h4 className="heading"><Link className='hove'  to='/aboutUs' >About Us</Link></h4>
            <h4 className="heading"><Link className='hove' to='/ourBrands' >Our Brands</Link></h4>
            <h4 className="heading"><Link className='hove' to='/gallery' >Gallery</Link></h4>
            <h4 className="heading"><Link className='hove' to='/Need-franchise' >Need Franchise</Link></h4>
            <h4 className="heading"><Link className='hove' to='/contact-Us' >Contact Us</Link></h4>
            <img src="https://assets-global.website-files.com/661aa640f533866984229ddd/661ab234ed163eab8fe4d8b8_search%20(1).png" loading="lazy" width={30} height={30} alt="" />
            <h4 className="heading but">Have Project</h4>
          </section>
          <img src="https://assets-global.website-files.com/661aa640f533866984229ddd/661ab821fcd03855f4461a18_menu.png" loading="lazy" width={30} height={30} alt="" data-w-id="0f018d38-be7b-eec0-9d43-5ec34e180ace"
           style={{opacity: 1}} className="image-3" />
        </div>
        </div>
      </div>
      </body>
      </div>
    );
  
}
export default Navbar
