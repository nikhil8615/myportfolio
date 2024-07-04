import React, { useState } from "react";
import "./Contact.css";
import arrow_icon from "../../assets/arrow_icon.svg";
import pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const [result, setresult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setresult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dbf3ebf4-eaed-403b-bbe3-ce2006619b1b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert("Email sent successfully");
      setresult(res.message);
      event.target.reset();
    } else {
      setresult(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact_title">
        <h1>Get in touch</h1>
        <img src={pattern} alt="" />
      </div>
      <div className="contact_section">
        <div className="contact_left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to talk on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime
          </p>
          <div className="contact_details">
            <div className="contact_detail">
              <a href="">
                <img src={mail_icon} alt="" /> <p>nikhilbdps1256@gmail.com</p>
              </a>
            </div>
            <div className="contact_detail">
              <img src={call_icon} alt="" /> <p>+91 7352972097</p>
            </div>
            <div className="contact_detail">
              <img src={location_icon} alt="" /> <p>Jalandhar, Punjab</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} action="" className="contact_right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="8"
          ></textarea>
          <button type="submit" className="contact_submit">
            Submit now
          </button>
          <span>{result}</span>
        </form>
      </div>
      <hr />
      <div className="footer_bottom">
        <p className="footer_bottom_left">
          © 2024 Nikhil Singh. All Rights reserved
        </p>
        <div className="footer_bottom_right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
