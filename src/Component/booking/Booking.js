import React, { useEffect, useState } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import * as Yup from "yup";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  adultno: Yup.string()
    .min(0, "Too Short!")
    .max(1000, "Too Long!")
    .required("Required"),
  childno: Yup.string()
    .min(0, "Too Short!")
    .max(1000, "Too Long!")
    .required("Required"),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(1000, "Too Long!")
    .required("Required"),
});

export const Booking = () => {
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
  const [getroom, setroom] = useState();
  const params = useParams();

  useEffect(() => {
    if (params.cat) {
      setroom(params.cat);
    }
  }, [params.cat]);

  return (
    <div>
      <Header />
      <div className="bg-white p-0">
        {/* Page Header Start */}
        <div
          className="container-fluid page-header mb-5 p-0"
          style={{ backgroundImage: "url(/Image/room/carousel-1.jpg)" }}
        >
          <div className="container-fluid page-header-inner py-5">
            <div className="container text-center pb-5">
              <h1 className="display-3 text-white text1 animated slideInDown">
                Booking
              </h1>
            </div>
          </div>
        </div>
        {/* Page Header End */}

        {/* Booking Start */}
        <div className="py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title text-center text-color text-uppercase">
                Room Booking
              </h6>
              <h1 className="mb-5">
                Book A
                <span className="text-color text-uppercase"> {params.cat}</span>
              </h1>
            </div>
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid border border-dark rounded w-75 wow zoomIn"
                      data-wow-delay="0.1s"
                      src="/Image/room/room2.png"
                      style={{ marginTop: "45%", marginLeft: "20%" }}
                    />
                  </div>
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid border border-dark rounded w-100 wow zoomIn"
                      data-wow-delay="0.3s"
                      src="/Image/room/room4.png"
                      style={{ marginTop: "35%" }}
                    />
                  </div>
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid border border-dark rounded w-50 wow zoomIn"
                      data-wow-delay="0.5s"
                      src="/Image/room/room5.png"
                      style={{ marginLeft: "40%", fontSize: "40px" }}
                    />
                  </div>
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid border border-dark rounded w-75 wow zoomIn"
                      data-wow-delay="0.7s"
                      src="/Image/room/room6.png"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="wow fadeInUp" data-wow-delay="0.2s">
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      checkin: "",
                      checkout: "",
                      adultno: "",
                      childno: "",
                      room: "",
                      message: "",
                    }}
                    validationSchema={BookingSchema}
                    onSubmit={async (values) => {
                      console.log(values);
                      values.room = getroom;
                      console.log(values.room);
                      axios
                        .post("http://localhost:3000/booking/add", values)
                        .then((res) => {
                          notify(res.data.status);
                        })
                        .catch((error) => {
                          notify("Error occurred", "error");
                        });
                    }}
                  >
                    <Form>
                      <div className="row gy-3 gx-4">
                        <div className="col-lg-6">
                          <Field
                            type="text"
                            name="name"
                            id="name"
                            className="form-control py-3 border-black"
                            placeholder="First Name"
                          />
                          <ErrorMessage name="name" />
                        </div>
                        <div className="col-lg-6">
                          <Field
                            type="email"
                            name="email"
                            id="email"
                            className="form-control py-3 border-black"
                            placeholder="Email"
                          />
                          <ErrorMessage name="name" />
                        </div>
                        <div className="col-lg-6" style={{ marginTop: "-3%" }}>
                          <Field
                            name="checkin"
                            id="checkin"
                            type="datetime-local"
                            className="form-control py-3 border-black"
                          />
                        </div>
                        <div className="col-lg-6" style={{ marginTop: "-3%" }}>
                          <Field
                            name="checkout"
                            id="checkout"
                            type="datetime-local"
                            className="form-control py-3 border-black"
                          />
                        </div>
                        <div className="col-lg-6" style={{ marginTop: "-3%" }}>
                          <Field
                            name="adultno"
                            id="adultno"
                            type="number"
                            className="form-control py-3 border-black"
                            placeholder="Adult No"
                          />
                          <ErrorMessage name="adultno" />
                        </div>
                        <div className="col-lg-6" style={{ marginTop: "-3%" }}>
                          <Field
                            name="childno"
                            id="childno"
                            type="number"
                            className="form-control py-3 border-black"
                            placeholder="Child No"
                          />
                          <ErrorMessage name="childno" />
                        </div>
                        <div className="col-lg-6" style={{ marginTop: "-3%" }}>
                          <Field
                            name="room"
                            id="room"
                            value={getroom}
                            type="text"
                            className="form-control py-3 border-black"
                            placeholder="Room TYpe"
                          />
                        </div>
                        <div className="col-lg-12">
                          <Field
                            as="textarea"
                            className="form-control border-black  text-black"
                            name="message"
                            id="message"
                            cols={30}
                            rows={5}
                            placeholder="Message"
                          />
                          <ErrorMessage name="message" />
                        </div>
                        <div className="col-lg-12">
                          <button className="btn btn-primary" type="submit">
                            Submit
                          </button>
                        </div>
                      </div>
                    </Form>
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Booking End */}

        <Footer />
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-color btn-lg-square back-to-top">
          <i className="bi bi-arrow-up" />
        </a>
      </div>
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
    </div>
  );
};
