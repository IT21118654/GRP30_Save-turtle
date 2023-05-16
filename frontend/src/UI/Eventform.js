/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/advocacy.css";


const Eventform = () => {
    return (
     
    <div className="events">
       <div id  ='googleForm'>
       <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfZr_UYCa6S1qr5u66QoFMc-abDPofAUKMODUm5prZ4zeYitQ/viewform?embedded=true" width="640" height="1007" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </div>
    </div>

    )
  }
  
  export default Eventform