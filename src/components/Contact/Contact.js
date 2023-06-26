// import { useRef } from "react";
// import emailjs from '@emailjs/browser';
// import './Contact.css'
// import { GiFarmer } from 'react-icons/gi'; 


// const Contact = () => {
//     const form = useRef();
//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_2ck7pda', 'template_ezi0bfs', form.current, 'Qy-JEXbd8P7elG-kx')
//           .then((result) => {
//               console.log(result.text);
//           }, (error) => {
//               console.log(error.text);
//           });
//           e.target.reset()
//       };
    

//   return (
//     <section>
//     <div className='container-form'>
//     <h2 className='textcenter'>

//         DELEGATE REGISTRATION
//         <span className="icon-right"><GiFarmer color="orange" /></span>
//       </h2>
      
//         <div className="form-bg">
//         <form ref={form} onSubmit={sendEmail} className='form-control-card'>
//             <input type='text' placeholder='Your Full Name' name='user_name' required />
//             <input type='email' placeholder=' Your Email' name='user_email' required />
//             <input type="number" placeholder="Your Phone" name="user_phone" required />
//             <input type='text' placeholder='Your Organization' name='user_organization' required />
//             <input type='text' placeholder='Your Designation' name='user_designation' required />
//             <input type='text' placeholder='Your State' name='user_state' required />
//             <textarea name='user_address' placeholder='Address ' cols="5" rows= "5"></textarea>
//             <button type='submit' className='btn'>Submit</button>
//         </form>
//         </div>
//     </div>
// </section>
//   )
// }

// export default Contact



import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { GiFarmer } from 'react-icons/gi'; 


const Contact = () => {
    const [showPopup, setShowPopup] = useState(false);
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_2ck7pda', 'template_ezi0bfs', form.current, 'Qy-JEXbd8P7elG-kx')
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

        DELEGATE REGISTRATION
        <span className="icon-right"><GiFarmer color="orange" /></span>
      </h2>
      
        <div className="form-bg">
        <form ref={form} onSubmit={sendEmail} className='form-control-card'>
            <input type='text' placeholder='Your Full Name' name='user_name' required />
            <input type='email' placeholder=' Your Email' name='user_email' required />
            <input type="number" placeholder="Your Phone" name="user_phone" required />
            <input type='text' placeholder='Your Organization' name='user_organization' required />
            <input type='text' placeholder='Your Designation' name='user_designation' required />
            <input type='text' placeholder='Your State' name='user_state' required />
            <textarea name='user_address' placeholder='Address ' cols="5" rows= "5"></textarea>
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

export default Contact

