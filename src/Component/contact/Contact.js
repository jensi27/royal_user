import React, { useState } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  subject: Yup.string()
    .min(2, "Too Short!")
    .max(10, "Too Long!")
    .required("Required"),
  message: Yup.string()
    .min(2, "Too Short!")
    .max(1000, "Too Long!")
    .required("Required"),
});

export const Contact = () => {
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
  return (
    <div>
      <Header />
      <div className="bg-white p-0">
        {/* Page Header Start */}
        <div
          className="container-fluid page-header mb-5 p-0"
          style={{ backgroundImage: "url(Image/contact/contactmain.png)" }}
        >
          <div className="container-fluid page-header-inner py-5">
            <div className="container text-center pb-5">
              <h1 className="display-3 text-white text1 animated slideInDown">
                Contact
              </h1>
            </div>
          </div>
        </div>
        {/* Page Header End */}

        {/* Contact Start */}
        <div className="py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title text-center text-color text-uppercase">
                Contact Us
              </h6>
              <h1 className="mb-5">
                <span className="text-color text-uppercase">Contact</span> For
                Any Query
              </h1>
            </div>
            <div className="row g-4">
              <div className="col-12">
                <div className="row gy-4">
                  <div className="col-md-4">
                    <h6 className="section-title text-start text-color text-uppercase">
                      Booking
                    </h6>
                    <p>
                      <i className="fa fa-envelope-open text-color me-2" />
                      book@gmial.com
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h6 className="section-title text-start text-color text-uppercase">
                      General
                    </h6>
                    <p>
                      <i className="fa fa-envelope-open text-color me-2" />
                      info@gmail.com
                    </p>
                  </div>
                  <div className="col-md-4">
                    <h6 className="section-title text-start text-color text-uppercase">
                      Technical
                    </h6>
                    <p>
                      <i className="fa fa-envelope-open text-color me-2" />
                      tech@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59510.13240780569!2d72.75026122167966!3d21.21664490000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fb32cb262e1%3A0xdf63b74926e5a783!2sRoyal%20Hotel!5e0!3m2!1sen!2sin!4v1707409212682!5m2!1sen!2sin"
                  style={{ minHeight: 370, width: "100%", border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex={0}
                >
                  &gt;
                </iframe>
              </div>
              <div className="col-md-6">
                <div className="wow fadeInUp" data-wow-delay="0.2s">
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      subject: "",
                      message: "",
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={async (values) => {
                      console.log(values);
                      axios
                        .post("http://localhost:3000/contact/add", values)
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
                    <Form>
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
                          <Field
                            type="email"
                            name="email"
                            id="email"
                            className="form-control py-4 text-black"
                            placeholder="Email"
                          />
                          <ErrorMessage name="email" />
                        </div>
                        <div className="col-lg-12">
                          <Field
                            name="subject"
                            id="subject"
                            type="text"
                            className="form-control py-4"
                            placeholder="Subject"
                          />
                          <ErrorMessage name="subject" />
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
                          <button className="btn-color btn btn-primary" type="submit">
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
        {/* Contact End */}
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
