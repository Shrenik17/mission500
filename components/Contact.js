import { baseUrl } from "@/constants";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const resetFormData = () => {
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData", formData);
    try {
      const response = await fetch(`${baseUrl}/contact/addForm`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add CSRF token here if required
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (response.status === 400) {
        alert("Form submitted successfully!");
        resetFormData();
      } else {
        alert("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <section className="contact-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading">
              <h2 className="section__title">Get in Touch With Us</h2>
              <p className="section__desc">
                Are you ready to make a splash for change?
                <br /> <br /> Join us in our Water Conservation Mission and be a
                part of the solution. Together, we can create a sustainable,
                water-secure state. <br />
                Come forward and let's make waves for a brighter tomorrow!{" "}
                <br />
                With hope and determination,
              </p>
              <ul className="section__list">
                <li>
                  <a href="https://twitter.com/mission500mh">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/mission500mh">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/channel/UCbkHsi_kfgmYrSQHKlgyciQ">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/mission500mh/">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-shared">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 col-sm-6 form-group">
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                    />
                  </div>

                  <div className="col-lg-6 col-sm-6 form-group">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="col-lg-12 form-group">
                    <input
                      className="form-control"
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="col-lg-12 col-sm-12 form-group">
                    <textarea
                      className="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write a Message"
                    ></textarea>
                  </div>

                  <div className="col-lg-12 col-sm-12">
                    <button className="theme-btn submit__btn" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
