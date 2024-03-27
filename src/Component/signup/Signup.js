import React, { useState } from "react";
import axios from "axios"; // Import Axios
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./sign.css";
import * as Yup from "yup";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupSchema = Yup.object().shape({
  // image: Yup.image()
  //   .min(2, "Too Short!")
  //   .max(5000, "Too Long!")
  //   .required("Required"),

  name: Yup.string()
    .min(2, "It Accepts minimum 2 character!")
    .max(100, "It Accepts maximum 100 character!")
    .required("Required"),

  // mno: Yup.number()
  //   .min(1, "Too Short!")
  //   .max(11, "Too Long!")
  //   .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),

  password: Yup.string().required("Required"),
});

export const Signup = () => {
  const [image, setImage] = useState(null);
  const [signIn, toggle] = useState(true);
  const history = useHistory();
  localStorage.clear();

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
    <div
      className="body1 signup-page"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "50px",
      }}
    >
      <div className="main1" style={{ backgroundColor: "#4791e1" }}>
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup1">
          <Formik
            initialValues={{
              image: "",
              name: "",
              mno: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={async (values) => {
              const formData = new FormData(); // Create FormData object to send file
              formData.append("image", image);
              formData.append("name", values.name);
              formData.append("mno", values.mno);
              formData.append("email", values.email);
              formData.append("password", values.password);
              axios
                .post("http://localhost:3000/user/add", formData)
                .then((res) => {
                  console.log(res);
                  notify(res.data.status);
                })
                .catch((error) => {
                  console.log(error);
                  notify("Error occurred", "error");
                });
              // setSubmitting(false);
            }}
          >
            <Form>
              <label htmlFor="chk" aria-hidden="true">
                Sign up
              </label>
              <input
                type="file"
                name="file"
                placeholder="file"
                required=""
                onChange={(e) => setImage(e.target.files[0])}
              />
              <Field
                type="text"
                name="name"
                placeholder="User name"
                required=""
              />
              <ErrorMessage name="name" />
              <Field
                type="tel"
                name="mno"
                placeholder="Mobile no"
                required=""
              />
              <ErrorMessage name="mno" />
              <Field
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <ErrorMessage name="email" />
              <Field
                type="password"
                name="password"
                placeholder="Password"
                required=""
              />
              <ErrorMessage name="password" />
              <button className="user_button" type="submit">
                Sign up
              </button>
            </Form>
          </Formik>
        </div>

        <div className="login1">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (values) => {
              axios
                .post("http://localhost:3000/user/login", values)
                .then((res) => {
                  console.log(res);
                  sessionStorage.setItem("usertoken", res.data.token);
                  localStorage.setItem("userid", res.data.data._id);
                  history.push("/");
                })
                .catch((error) => {
                  console.log(error);
                });
              // setSubmitting(false);
            }}
          >
            <Form>
              <label htmlFor="chk" aria-hidden="true">
                Login
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <Field
                type="password"
                name="password"
                placeholder="Password"
                required=""
              />
              <button className="user_button" type="submit">
                Log in
              </button>
              <p
                onClick={() => {
                  history.push("/forget");
                }}
                style={{ paddingLeft: "37%" }}
              >
                forget password?
              </p>
            </Form>
          </Formik>
        </div>
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
