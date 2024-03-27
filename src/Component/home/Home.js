import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Carousel } from "antd";
import axios from "axios";
import { Roomcardprops } from "../room/Roomcardprops";
import { Servicecardprops } from "../service/Servicecardprops";
import { Teamcardprops } from "../team/Teamcardprops";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Feedbackcardprops } from "./Feedbackcardprops";
import * as Yup from "yup";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const contentStyle = {
  height: "250px",
  // color: "#fff",
  fontsize: "35px",
  // lineHeight: "160px",
  textAlign: "center",
  background: "#ffff",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  // email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(1000, "Too Long!")
    .required("Required"),
  profession: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
});

export const Home = () => {
  const notify = (message, type = "success") => {
    toast[type](message, {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Zoom,
    });
  };
  const history = useHistory();
  const [image, setImage] = useState(null);
  const [getdata, setdata] = useState([]);
  // console.log(getdata);

  /*********Room View */
  useEffect(() => {
    axios
      .get("http://localhost:3000/room/view")
      .then((res) => {
        // console.log(res);
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getdata]);
  const totalroom = getdata.length;
  // service

  const [getdata1, setdata1] = useState([]);
  // console.log(getdata1);

  /***********Service View */
  useEffect(() => {
    axios
      .get("http://localhost:3000/service/view")
      .then((res) => {
        // console.log(res);
        setdata1(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getdata1]);

  // team

  const [getdata2, setdata2] = useState([]);
  // console.log(getdata2);

  /**********Staff view */
  useEffect(() => {
    axios
      .get("http://localhost:3000/staff/view")
      .then((res) => {
        // console.log(res);
        setdata2(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getdata2]);
  const totalstaff = getdata2.length;

  /********Booking view */
  const [getbookdata, setbookdata] = useState([]);
  // console.log(getbookdata);
  useEffect(() => {
    axios
      .get("http://localhost:3000/booking/view")
      .then((res) => {
        // console.log(res.data.data);
        setbookdata(res.data.data);
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

  const totalbooking = getbookdata.length;

  return (
    <div>
      <Header />
      <div className="">
        {/*owl-carousel start*/}
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <video muted loop autoPlay height={"200%"} width={"100%"}>
                <source src="videos/lobby.mp4" type="video/mp4" />
              </video>
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3 v1">
                  <h5 class="section-title text-white text-uppercase mb-3 animated slideInDown">
                    The Royal
                  </h5>
                  <h1 class="display-3 text-white mb-4 animated slideInDown">
                    Discover A Brand Royal Hotel
                  </h1>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <video muted loop autoPlay height={"200%"} width={"100%"}>
                <source src="videos/room.mp4" type="video/mp4" />
              </video>
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3 v1">
                  <h5 class="section-title text-white text-uppercase mb-3 animated slideInDown">
                    The Royal
                  </h5>
                  <h1 class="display-3 text-white mb-4 animated slideInDown">
                    Discover A Brand Royal Hotel
                  </h1>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <video muted loop autoPlay height={"200%"} width={"100%"}>
                <source src="videos/gym.mp4" type="video/mp4" />
              </video>
              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div class="p-3 v1">
                  <h5 class="section-title text-white text-uppercase mb-3 animated slideInDown">
                    The Royal
                  </h5>
                  <h1 class="display-3 text-white mb-4 animated slideInDown">
                    Discover A Brand Royal Hotel
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        {/*owl-carousel end*/}

        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <h6 className="section-title text-start text-color text-uppercase">
                  About Us
                </h6>
                <h1 className="mb-4">
                  Welcome to{" "}
                  <span className="text-color text-uppercase">The Royal</span>
                </h1>
                <p className="mb-4">
                  We can provide meals and other services to guests, travelers
                  and tourists.Hotel can range from small family-run business to
                  large international chains. we also provides diffrent types of
                  services, such as room services.
                </p>
                <div className="row g-3 pb-4">
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className="fa fa-hotel fa-2x text-color mb-2" />
                        <h2 className="mb-1" data-toggle="counter-up">
                          {totalroom}
                        </h2>
                        <p className="mb-0">Rooms</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className="fa fa-users-cog fa-2x text-color mb-2" />
                        <h2 className="mb-1" data-toggle="counter-up">
                          {totalstaff}
                        </h2>
                        <p className="mb-0">Staffs</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className="fa fa-users fa-2x text-color mb-2" />
                        <h2 className="mb-1" data-toggle="counter-up">
                          {totalbooking}
                        </h2>
                        <p className="mb-0">Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
                <ul>
                  <li
                    className="btn btn-color py-3 px-5 mt-2"
                    onClick={() => history.push("/About")}
                    href="about.html"
                  >
                    Know More
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid rounded border border-dark w-75 wow zoomIn"
                      data-wow-delay="0.1s"
                      src="Image/about/habout1.png"
                      style={{ marginTop: "15%" }}
                    />
                  </div>
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid rounded border border-dark w-100 wow zoomIn"
                      data-wow-delay="0.3s"
                      src="Image/about/habout2.png"
                    />
                  </div>
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid rounded border border-dark w-50 wow zoomIn"
                      data-wow-delay="0.5s"
                      src="Image/about/habout3.png"
                    />
                  </div>
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid rounded border border-dark w-75 wow zoomIn"
                      data-wow-delay="0.7s"
                      src="Image/about/habout4.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}

        {/* Room Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title text-center text-color text-uppercase">
                Our Rooms
              </h6>
              <h1 className="mb-5">
                Explore Our{" "}
                <span className="text-color text-uppercase">Rooms</span>
              </h1>
            </div>
            <div className="row g-4">
              {getdata.map((el, index) => {
                return (
                  <Roomcardprops
                    price={el.price}
                    image={"http://localhost:3000/images/" + el.image}
                    name={el.name}
                    bed={el.bed}
                    bath={el.bath}
                    dec={el.description}
                    view={
                      <li
                        className="btn btn-sm btn-color rounded py-2 px-4"
                        onClick={() => history.push("/View_Room/" + el._id)}
                      >
                        View Detail
                      </li>
                    }
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* Room End */}

        {/* Video Start */}
        <div className="container-fluid">
          <div className="px-0 wow zoomIn" data-wow-delay="0.1s">
            <div className="row">
              <div className="col-lg-6 bg-dark">
                <div className="p-5">
                  <h6 className="section-title text-start text-light text-uppercase mb-3">
                    Luxury Living
                  </h6>
                  <h1 className="text-light">
                    Discover A Brand Luxurious Hotel
                  </h1>
                  <p className="text-light">
                    We can provide meals and other services to guests, travelers
                    and tourists.Hotel can range from small family-run business
                    to large international chains. we also provides diffrent
                    types of services, such as room services.
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <video muted loop autoPlay width="100%" height="100%">
                  <source src="videos/lobby_full.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Service Start */}
        <div className="container-xxl py-5 wow zoomIn" data-wow-delay="0.1s">
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
              {getdata1.map((el, index) => {
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
          // style={{ marginBottom: 90 }}
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

        {/* Team Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title text-center text-color text-uppercase">
                Our Team
              </h6>
              <h1 className="mb-5">
                Explore Our{" "}
                <span className="text-color text-uppercase">Staffs</span>
              </h1>
            </div>
            <div className="row g-4">
              {getdata2.map((el, index) => {
                return (
                  <Teamcardprops
                    image={"http://localhost:3000/images/" + el.image}
                    name={el.name}
                    description={el.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* Team End */}

        {/* FeedBack Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title text-center text-color text-uppercase">
                Feedback
              </h6>
              <h3 className="mb-5">
                Give Me your{" "}
                <span className="text-color text-uppercase">Feedback</span>
              </h3>
            </div>
            <Formik
              initialValues={{
                name: "",
                image: "",
                message: "",
                profession: "",
              }}
              validationSchema={FeedbackSchema}
              onSubmit={async (values) => {
                const formdata = new FormData();
                formdata.append("name", values.name);
                formdata.append("image", image);
                formdata.append("message", values.message);
                formdata.append("profession", values.profession);
                console.log(values);
                axios
                  .post("http://localhost:3000/feedback/add", formdata)
                  .then((res) => {
                    console.log(res);
                    notify(res.data.status);
                  })
                  .catch((error) => {
                    console.log(error);
                    notify("Error occurred", "error");
                  });
              }}
            >
              <center>
                <Form style={{border:"1px solid black"}} className="p-5"> 
                  <div className="row gy-3 gx-4 form-contact">
                    <div className="col-lg-6">
                      <Field
                        type="text"
                        name="name"
                        id="name"
                        className="form-control py-4 text-black"
                        placeholder="First Name"
                      />
                      <ErrorMessage name="name" />
                    </div>
                    <div className="col-lg-6">
                      <input
                        type="file"
                        name="image"
                        id="formFile"
                        className="form-control py-4 text-black"
                        placeholder="Image"
                        onChange={(e) => setImage(e.target.files[0])}
                      />
                    </div>
                    <div className="col-lg-12">
                      <Field
                        as="textarea"
                        className="form-control  text-black"
                        name="message"
                        id="message"
                        cols={30}
                        rows={5}
                        placeholder="Message"
                        defaultValue={""}
                      />
                      <ErrorMessage name="message" />
                    </div>
                    <div className="col-lg-12">
                      <Field
                        name="profession"
                        id="profession"
                        type="text"
                        className="form-control py-4"
                        placeholder="Profession"
                      />
                      <ErrorMessage name="profession" />
                    </div>
                    <div className="col-lg-12">
                      <button className="btn-color btn btn-primary" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </Form>
              </center>
            </Formik>
          </div>
        </div>
        {/* FeedBack End */}

        <Footer />
        <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-color btn-lg-square back-to-top">
          <i className="bi bi-arrow-up" />
        </a>
      </div>
    </div>
  );
};
