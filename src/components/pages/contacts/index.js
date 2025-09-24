import SEO from "../../data/seo";
import FooterOne from "../../layout/footers/footer-one";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from "../common/breadcrumb";
import ContactMain from "./contact";

const ContactUs = () => {
  return (
    <>
      <SEO pageTitle="Contact Us" />
      <HeaderTwo />
      <BreadCrumb title="Contact Us" innerTitle="Contact Us" />
      <ContactMain />
      <div className="map section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 wow fadeInUp" data-wow-delay=".4s">
              <div className="map-area">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3958.7826469740767!2d80.01427799999999!3d7.151111999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDknMDQuMCJOIDgwwrAwMCc1MS40IkU!5e0!3m2!1sen!2slk!4v1758698795541!5m2!1sen!2slk"
                  loading="lazy"
                  title="London Eye, London, United Kingdom"
                  aria-label="London Eye, London, United Kingdom"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterOne />
    </>
  );
};

export default ContactUs;
