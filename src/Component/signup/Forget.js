import React, { useState } from "react";
import axios from "axios"; // Import Axios
import { Formik, Field, Form } from "formik";

const Forget = () => {
  const [getfeild , setfeild] = useState(false)
  const [getempid , setempid] = useState("")
  return (
    <>
    <Formik
      initialValues={{
        email: "",
        mno: ""
      }}
      onSubmit={async (values) => {
        console.log(values);
        axios.post("http://localhost:3000/user/forgetpass" , values)
        .then((res)=>{
            console.log(res);
            setempid(res.data.data._id)
            setfeild(true)
        })
        .catch((error)=>{
            console.log(error);
        })
      }}
    >
      <Form>
        <Field
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          required="true"
        />
        <Field type="number" name="mno" id="mno" placeholder="Mobile No" required="true" />
        <button className="user_button" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
    <div style={{display : getfeild === false ? "none" : "block"}}>

    
    <Formik
      initialValues={{
        password : ""
      }}
      onSubmit={async (values) => {
        console.log(values);
        axios.put(`http://localhost:3000/user/update/${getempid}` , values)
        .then((res)=>{
            console.log(res);
        })
        .catch((error)=>{
            console.log(error);
        })
      }}
    >
      <Form>
        <Field
          type="password"
          name="password"
          id="password"
          placeholder="enter a new password"
          required="true"
        />
        <button className="user_button" type="submit">
          Submit
        </button>
      </Form>
    </Formik>
    </div>
    </>
    
  );
};

export default Forget;