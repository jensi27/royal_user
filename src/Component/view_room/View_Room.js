import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import axios from "axios";
import { Feedbackcardprops } from "./Feedbackcardprops";

const contentStyle = {
  height: "250px",
  // color: "#fff",
  fontsize: "35px",
  // lineHeight: "160px",
  textAlign: "center",
  background: "#ffff",
};

export const View_Room = () => {
  const history = useHistory();
  const params = useParams();
  const [getdata, setdata] = useState({
    name : ""
  });
  console.log(getdata);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/room/show/${params.id}`)
      .then((res) => {
        // console.log(res);
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

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
  return (
    <div>
      <Header />
      <div className="bg-white p-0">
        {/* Page Header Start */}
        <div
          className="container-fluid page-header mb-5 p-0"
          // style={{ backgroundImage: "url(Image/room/roommain.png)" }}
          style={{ backgroundImage: "url(/Image/room/roommain.png)" }}
        >
          <div className="container-fluid page-header-inner py-5">
            <div className="container text-center pb-5">
              <h1 className="display-3 text-white text1 animated slideInDown">
                Rooms
              </h1>
            </div>
          </div>
        </div>
        {/* Page Header End */}

        {/*room start*/}
        <div className="py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <img
                  className="img-fluid rounded wow zoomIn"
                  data-wow-delay="0.1s"
                  src={"http://localhost:3000/images/"+getdata.image}
                />
              </div>
              <div className="col-lg-6">
                <h2 className="section-title text-start text-color text-uppercase">
                  {getdata.name}
                </h2>
                <div className="d-flex mb-3">
                  <ul>
                    <li>
                      <i className="fa fa-bed text-color me-2" /> {getdata.bed}
                    </li>
                    <li>
                      <i className="fa fa-bath text-color me-2" /> {getdata.bath}
                    </li>
                    <li>
                      <i className="fa fa-wifi text-color me-2" />
                      Wifi
                    </li>
                  </ul>
                </div>
                <h4>₹ {getdata.price} /night</h4>
                <p className="mb-4">
                 {getdata.description}
                </p>
                <ul className="d-flex justify-content-center">
                  <li
                    className="btn btn-sm btn-dark rounded py-2 px-4"
                    onClick={() => history.push("/booking")}
                  >
                    Book Now
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/*room end*/}

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
