import axios from "axios";
import React, { useEffect, useState } from "react";
import { Teamcardprops } from "./Teamcardprops";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const Team = () => {
  const [getdata, setdata] = useState([]);
  console.log(getdata);

  useEffect(() => {
    axios
      .get("http://localhost:3000/staff/view")
      .then((res) => {
        //console.log(res);
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
          style={{ backgroundImage: "url(Image/team/teammain.png)", }}
        >
          <div className="container-fluid page-header-inner py-5">
            <div className="container text-center pb-5">
              <h1 className="display-3 text-white text1 animated slideInDown">
                Our Team
              </h1>
            </div>
          </div>
        </div>
        {/* Page Header End */}

        {/* Team Start */}
        <div className="py-5">
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
              {getdata.map((el, index) => {
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
        <Footer />
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-color btn-lg-square back-to-top">
          <i className="bi bi-arrow-up" />
        </a>
      </div>
    </div>
  );
};
