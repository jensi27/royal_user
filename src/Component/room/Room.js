import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Roomcardprops } from "./Roomcardprops";
import { Carousel } from "antd";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { Feedbackcardprops } from "./Feedbackcardprops";

const contentStyle = {
  height: "250px",
  // color: "#fff",
  fontsize: "35px",
  // lineHeight: "160px",
  textAlign: "center",
  background: "#ffff",
};

export const Room = () => {
  const history = useHistory();

  const [getdata, setdata] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRooms, setFilteredRooms] = useState([]);


  /***********Room View */
  useEffect(() => {
    axios
      .get("http://localhost:3000/room/view")
      .then((res) => {
        setdata(res.data.data);
        setFilteredRooms(res.data.data); // Initialize filteredRooms with all rooms
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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

  /************Room Serach */
  useEffect(() => {
    // Filter rooms based on search query
    const filtered = getdata.filter((room) =>
      room.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRooms(filtered);
  }, [searchQuery, getdata]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Header />
      <div className="bg-white p-0">
        {/* Page Header Start */}
        <div
          className="container-fluid page-header mb-5 p-0"
          style={{ backgroundImage: "url(Image/room/roommain.png)" }}
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

        {/* Room Start */}
        <div className="py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title text-center text-color text-uppercase">
                Our Rooms
              </h6>
              <h1 className="mb-5">
                Explore Our{" "}
                <span className="text-color text-uppercase">Rooms</span>
              </h1>
              <div className="container d-flex justify-content-md-end">
                <div className="text-center">
                  <input
                    type="text"
                    placeholder="Search rooms..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                </div>
              </div>
            </div>

            {/* Room Search Start */}

            {/* Room Search End */}
            <div className="row g-4">
              {filteredRooms.map((el, index) => (
                <Roomcardprops
                  key={index}
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
                  book={
                    <li
                      className="btn btn-sm btn-color rounded py-2 px-4" style={{backgroundColor : "black"}}
                      onClick={() => history.push("/Booking/" + el.name)}
                    >
                      Book Now
                    </li>
                  }
                />
              ))}
            </div>
          </div>
        </div>
        {/* Room End */}

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

        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-color btn-lg-square back-to-top">
          <i className="bi bi-arrow-up" />
        </a>
      </div>

      <Footer />
    </div>
  );
};