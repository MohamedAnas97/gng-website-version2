import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
const Contact = () => {
  return (
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={"Contact"} />
      {/* Page Banner End */}
      {/* Contact Form Area start */}
      <section className="contact-page-area py-130 rpy-100 rel z-1">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <div className="our-location-part rmb-55 wow fadeInUp delay-0-2s">
                <div className="row">
                  <div className="col-xl-10">
                    <div className="section-title mb-60">
                      <span className="sub-title mb-15">Contact Us</span>
                      <h2>Ready to Work Your Next Projects</h2>
                    </div>
                  </div>
                </div>
                <div className="row gap-80 pb-30">
                  <div className="col-sm-6">
                    <div className="our-location-address mb-40">
                      <h5>UAE</h5>
                      <p>
                        1113, G&G INNOVATIONS INFORMATION TECHNOLOGY L.L.C,
                        Grosvenor Business Tower, Barsha Heights - Dubai, UAE
                      </p>
                      <a className="mailto" href="mailto:support@gmail.com">
                        info@gnginfotech.com
                      </a>
                      <br />
                      <a className="callto" href="callto:+00012345688">
                        <i className="fas fa-phone" /> +971-04-3349500
                      </a>
                    </div>
                  </div>
                  {/* <div className="col-sm-6">
                    <div className="our-location-address mb-40">
                      <h5>Australia</h5>
                      <p>67 One State Road, 2nd Block Melbourne, Australia</p>
                      <a className="mailto" href="mailto:support@gmail.com">
                        support@gmail.com
                      </a>
                      <br />
                      <a className="callto" href="callto:+00012345688">
                        <i className="fas fa-phone" /> +000 (123) 456 88
                      </a>
                    </div>
                  </div> */}
                </div>
                <h4>Follow Us</h4>
                <div className="social-style-two pt-15">
                  <a
                    href="https://www.facebook.com/profile.php?id=100091663875681"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/g-g-innovations/"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a
                    href="https://www.instagram.com/gnginnovations/"
                    target="_blank"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCZ8YJt8gCmvVIt7-IZtRevQ"
                    target="_blank"
                  >
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6">
              <div className="contact-page-form form-style-one wow fadeInUp delay-0-2s">
                <div className="section-title mb-35">
                  <span className="sub-title mb-15">Get Free Quote</span>
                  <h3>Drop Us a Message</h3>
                </div>
                <form
                  id="contactForm"
                  className="contactForm"
                  action="assets/php/form-process.php"
                  name="contactForm"
                  method="post"
                >
                  <div className="row gap-60 pt-15">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="name">
                          <i className="far fa-user" />
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          defaultValue
                          placeholder="Full Name"
                          required
                          data-error="Please enter your name"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="phone_number">
                          <i className="far fa-phone" />
                        </label>
                        <input
                          type="text"
                          id="phone_number"
                          name="phone_number"
                          className="form-control"
                          defaultValue
                          placeholder="Phone"
                          required
                          data-error="Please enter your Number"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="email">
                          <i className="far fa-envelope" />
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          defaultValue
                          placeholder="Email Address"
                          required
                          data-error="Please enter your Email Address"
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="message">
                          <i className="far fa-pencil" />
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          className="form-control"
                          rows={2}
                          placeholder="Message"
                          required
                          data-error="Please enter your Message"
                          defaultValue={""}
                        />
                        <div className="help-block with-errors" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group pt-5 mb-0">
                        <button
                          type="submit"
                          className="theme-btn style-two w-100"
                        >
                          Send Message us <i className="far fa-arrow-right" />
                        </button>
                        <div id="msgSubmit" className="hidden" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form Area end */}
      {/* Location Map Area Start */}
      <div className="contact-page-map mb-120 rpb-90 wow fadeInUp delay-0-2s">
        <div className="container-fluid">
          <div className="our-location">
          {/* https://www.google.com/maps/embed/v1/place?key=AIzaSyALX8uKIbMmZb4y8W8PY6uTKcOq6G6rauc&q=25.099002,55.177773&zoom=18 */}
            <iframe
              src="https://maps.app.goo.gl/2W8uBrT39heuUeMg9"
              style={{ border: 0, width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      {/* Location Map Area End */}
      {/* footer area start */}
    </Layout>
  );
};
export default Contact;
