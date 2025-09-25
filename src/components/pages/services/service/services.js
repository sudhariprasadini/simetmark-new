import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import servicesData from "../../../data/services-data";

const ServicesMain = () => {
  const slideControl = {
    spaceBetween: 25,
    slidesPerView: 4,
    speed: 1000,
    loop: true,
    autoplay: {
      delay: 4000,
      reverseDirection: false,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".service_next",
      prevEl: ".service_prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1025: {
        slidesPerView: 4,
      },
      1600: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <div className="services__one section-padding">
      <div className="container">
        <div className="row al-end">
          <div className="col-lg-8">
            <div className="services__one-title lg-t-center lg-mb-20">
              <span className="subtitle wow fadeInLeft" data-wow-delay=".4s">
                Our Services
              </span>
              <h2 className="wow fadeInRight" data-wow-delay=".6s">
                Provide Quality Services
              </h2>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInDown" data-wow-delay=".4s">
            <div className="slider-arrow jc-end lg-jc-center mb-10">
              <div className="slider-arrow-prev service_prev">
                <i className="fa-sharp fa-regular fa-arrow-left-long"></i>
              </div>
              <div className="slider-arrow-next service_next">
                <i className="fa-sharp fa-regular fa-arrow-right-long"></i>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row mt-60 wow fadeInUp data_cursor"
          data-wow-delay=".5s"
          data-cursor-text="Drag"
        >
          <div className="col-xl-12">
            <Swiper
              modules={[EffectFade, Autoplay, Navigation]}
              {...slideControl}
            >
              {servicesData?.map((data, id) => (
                <SwiperSlide key={id}>
                  <Link to={`/services/${data.id}`}>
                    <div
                      className="services__one-item"
                      style={{
                        backgroundImage: `url(${data.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div>
                        <h4
                          style={{
                            padding: "10px",
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                            borderRadius: "8px",
                            height: "140px",
                            marginTop: "210px",
                            fontSize: "32px",
                            color: "#fff",
                            hover: { color: "#9D1010" },
                            marginLeft: "10px",
                          }}
                        >
                          <Link to={`/services/${data.id}`}>{data.title}</Link>
                          <br></br>
                          <Link
                            // className="more_btn"
                            to={`/services/${data.id}`}
                            style={{
                              fontSize: "16px",
                              paddingTop: "35px",
                            }}
                          >
                            Read More <i className="flaticon-right-up"></i>
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="wow fadeInDown" data-wow-delay="1.2s">
          <Link className="build_button mt-50" to="/request-quote">
            Request a quote<i className="flaticon-right-up"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesMain;
