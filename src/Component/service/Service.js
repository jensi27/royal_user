import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import axios from "axios";
import { Servicecardprops } from "./Servicecardprops";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Feedbackcardprops } from "./Feedbackcardprops";

const contentStyle = {
  height: "250px",
  // color: "#fff",
  fontsize: "35px",
  // lineHeight: "160px",
  textAlign: "center",
  background: "#ffff",
};

export const Service = () => {
  const [getdata, setdata] = useState([]);
  console.log(getdata);

  /*************Feedback View */

  const [getfeedback, setfeedback] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/feedback/view")
      .then((res) => {
        // console.log(res);
        setfeedback(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/service/view")
      .then((res) => {
        // console.log(res);
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getdata]);

  return (
    <div>
      <Header />
      <div className="bg-white p-0">
        {/* Page Header Start */}
        <div
          className="container-fluid page-header mb-5 p-0"
          style={{ backgroundImage: "url(Image/service/servicemain.png)" }}
        >
          <div className="container-fluid page-header-inner py-5">
            <div className="container text-center pb-5">
              <h1 className="display-3 text-white  text1 animated slideInDown">
                Services
              </h1>
            </div>
          </div>
        </div>
        {/* Page Header End */}

        {/* Service Start */}
        <div className="py-5 wow zoomIn" data-wow-delay="0.1s">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title text-center text-color text-uppercase">
                Our Services
              </h6>
              <h1 className="mb-5">
                Explore Our{" "}
                <span className="text-color text-uppercase">Services</span>
              </h1>
            </div>
            <div className="row g-4">
              {getdata.map((el, index) => {
                return (
                  <Servicecardprops
                    image={"http://localhost:3000/images/" + el.image}
                    name={el.name}
                    description={el.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* Service End */}

        {/* Testimonial Start */}
        <div
          className="testimonial mt-5 py-5 bg-dark wow zoomIn"
          data-wow-delay="0.1s"
          style={{ marginBottom: 90 }}
        >
          <div className="container">
            <Carousel autoplay slidesToShow={2}>
              {/* Set slidesToShow to 2 */}
              {getfeedback.map((el, index) => {
                return (
                  <Feedbackcardprops
                    name={el.name}
                    image={"http://localhost:3000/images/" + el.image}
                    message={el.message}
                    profession={el.profession}
                  />
                );
              })}
            </Carousel>
          </div>
        </div>
        {/* Testimonial End */}
        <Footer />
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-color btn-lg-square back-to-top">
          <i className="bi bi-arrow-up" />
        </a>
      </div>
    </div>
  );
};
