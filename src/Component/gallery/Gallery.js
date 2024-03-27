import axios from "axios";
import React, { useEffect, useState } from "react";
import { Gallerycardprops } from "./Gallerycardprops";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const Gallery = () => {
  const [getdata, setdata] = useState([]);

  // filter
  const [getfildata, setfildata] = useState("all");
  console.log(getfildata);

  useEffect(() => {
    axios
      .get("http://localhost:3000/gallery/view")
      .then((res) => {
        console.log(res);
        setdata(res.data.data);
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
          className="container-fluid page-header p-0"
          style={{ backgroundImage: "url(Image/service/event2.png)" }}
        >
          <div className="container-fluid page-header-inner py-5">
            <div className="container text-center pb-5">
              <h1 className="display-3 text-white text1 animated slideInDown">
                Gallery
              </h1>
            </div>
          </div>
        </div>
        {/* Page Header End */}

        {/* Portfolio Start */}
        <div className="portfolio">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="pb-3">Gallery</h2>
            </div>
            <div className="row">
              <div className="col-12">
                <ul id="portfolio-flters">
                  <li
                    onClick={() => setfildata("all")}
                    className="filter-active"
                  >
                    All
                  </li>
                  <li onClick={() => setfildata("room")}>Room</li>
                  <li onClick={() => setfildata("service")}>Service</li>
                  <li onClick={() => setfildata("restaurant")}>Restaurant</li>
                  <li onClick={() => setfildata("ab")}>About</li>
                </ul>
              </div>
            </div>
            <div className="row g-4 portfolio-container">
              {getdata
                .filter(
                  (el) => getfildata === "all" || el.category === getfildata
                )
                .map((el, index) => (
                  <Gallerycardprops
                    key={index}
                    image={"http://localhost:3000/images/" + el.image}
                  />
                ))}

              {/* <div className="col-lg-4 col-md-6 col-sm-12 portfolio-v portfolio-item pd room">
                                <ul className="">
                                    <li href="Image/room/room1.png" data-lightbox="portfolio">
                                        <img src="Image/room/room1.png" alt="Portfolio Image" />
                                    </li>
                                </ul>
                            </div> */}
            </div>
          </div>
        </div>
        {/* Portfolio Start */}
        <div >
        <Footer/>
          
        </div>
        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-color btn-lg-square back-to-top">
          <i className="bi bi-arrow-up" />
        </a>
      </div>
    </div>
  );
};
