import React from "react";

const Contact = () => {
  return (
    <div>
        {/*Main Banner Area Start*/}
    <div class="page-heading about-page-heading" id="top">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="inner-content">
                        <h2>Contact Us</h2>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*Main Banner Area End*/}

      {/* ***** Contact Area Starts ***** */}
      <div className="contact-us">
        <div className="container">
          <div className="row">
            {/* Map Section */}
            <div className="col-lg-6">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7989430.488361082!2d99.69429000331134!3d12.106052245121763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310787bfd4dc3743%3A0xe4b7bfe089f41253!2sCambodia!5e0!3m2!1sen!2skh!4v1732856665354!5m2!1sen!2skh"
                  width="100%"
                  height="400px"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Google Map"
                ></iframe>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="col-lg-6">
              <div className="section-heading">
                <h2>Say somethings to us or give your feedback.</h2>
                <span>
                  Say somethings to us.
                </span>
              </div>
              <form id="contact" action="" method="post">
                <div className="row">
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        id="name"
                        placeholder="Your name"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6">
                    <fieldset>
                      <input
                        name="email"
                        type="text"
                        id="email"
                        placeholder="Your email"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea
                        name="message"
                        rows="6"
                        id="message"
                        placeholder="Your message"
                        required
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="main-dark-button"
                      >
                        <i className="fa fa-paper-plane"></i>
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Contact Area Ends ***** */}

      {/* ***** Subscribe Area Starts ***** */}
      <div className="subscribe">
        <div className="container">
          <div className="row">
            {/* Subscribe Form */}
            <div className="col-lg-8">
              <div className="section-heading">
                <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                <span>
                  Details to details is what makes Hexashop different from the
                  other themes.
                </span>
              </div>
              <form id="subscribe" action="" method="get">
                <div className="row">
                  <div className="col-lg-5">
                    <fieldset>
                      <input
                        name="name"
                        type="text"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-5">
                    <fieldset>
                      <input
                        name="email"
                        type="text"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Your Email Address"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-2">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="main-dark-button"
                      >
                        <i className="fa fa-paper-plane"></i>
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>

            {/* Contact Info */}
            <div className="col-lg-4">
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>
                      Store Location:<br />
                      <span>Cambodia</span>
                    </li>
                    <li>
                      Phone:<br />
                      <span>010-020-0340</span>
                    </li>
                    <li>
                      Office Location:<br />
                      <span>Phnom Penh</span>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>
                      Work Hours:<br />
                      <span>07:30 AM - 9:30 PM Daily</span>
                    </li>
                    <li>
                      Email:<br />
                      <span>info@company.com</span>
                    </li>
                    <li>
                      Social Media:<br />
                      <span>
                        <a href="#">Facebook</a>, <a href="#">Instagram</a>,{" "}
                        <a href="#">Behance</a>, <a href="#">Linkedin</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***** Subscribe Area Ends ***** */}
    </div>
  );
};

export default Contact;
