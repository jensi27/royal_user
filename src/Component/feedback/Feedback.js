import React, { useState } from "react";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

export const Feedback = () => {
  const [image, setImage] = useState(null);
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
  const [getdata, setdata] = useState();
  console.log(getdata);
  return (
    <div>
      <Header />
      <div className="container">
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="col-md-6">
            <div className="form-container">
              <div className="logo text-center mb-3">
                <h2>Feedback</h2>
              </div>
              {/* <form action="#">
                <div className="mb-3 form-field">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter Your Name"
                    required=""
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="file"
                    id="File"
                    required=""
                  />
                </div>
                <div className="mb-3 form-check">
                  <textarea
                    className="form-control"
                    placeholder="Leave a comment here"
                    name="feedback"
                    id="feedback"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="mb-3 form-field">
                  <input
                    type="text"
                    className="form-control"
                    id="profession"
                    name="profession"
                    placeholder="Enter Your profession"
                    required=""
                  />
                </div>
                <input
                  type="submit"
                  className="btn btn-info"
                  defaultValue="Submit"
                />
              </form> */}

              <Formik
                initialValues={{
                  name: "",
                  image: "",
                  message: "",
                  profession: "",
                }}
                validationSchema={FeedbackSchema}
                onSubmit={async (values) => {
                  const formData = new FormData();
                  formData.append("name",values.name);
                  formData.append("image",image);
                  console.log(values);
                  axios
                    .post("http://localhost:3000/feedback/add", values)
                    .then((res) => {
                      console.log(res);
                      notify(res.data.status);
                    })
                    .catch((error) => {
                      // console.log(error);
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
                        type="file"
                        required
                        name="image"
                        id="iamge"
                        className="form-control py-4 text-black"
                        // placeholder="Image"
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
                      <button className="btn-color" type="submit">
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
    </div>
  );
};
