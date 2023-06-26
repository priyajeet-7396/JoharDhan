import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { GiFarmer } from 'react-icons/gi'; 
import "./Sponsor_form.css";

const Sponsor_form = () => {
    const [showPopup, setShowPopup] = useState(false);
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_zrwq07r', 'template_jctt39l', form.current, 'oM7kFWkMvR7cHllcS')
        .then((result) => {
          console.log(result.text);
          setShowPopup(true);
          form.current.reset(); // Reset the form
        })
        .catch((error) => {
          console.log(error.text);
        });
    };
  
    const handlePopupClose = () => {
      setShowPopup(false);
    };

  return (
    <section>
    <div className='container-form'>
    <h2 className='textcenter'>

        SPONSORSHIP FORM
        <span className="icon-right"><GiFarmer color="orange" /></span>
      </h2>
      
        <div className="form-bg">
        <form ref={form} onSubmit={sendEmail} className='form-control-card'>
            <input type='text' placeholder='Your Full Name' name='user_name' required />
            <input type='email' placeholder=' Your Email' name='user_email' required />
            <input type="number" placeholder="Your Phone" name="user_phone" required />
            <input type='text' placeholder='Your Organization' name='user_organization' required />
            {/* <p>Select the sponsorship level:</p>
            <label>
              <input type='radio' name='sponsorship_level' value='golden' required /> Golden Sponsorship

            </label>
            <label>
              <input type='radio' name='sponsorship_level' value='silver' required /> Silver Sponsorship
            </label>
            <label>
              <input type='radio' name='sponsorship_level' value='workshop' required /> Workshop Sponsorship
            </label>
            <label>
              <input type='radio' name='sponsorship_level' value='workshop' required /> Stall Charges
            </label> */}
            <textarea placeholder='From the above 4 package please write any one here (Golden/Silver/Workshop/Stall Charges)' name='user_sponsor' required  cols="5" rows= "5"></textarea>
            <button type='submit' className='btn'>Submit</button>
        </form>
        </div>
    </div>
    {showPopup && (
        <div className='popup'>
          <div className='popup-content'>
            <h3>Submission Successful!</h3>
            <p>Thank you for your submission.</p>
            <button onClick={handlePopupClose} className='ok-btn'>OK</button>
          </div>
        </div>
      )}
</section>
  )
}

export default Sponsor_form

