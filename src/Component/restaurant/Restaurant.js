import React, { useEffect, useState } from "react";
import "./restaurant.css";
import { Carousel } from "antd";
import axios from "axios";
import { Restaurantcardprops } from "./Restaurantcardprops";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Gallerycardprops } from "./Gallerycardprops";
import { Chefcardprops } from "./Chefcardprops";
import { Menucardprops } from "./Menucardprops";

const contentStyle = {
  height: "300px",
  // color: "#fff",
  fontsize: "35px",
  // lineHeight: "160px",
  textAlign: "center",
  background: "#ffff",
};

export const Restaurant = () => {


  /****************why choose */
  const [getdata, setdata] = useState([]);
  console.log(getdata);

  useEffect(() => {
    axios
      .get("http://localhost:3000/choosers/view")
      .then((res) => {
        // console.log(res);
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getdata]);


  /************************gallery */
  const [getdata1, setdata1] = useState([]);
  console.log(getdata1);

  useEffect(() => {
    axios
      .get("http://localhost:3000/rgallery/view")
      .then((res) => {
        // console.log(res);
        setdata1(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  /************************chef */
  const [getdata2, setdata2] = useState([]);
  console.log(getdata2);

  useEffect(() => {
    axios
      .get("http://localhost:3000/chef/view")
      .then((res) => {
        // console.log(res);
        setdata2(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

   /************************chef */
   const [getdata3, setdata3] = useState([]);
   useEffect(() => {
     axios
       .get("http://localhost:3000/menu/view")
       .then((res) => {
         // console.log(res);
         setdata3(res.data.data);
       })
       .catch((error) => {
         console.log(error);
       });
   });

  return (
    <div>
      <Header />
      <main id="main" className="bg-white">
        {/* Page Header Start */}
        <div
          className="container-fluid page-header mb-5 p-0"
          style={{ backgroundImage: "url(Image/restaurant/restaurant4.png)" }}
        >
          <div className="container-fluid page-header-inner py-5">
            <div className="container text-center pb-5">
              <h1 className="display-3 text-white text1 animated slideInDown">
                Restaurant
              </h1>
            </div>
          </div>
        </div>
        {/* Page Header End */}

        {/* ======= Whu Us Section ======= */}
        <section id="why-us" className="why-us">
          <div className="container">
            <center>
              <div className="rsection-title">
                <h3>
                  Why choose <span className="text-color">Our Restaurant</span>
                </h3>
                <p>
                  Location is nearly as important as the quality of your food to
                  new customers.
                </p>
              </div>
            </center>
            <div className="row">
              {getdata.map((el, index) => {
                return (
                  <Restaurantcardprops
                    no={el.no}
                    title={el.title}
                    description={el.description}
                  />
                );
              })}
            </div>
          </div>
        </section>
        {/* End Whu Us Section */}

        {/* ======= Menu Section ======= */}
        <div className="container">
                  <center>
                    <div className="rsection-title mt-5">
                      <h2>
                        Check our tasty <span>Menu</span>
                      </h2>
                      <p>
                        Location is nearly as important as the quality of your
                        food to new customers.
                      </p>
                    </div>
                  </center>
                  <div className="menu-card">
                    {
                      getdata3.map((el,index)=>{
                        return(
                          <Menucardprops
                          image={
                            "http://localhost:3000/images/" + el.image
                          }
                          name={el.name}
                          description={el.description}
                          price={el.price} 
                          />
                        )
                      })
                    }
                  </div>


                  </div>
        {/* End Menu Section */}


        {/* ======= Events Section ======= */}
        <section id="events" className="events">
          <div className="container">
            <center>
              <div>
                <h4 style={{ color: "white" }}>
                  Organize Your <span>Events</span> in our Restaurant
                </h4>
              </div>
            </center>

            <div className="events-slider swiper">
              <div className="swiper-wrapper">
                <Carousel autoplay>
                  <div>
                    <div className="swiper-slide">
                      <div className="row event-item">
                        <div className="col-lg-6">
                          <img
                            src="Image/Event/birthday.jpg"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                          <h3>Birthday Parties</h3>
                          <div className="price">
                            <p>
                              <span>₹15000</span>
                            </p>
                          </div>
                          <p className="fst-italic" style={{ fontSize: 15 }}>
                            Celebrate your birthday by seeing a play, having a
                            picnic in the park, visiting an escape room, or just
                            chilling at home. Or go the traditional route and
                            have a birthday party.
                          </p>
                          <ul style={{ fontSize: "small" }}>
                            <li>
                              <i className="bi bi-check-circle" />
                              They are a time to celebrate, reflect, and show
                              appreciation for the life we have been given.
                            </li>
                            <li>
                              <i className="bi bi-check-circle" /> These may
                              include a complimentary room upgrade, a bottle of
                              champagne or sparkling wine upon arrival, or a
                              special birthday-themed welcome gift.
                            </li>
                          </ul>
                          <p style={{ fontSize: 15 }}>
                            Birthdays remind us to celebrate those special
                            people, as well as their gifts and thank God for
                            placing them in our lives.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="row event-item">
                      <div className="col-lg-6">
                        <img
                          src="Image/Event/privtate.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-6 pt-4 pt-lg-0 content">
                        <h3>Private Parties</h3>
                        <div className="price">
                          <p>
                            <span>₹20000</span>
                          </p>
                        </div>
                        <p className="fst-italic" style={{ fontSize: 15 }}>
                          private party means a gathering of persons for a
                          special occasion; such as a wedding, an anniversary, a
                          luau, etc., where food and drinks are served.
                        </p>
                        <ul style={{ fontSize: "small" }}>
                          <li>
                            <i className="bi bi-check-circle" />
                            Private industries and services are owned or
                            controlled by an individual person or a commercial
                            company, rather than by the state or an official
                            organization.
                          </li>
                          <li>
                            <i className="bi bi-check-circle" /> Private events
                            are exclusive gatherings that are not open to the
                            general public.
                          </li>
                        </ul>
                        <p style={{ fontSize: 15 }}>
                          VIP Events are private events as they are not open to
                          the general public and are, by definition,
                          invitation-only. Invitees to VIP events are not,
                          however, necessarily known to one another.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="row event-item">
                      <div className="col-lg-6">
                        <img
                          src="Image/Event/anniversary.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="col-lg-6 pt-4 pt-lg-0 content">
                        <h3>Anniversary Parties</h3>
                        <div className="price">
                          <p>
                            <span>₹12000</span>
                          </p>
                        </div>
                        <p className="fst-italic" style={{ fontSize: 15 }}>
                          Anniversary parties are special because they bring
                          back fond memories of a couple's special day.
                        </p>
                        <ul style={{ fontSize: "small" }}>
                          <li>
                            <i className="bi bi-check-circle" />
                            Throw a Romantic Candlelit Anniversary Dinner Party.
                          </li>
                          <li>
                            <i className="bi bi-check-circle" /> Celebrate Your
                            Movie-Like Romance with a Movie Night.
                          </li>
                          <li>
                            <i className="bi bi-check-circle" />
                            The services offered for grand anniversary
                            celebrations at The Enjoy City are par-excellent.{" "}
                          </li>
                        </ul>
                        <p style={{ fontSize: 15 }}>
                          It is also a celebration of the couple's enduring
                          commitment and love to each other. Commemorate this
                          special occasion by celebrating it with relatives and
                          friends by holding an anniversary party.
                        </p>
                      </div>
                    </div>
                  </div>
                </Carousel>
                {/* <div className="swiper-slide">
                                    <div className="row event-item">
                                        <div className="col-lg-6">
                                            <img
                                                src="Image/Event/birthday.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                                            <h3>Birthday Parties</h3>
                                            <div className="price">
                                                <p>
                                                    <span>₹15000</span>
                                                </p>
                                            </div>
                                            <p className="fst-italic" style={{ fontSize: 15 }}>
                                                Celebrate your birthday by seeing a play, having a picnic in
                                                the park, visiting an escape room, or just chilling at home.
                                                Or go the traditional route and have a birthday party.
                                            </p>
                                            <ul style={{ fontSize: "small" }}>
                                                <li>
                                                    <i className="bi bi-check-circle" />
                                                    They are a time to celebrate, reflect, and show appreciation
                                                    for the life we have been given.
                                                </li>
                                                <li>
                                                    <i className="bi bi-check-circle" /> These may include a
                                                    complimentary room upgrade, a bottle of champagne or
                                                    sparkling wine upon arrival, or a special birthday-themed
                                                    welcome gift.
                                                </li>
                                                <li>
                                                    <i className="bi bi-check-circle" />A social event at which
                                                    a group of people meet to talk, eat, drink, dance, etc.,
                                                    often in order to celebrate a special occasion
                                                </li>
                                            </ul>
                                            <p style={{ fontSize: 15 }}>
                                                Birthdays remind us to celebrate those special people, as well
                                                as their gifts and thank God for placing them in our lives.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            
                                <div className="swiper-slide">
                                    <div className="row event-item">
                                        <div className="col-lg-6">
                                            <img
                                                src="Image/Event/privtate.jpg"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                                            <h3>Private Parties</h3>
                                            <div className="price">
                                                <p>
                                                    <span>₹20000</span>
                                                </p>
                                            </div>
                                            <p className="fst-italic" style={{ fontSize: 15 }}>
                                                private party means a gathering of persons for a special
                                                occasion; such as a wedding, an anniversary, a luau, etc.,
                                                where food and drinks are served.
                                            </p>
                                            <ul style={{ fontSize: "small" }}>
                                                <li>
                                                    <i className="bi bi-check-circle" />
                                                    Private industries and services are owned or controlled by
                                                    an individual person or a commercial company, rather than by
                                                    the state or an official organization.
                                                </li>
                                                <li>
                                                    <i className="bi bi-check-circle" /> Private events are
                                                    exclusive gatherings that are not open to the general
                                                    public.
                                                </li>
                                                <li>
                                                    <i className="bi bi-check-circle" />
                                                    Private events are used for individuals who want certain
                                                    guests to arrive at the venue.
                                                </li>
                                            </ul>
                                            <p style={{ fontSize: 15 }}>
                                                VIP Events are private events as they are not open to the
                                                general public and are, by definition, invitation-only.
                                                Invitees to VIP events are not, however, necessarily known to
                                                one another.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                              
                                <div className="swiper-slide">
                                    <div className="row event-item">
                                        <div className="col-lg-6">
                                            <img
                                                src="Image/Event/anniversary.png"
                                                className="img-fluid"
                                                alt=""
                                            />
                                        </div>
                                        <div className="col-lg-6 pt-4 pt-lg-0 content">
                                            <h3>Anniversary Parties</h3>
                                            <div className="price">
                                                <p>
                                                    <span>₹12000</span>
                                                </p>
                                            </div>
                                            <p className="fst-italic" style={{ fontSize: 15 }}>
                                                Anniversary parties are special because they bring back fond
                                                memories of a couple's special day.
                                            </p>
                                            <ul style={{ fontSize: "small" }}>
                                                <li>
                                                    <i className="bi bi-check-circle" />
                                                    Throw a Romantic Candlelit Anniversary Dinner Party.
                                                </li>
                                                <li>
                                                    <i className="bi bi-check-circle" /> Celebrate Your
                                                    Movie-Like Romance with a Movie Night.
                                                </li>
                                                <li>
                                                    <i className="bi bi-check-circle" />
                                                    The services offered for grand anniversary celebrations at
                                                    The Enjoy City are par-excellent.{" "}
                                                </li>
                                            </ul>
                                            <p style={{ fontSize: 15 }}>
                                                It is also a celebration of the couple's enduring commitment
                                                and love to each other. Commemorate this special occasion by
                                                celebrating it with relatives and friends by holding an
                                                anniversary party.
                                            </p>
                                        </div>
                                    </div>
                                </div> */}
              </div>
              {/* <div className="swiper-pagination" /> */}
            </div>
          </div>
        </section>
        {/* End Events Section */}

        {/* ======= Gallery Section ======= */}
        <section id="gallery" className="gallery">
          <div className="container-fluid">
            <center>
              <div className="rsection-title">
                <h2 style={{ marginTop: "100px" }}>
                  Some photos from <span>Our Restaurant</span>
                </h2>
                <p>
                  A restaurant is a business that prepares and serves food and
                  drinks to customers.
                </p>
              </div>
            </center>
            <div className="row g-0">
            {getdata1.map((el, index) => {
                return (
                  <Gallerycardprops
                  image={
                    "http://localhost:3000/images/" + el.image
                  }
                   
                  />
                );
              })}
              {/* <div className="col-lg-3 col-md-4">
                <ul className="gallery-item">
                  <li style= {{listStyle : "none"}}
                    href="Image/restaurant/restaurant1.png"
                    className="gallery-lightbox"
                  >
                    <img
                      src="Image/restaurant/restaurant1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4">
                <ul className="gallery-item">
                  <li style= {{listStyle : "none"}}
                    href="Image/restaurant/restaurant2.png"
                    className="gallery-lightbox"
                  >
                    <img
                      src="Image/restaurant/restaurant2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4">
                <ul className="gallery-item">
                  <li style= {{listStyle : "none"}}
                    href="Image/restaurant/restaurant3.png"
                    className="gallery-lightbox"
                  >
                    <img
                      src="Image/restaurant/restaurant3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4">
                <ul className="gallery-item">
                  <li style= {{listStyle : "none"}}
                    href="Image/restaurant/restaurant4.png"
                    className="gallery-lightbox"
                  >
                    <img
                      src="Image/restaurant/restaurant4.png"
                      alt=""
                      className="img-fluid"
                    />
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4">
                <ul className="gallery-item">
                  <li style= {{listStyle : "none"}}
                    href="Image/restaurant/restaurant5.png"
                    className="gallery-lightbox"
                  >
                    <img
                      src="Image/restaurant/restaurant5.png"
                      alt=""
                      className="img-fluid"
                    />
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4">
                <ul className="gallery-item">
                  <li
                    href="Image/restaurant/restaurant6.png"
                    className="gallery-lightbox"
                  >
                    <img
                      src="Image/restaurant/restaurant6.png"
                      alt=""
                      className="img-fluid"
                    />
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4">
                <ul className="gallery-item">
                  <li
                    href="Image/restaurant/restaurant7.png"
                    className="gallery-lightbox"
                  >
                    <img
                      src="Image/restaurant/restaurant7.png"
                      alt=""
                      className="img-fluid"
                    />
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4">
                <ul className="gallery-item">
                  <li
                    href="Image/restaurant/restaurant8.png"
                    className="gallery-lightbox"
                  >
                    <img
                      src="Image/restaurant/restaurant8.png"
                      alt=""
                      className="img-fluid"
                    />
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4">
                <ul className="gallery-item">
                  <li
                    href="Image/restaurant/restaurant9.png"
                    className="gallery-lightbox"
                  >
                    <img
                      src="Image/restaurant/restaurant9.png"
                      alt=""
                      className="img-fluid"
                    />
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </section>
        {/* End Gallery Section */}

        {/* =====5== Chefs Section ======= */}
        <div className="container">
          <center>
            <div className="rsection-title">
              <h2 style={{ marginTop: "100px" }}>
                Our Proffesional <span>Chefs</span>
              </h2>
              <p>
                Our professional chef directs food preparation and oversees
                kitchen operations in restaurants.
              </p>
            </div>
          </center>
          <div className="card__container">
          {getdata2.map((el, index) => {
                return (
                  <Chefcardprops
                  image={
                    "http://localhost:3000/images/" + el.image
                  }
                  name={el.name}
                  profession={el.profession}
                   
                  />
                );
              })}
            {/* <article className="card__article">
              <img
                src="Image/Shef/Shef_1.png"
                alt="image"
                className="card__img"
              />
              <div className="card__data">
                <h2 className="card__title">Sanjeev Kapoor</h2>
                <span className="card__description">Master Chef</span>
              </div>
            </article>
            <article className="card__article">
              <img
                src="Image/Shef/Shef_2.png"
                alt="image"
                className="card__img"
              />
              <div className="card__data">
                <h2 className="card__title">Garima Arora</h2>
                <span className="card__description">Patissier</span>
              </div>
            </article>
            <article className="card__article">
              <img
                src="Image/Shef/Shef_3.png"
                alt="image"
                className="card__img"
              />
              <div className="card__data">
                <h2 className="card__title">Vikas Khanna</h2>
                <span className="card__description">Cook</span>
              </div>
            </article> */}
          </div>
        </div>
        {/* End Chefs Section */}
      </main>
      <Footer />
    </div>
  );
};
