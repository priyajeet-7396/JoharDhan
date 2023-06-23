import { useRef } from "react";
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2ck7pda', 'template_ezi0bfs', form.current, 'Qy-JEXbd8P7elG-kx')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    

  return (
    <section>
    <div className='container-form'>
        <h2 className='textcenter'>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail} className='form-control-card'>
            <input type='text' placeholder='Your Full Name' name='user_name' required />
            <input type='text' placeholder='No. of delegates' name='user_number' required />
            <input type='email' placeholder=' Your Email' name='user_email' required />
            <input type="number" placeholder="Your Phone" name="user_phone" required />
            <input type='text' placeholder='Your Organization' name='user_organization' required />
            <input type='text' placeholder='Your Designation' name='user_designation' required />
            <input type='text' placeholder='Your State' name='user_state' required />
            <textarea name='user_address' placeholder='Address ' cols="10" rows= "10"></textarea>
            <button type='submit' className='btn'>Send Message</button>
        </form>
    </div>
</section>
  )
}

export default Contact

