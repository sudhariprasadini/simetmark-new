import { Link } from "react-router-dom";
import logo from "../../assets/img/logo-2.png";
import Social from "../../data/social";

const FooterOne = () => {
  return (
    <>
      <div className="footer__one">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="footer__one-cta">
                <div className="row al-center">
                  <div className="col-lg-8 lg-t-center lg-mb-25">
                    <div className="footer__one-cta-title title_split_anim">
                      <h2>Your Dream Project Awaits — Get Started Today!</h2>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div
                      className="footer__one-cta-icon t-right lg-t-center wow fadeInDown"
                      data-wow-delay="1.2s"
                    >
                      <Link to="/contact-us">
                        <i className="flaticon-right-up"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="footer__one-area">
                <div className="row">
                  <div className="col-lg-4 col-sm-6">
                    <div className="footer__one-widget mr-40">
                      <Link className="logo" to="/">
                        <img src={logo} alt="logo" />
                      </Link>
                      <h5>We’re Solutions for all construction</h5>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 sm-mt-30">
                    <div className="footer__one-widget address">
                      <h4>Address</h4>
                      <div className="footer__one-widget-address">
                        <h6>
                          <Link to="https://www.google.com/maps">
                            3891 Ranch view Richardson, California 62639
                          </Link>
                        </h6>
                        <h4>
                          <Link to="tel:+12320(256)205682058">
                            +123 (256) 568 58
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 lg-mt-30">
                    <div className="footer__one-widget ml-40 lg-ml-0">
                      <h4>Quick links</h4>
                      <div className="footer-widget-menu">
                        <ul>
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about-us">About Us</Link>
                          </li>
                          <li>
                            <Link to="/services">Services</Link>
                          </li>

                          <li>
                            <Link to="/services">Technologies</Link>
                          </li>
                          <li>
                            <Link to="/history">Industries</Link>
                          </li>
                          <li>
                            <Link to="/team">Team </Link>
                          </li>
                          <li>
                            <Link to="/contact-us">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-sm-6 lg-mt-30">
                    <div className="footer__one-widget address">
                      <h4>Support</h4>
                      <div className="footer-widget-menu">
                        <ul>
                          <li>
                            <Link to="/contact-us">Term & Conditions</Link>
                          </li>
                          <li>
                            <Link to="/contact-us">Privacy policy</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__area">
        <div className="container">
          <div className="row al-center">
            <div className="col-md-7">
              <div className="copyright__area-content md-t-center md-mb-10">
                <p>
                  Copyright 2025 – All Rights Reserved By{" "}
                  <Link
                    to="https://themeforest.net/user/wpcodify"
                    target="_blank"
                  >
                    wpCodify
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="copyright__area-social t-right md-t-center">
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterOne;
