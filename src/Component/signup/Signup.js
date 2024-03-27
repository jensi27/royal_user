import React, { useState } from "react";
import axios from "axios"; // Import Axios
import { Formik, Field, Form } from "formik";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./sign.css";


export const Signup = () => {
  const [image, setImage] = useState(null);
  const [signIn, toggle] = useState(true);
  const history = useHistory();
  localStorage.clear();

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
              image:"",
              name: "",
              mno: "",
              email: "",
              password: "",
            }}
            onSubmit={async (values) => {
              const formData = new FormData(); // Create FormData object to send file
              formData.append("image",image);
              formData.append("name",values.name);
              formData.append("mno",values.mno);
              formData.append("email",values.email);
              formData.append("password",values.password);
              axios
                .post("http://localhost:3000/user/add", formData)
                .then((res) => {
                  console.log(res);
                })
                .catch((error) => {
                  console.log(error);
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
                onChange={(e) =>
                  setImage(e.target.files[0])
                }
              />
              <Field
                type="text"
                name="name"
                placeholder="User name"
                required=""
              />
              <Field
                type="tel"
                name="mno"
                placeholder="Mobile no"
                required=""
              />
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
                  sessionStorage.setItem("usertoken", res.data.token)
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
              <p onClick={ () => {history.push("/forget")} } style={{paddingLeft:"37%"}}>forget password?</p>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
