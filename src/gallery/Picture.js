import React,{useEffect} from 'react'
import './Picture.css'
function Picture() {

  useEffect(() => {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://assets-global.website-files.com/661a890279224465a7f7c252/js/webflow.396f24556.js';
    script.type = 'text/javascript';
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up function
    return () => {
      // Remove the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array to run this effect only once when the component mounts




  return (
  <>
   <div className="con">
    <div class="line"></div>
    <h1 class="head">A Glimpse of Our Footwear</h1>
    <div class="mg">
      <img
        src="https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bf453e965872048d4_domino-164_6wVEHfI-unsplash.jpg"
        loading="lazy"
        sizes="(max-width: 991px) 73vw, 41vw"
        srcset="
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bf453e965872048d4_domino-164_6wVEHfI-unsplash-p-500.jpg   500w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bf453e965872048d4_domino-164_6wVEHfI-unsplash-p-800.jpg   800w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bf453e965872048d4_domino-164_6wVEHfI-unsplash-p-1080.jpg 1080w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bf453e965872048d4_domino-164_6wVEHfI-unsplash-p-1600.jpg 1600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bf453e965872048d4_domino-164_6wVEHfI-unsplash-p-2000.jpg 2000w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bf453e965872048d4_domino-164_6wVEHfI-unsplash-p-2600.jpg 2600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bf453e965872048d4_domino-164_6wVEHfI-unsplash-p-3200.jpg 3200w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bf453e965872048d4_domino-164_6wVEHfI-unsplash.jpg        5472w
        "
        alt=""
        class="picture"
      /><img
        src="https://assets-global.website-files.com/661a890279224465a7f7c252/6622540a89793734cb84d979_the-dk-photography-NUoPWImmjCU-unsplash.jpg"
        loading="lazy"
        alt=""
        class="picture"
      /><img
        src="https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bfd61f58e97a5683a_martin-katler-Y4fKN-RlMV4-unsplash.jpg"
        loading="lazy"
        sizes="(max-width: 991px) 73vw, 41vw"
        srcset="
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bfd61f58e97a5683a_martin-katler-Y4fKN-RlMV4-unsplash-p-500.jpg   500w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bfd61f58e97a5683a_martin-katler-Y4fKN-RlMV4-unsplash-p-800.jpg   800w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bfd61f58e97a5683a_martin-katler-Y4fKN-RlMV4-unsplash-p-1080.jpg 1080w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bfd61f58e97a5683a_martin-katler-Y4fKN-RlMV4-unsplash-p-1600.jpg 1600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bfd61f58e97a5683a_martin-katler-Y4fKN-RlMV4-unsplash-p-2000.jpg 2000w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bfd61f58e97a5683a_martin-katler-Y4fKN-RlMV4-unsplash-p-2600.jpg 2600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bfd61f58e97a5683a_martin-katler-Y4fKN-RlMV4-unsplash-p-3200.jpg 3200w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bfd61f58e97a5683a_martin-katler-Y4fKN-RlMV4-unsplash.jpg        3505w
        "
        alt=""
        class="picture"
      /><img
        src="https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2e5_jed-villejo-bEcC0nyIp2g-unsplash%20(1)%20(1).jpg"
        loading="lazy"
        width="Auto"
        height="Auto"
        alt=""
        srcset="
          https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2e5_jed-villejo-bEcC0nyIp2g-unsplash%2520(1)%2520(1)-p-500.jpeg   500w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2e5_jed-villejo-bEcC0nyIp2g-unsplash%2520(1)%2520(1)-p-1080.jpeg 1080w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2e5_jed-villejo-bEcC0nyIp2g-unsplash%2520(1)%2520(1)-p-1600.jpeg 1600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2e5_jed-villejo-bEcC0nyIp2g-unsplash%20(1)%20(1).jpg             1841w
        "
        sizes="(max-width: 991px) 73vw, 41vw"
        class="picture"
      /><img
        src="https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2b8_clarity-with-server.jpg"
        loading="lazy"
        alt=""
      /><img
        src="https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2d1_denisse-leon-J7CjWufjmg4-unsplash.jpg"
        loading="lazy"
        sizes="(max-width: 991px) 73vw, 41vw"
        srcset="
          https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2d1_denisse-leon-J7CjWufjmg4-unsplash-p-500.jpeg   500w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2d1_denisse-leon-J7CjWufjmg4-unsplash-p-1080.jpeg 1080w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2d1_denisse-leon-J7CjWufjmg4-unsplash-p-1600.jpeg 1600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2d1_denisse-leon-J7CjWufjmg4-unsplash-p-2000.jpeg 2000w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2d1_denisse-leon-J7CjWufjmg4-unsplash.jpg         2074w
        "
        alt=""
        class="picture"
      />
    </div>
    <div class="mg">
      <img
        src="https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bfd61f58e97a5683a_martin-katler-Y4fKN-RlMV4-unsplash.jpg"
        loading="lazy"
        sizes="(max-width: 991px) 73vw, 41vw"
        srcset="
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bfd61f58e97a5683a_martin-katler-Y4fKN-RlMV4-unsplash-p-500.jpg   500w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bfd61f58e97a5683a_martin-katler-Y4fKN-RlMV4-unsplash-p-800.jpg   800w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bfd61f58e97a5683a_martin-katler-Y4fKN-RlMV4-unsplash-p-1080.jpg 1080w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bfd61f58e97a5683a_martin-katler-Y4fKN-RlMV4-unsplash-p-1600.jpg 1600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bfd61f58e97a5683a_martin-katler-Y4fKN-RlMV4-unsplash-p-2000.jpg 2000w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bfd61f58e97a5683a_martin-katler-Y4fKN-RlMV4-unsplash-p-2600.jpg 2600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bfd61f58e97a5683a_martin-katler-Y4fKN-RlMV4-unsplash-p-3200.jpg 3200w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bfd61f58e97a5683a_martin-katler-Y4fKN-RlMV4-unsplash.jpg        3505w
        "
        alt=""
        class="picture"
      /><img
        src="https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2e5_jed-villejo-bEcC0nyIp2g-unsplash%20(1)%20(1).jpg"
        loading="lazy"
        width="Auto"
        height="Auto"
        alt=""
        srcset="
          https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2e5_jed-villejo-bEcC0nyIp2g-unsplash%2520(1)%2520(1)-p-500.jpeg   500w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2e5_jed-villejo-bEcC0nyIp2g-unsplash%2520(1)%2520(1)-p-1080.jpeg 1080w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2e5_jed-villejo-bEcC0nyIp2g-unsplash%2520(1)%2520(1)-p-1600.jpeg 1600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2e5_jed-villejo-bEcC0nyIp2g-unsplash%20(1)%20(1).jpg             1841w
        "
        sizes="(max-width: 991px) 73vw, 41vw"
        class="picture"
      /><img
        src="https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2b8_clarity-with-server.jpg"
        loading="lazy"
        alt=""
      /><img
        src="https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2d1_denisse-leon-J7CjWufjmg4-unsplash.jpg"
        loading="lazy"
        sizes="(max-width: 991px) 73vw, 41vw"
        srcset="
          https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2d1_denisse-leon-J7CjWufjmg4-unsplash-p-500.jpeg   500w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2d1_denisse-leon-J7CjWufjmg4-unsplash-p-1080.jpeg 1080w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2d1_denisse-leon-J7CjWufjmg4-unsplash-p-1600.jpeg 1600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2d1_denisse-leon-J7CjWufjmg4-unsplash-p-2000.jpeg 2000w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/661a890379224465a7f7c2d1_denisse-leon-J7CjWufjmg4-unsplash.jpg         2074w
        "
        alt=""
        class="picture"
      />
    </div>
    <div class="line"></div>
    <h1 class="head">A Glimpse of Our Men Apparel Clothing</h1>
    <div class="mg">
      <img
        src="https://assets-global.website-files.com/661a890279224465a7f7c252/662257a519234df938ddea01_md-salman-tWOz2_EK5EQ-unsplash.jpg"
        loading="lazy"
        sizes="(max-width: 991px) 73vw, 41vw"
        srcset="
          https://assets-global.website-files.com/661a890279224465a7f7c252/662257a519234df938ddea01_md-salman-tWOz2_EK5EQ-unsplash-p-500.jpg   500w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/662257a519234df938ddea01_md-salman-tWOz2_EK5EQ-unsplash-p-800.jpg   800w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/662257a519234df938ddea01_md-salman-tWOz2_EK5EQ-unsplash-p-1080.jpg 1080w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/662257a519234df938ddea01_md-salman-tWOz2_EK5EQ-unsplash-p-1600.jpg 1600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/662257a519234df938ddea01_md-salman-tWOz2_EK5EQ-unsplash-p-2000.jpg 2000w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/662257a519234df938ddea01_md-salman-tWOz2_EK5EQ-unsplash-p-2600.jpg 2600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/662257a519234df938ddea01_md-salman-tWOz2_EK5EQ-unsplash.jpg        3000w
        "
        alt=""
        class="picture"
      /><img
        src="https://assets-global.website-files.com/661a890279224465a7f7c252/6622575126f908d2d3a34fd0_ali-pazani-Pdds9XsWyoM-unsplash.jpg"
        loading="lazy"
        sizes="(max-width: 991px) 73vw, 41vw"
        srcset="
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622575126f908d2d3a34fd0_ali-pazani-Pdds9XsWyoM-unsplash-p-500.jpg   500w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622575126f908d2d3a34fd0_ali-pazani-Pdds9XsWyoM-unsplash-p-800.jpg   800w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622575126f908d2d3a34fd0_ali-pazani-Pdds9XsWyoM-unsplash-p-1080.jpg 1080w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622575126f908d2d3a34fd0_ali-pazani-Pdds9XsWyoM-unsplash-p-1600.jpg 1600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622575126f908d2d3a34fd0_ali-pazani-Pdds9XsWyoM-unsplash.jpg        2000w
        "
        alt=""
        class="picture"
      /><img
        src="https://assets-global.website-files.com/661a890279224465a7f7c252/662257526cfaa8c17648eae5_waldemar-UP9DtTjRYpI-unsplash.jpg"
        loading="lazy"
        sizes="(max-width: 991px) 73vw, 41vw"
        srcset="
          https://assets-global.website-files.com/661a890279224465a7f7c252/662257526cfaa8c17648eae5_waldemar-UP9DtTjRYpI-unsplash-p-500.jpg   500w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/662257526cfaa8c17648eae5_waldemar-UP9DtTjRYpI-unsplash-p-800.jpg   800w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/662257526cfaa8c17648eae5_waldemar-UP9DtTjRYpI-unsplash-p-1080.jpg 1080w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/662257526cfaa8c17648eae5_waldemar-UP9DtTjRYpI-unsplash-p-1600.jpg 1600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/662257526cfaa8c17648eae5_waldemar-UP9DtTjRYpI-unsplash-p-2000.jpg 2000w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/662257526cfaa8c17648eae5_waldemar-UP9DtTjRYpI-unsplash-p-2600.jpg 2600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/662257526cfaa8c17648eae5_waldemar-UP9DtTjRYpI-unsplash-p-3200.jpg 3200w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/662257526cfaa8c17648eae5_waldemar-UP9DtTjRYpI-unsplash.jpg        6000w
        "
        alt=""
        class="picture"
      /><img
        src="https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bf453e965872048d4_domino-164_6wVEHfI-unsplash.jpg"
        loading="lazy"
        sizes="(max-width: 991px) 73vw, 41vw"
        srcset="
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bf453e965872048d4_domino-164_6wVEHfI-unsplash-p-500.jpg   500w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bf453e965872048d4_domino-164_6wVEHfI-unsplash-p-800.jpg   800w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bf453e965872048d4_domino-164_6wVEHfI-unsplash-p-1080.jpg 1080w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bf453e965872048d4_domino-164_6wVEHfI-unsplash-p-1600.jpg 1600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bf453e965872048d4_domino-164_6wVEHfI-unsplash-p-2000.jpg 2000w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bf453e965872048d4_domino-164_6wVEHfI-unsplash-p-2600.jpg 2600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bf453e965872048d4_domino-164_6wVEHfI-unsplash-p-3200.jpg 3200w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622540bf453e965872048d4_domino-164_6wVEHfI-unsplash.jpg        5472w
        "
        alt=""
        class="picture"
      /><img
        src="https://assets-global.website-files.com/661a890279224465a7f7c252/6622540a89793734cb84d979_the-dk-photography-NUoPWImmjCU-unsplash.jpg"
        loading="lazy"
        alt=""
        class="picture"
      />
    </div>
    <div class="line"></div>
    <h1 class="head">A Glimpse of Our Women Apparel Clothing</h1>
    <div class="mg">
      <img
        src="https://assets-global.website-files.com/661a890279224465a7f7c252/6622583b3ddb073c3a1a490b_ryan-moreno-UrcG58VhFzs-unsplash.jpg"
        loading="lazy"
        sizes="(max-width: 991px) 73vw, 41vw"
        srcset="
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622583b3ddb073c3a1a490b_ryan-moreno-UrcG58VhFzs-unsplash-p-500.jpg   500w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622583b3ddb073c3a1a490b_ryan-moreno-UrcG58VhFzs-unsplash-p-800.jpg   800w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622583b3ddb073c3a1a490b_ryan-moreno-UrcG58VhFzs-unsplash-p-1080.jpg 1080w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622583b3ddb073c3a1a490b_ryan-moreno-UrcG58VhFzs-unsplash-p-1600.jpg 1600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622583b3ddb073c3a1a490b_ryan-moreno-UrcG58VhFzs-unsplash-p-2000.jpg 2000w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622583b3ddb073c3a1a490b_ryan-moreno-UrcG58VhFzs-unsplash.jpg        2160w
        "
        alt=""
        class="picture"
      /><img
        src="https://assets-global.website-files.com/661a890279224465a7f7c252/6622583cc41d4d1bc5f4533b_tamara-bellis--XGhtJXY-yY-unsplash.jpg"
        loading="lazy"
        sizes="(max-width: 991px) 73vw, 41vw"
        srcset="
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622583cc41d4d1bc5f4533b_tamara-bellis--XGhtJXY-yY-unsplash-p-500.jpg   500w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622583cc41d4d1bc5f4533b_tamara-bellis--XGhtJXY-yY-unsplash-p-800.jpg   800w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622583cc41d4d1bc5f4533b_tamara-bellis--XGhtJXY-yY-unsplash-p-1080.jpg 1080w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622583cc41d4d1bc5f4533b_tamara-bellis--XGhtJXY-yY-unsplash-p-1600.jpg 1600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622583cc41d4d1bc5f4533b_tamara-bellis--XGhtJXY-yY-unsplash-p-2000.jpg 2000w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622583cc41d4d1bc5f4533b_tamara-bellis--XGhtJXY-yY-unsplash-p-2600.jpg 2600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622583cc41d4d1bc5f4533b_tamara-bellis--XGhtJXY-yY-unsplash-p-3200.jpg 3200w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/6622583cc41d4d1bc5f4533b_tamara-bellis--XGhtJXY-yY-unsplash.jpg        3923w
        "
        alt=""
        class="picture"
      /><img
        src="https://assets-global.website-files.com/661a890279224465a7f7c252/66225858f720a978d4f0623c_donald-giannatti-wFJpsQ-YICQ-unsplash.jpg"
        loading="lazy"
        sizes="(max-width: 991px) 73vw, 41vw"
        srcset="
          https://assets-global.website-files.com/661a890279224465a7f7c252/66225858f720a978d4f0623c_donald-giannatti-wFJpsQ-YICQ-unsplash-p-500.jpg   500w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/66225858f720a978d4f0623c_donald-giannatti-wFJpsQ-YICQ-unsplash-p-800.jpg   800w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/66225858f720a978d4f0623c_donald-giannatti-wFJpsQ-YICQ-unsplash-p-1080.jpg 1080w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/66225858f720a978d4f0623c_donald-giannatti-wFJpsQ-YICQ-unsplash-p-1600.jpg 1600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/66225858f720a978d4f0623c_donald-giannatti-wFJpsQ-YICQ-unsplash-p-2000.jpg 2000w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/66225858f720a978d4f0623c_donald-giannatti-wFJpsQ-YICQ-unsplash-p-2600.jpg 2600w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/66225858f720a978d4f0623c_donald-giannatti-wFJpsQ-YICQ-unsplash-p-3200.jpg 3200w,
          https://assets-global.website-files.com/661a890279224465a7f7c252/66225858f720a978d4f0623c_donald-giannatti-wFJpsQ-YICQ-unsplash.jpg        4016w
        "
        alt=""
        class="picture"
      />
    </div>
</div>
</>
  )
}

export default Picture;