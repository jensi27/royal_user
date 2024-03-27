import React, { useEffect, useState } from "react";
import "./profile.css";
import axios from "axios";

export const Profile = () => {
  const [getdata, setdata] = useState([]);
  console.log(getdata.image);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/user/show/${localStorage.getItem("userid")}`)
      .then((res) => {
        // console.log(res);
        setdata(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="pr_container">
        <article className="pr_card__article">
        <div className="pr_card__profile">
          <img
            src={"http://localhost:3000/images/" + getdata.image}
            alt="image"
            className="pr_card__profile-img"
          />
        </div>
        <div className="pr_card__tooltip">
          <div className="pr_card__content">
            <div className="pr_card__data">
              <div className="pr_card__image">
                <div className="pr_card__mask">
                  <img
                    src={"http://localhost:3000/images/"+getdata.image}
                    alt="image"
                    className="pr_card__img"
                  />
                </div>
                <span className="pr_card__status" />
              </div>
              <h2 className="pr_card__name">{getdata.name}</h2>
              <h3 className="pr_card__profession">{getdata.mno}</h3>
              <a href="#" className="pr_card__button">
                <i className="pr_ri-chat-3-line" /> <span>{getdata.email}</span>
              </a>
            </div>
          </div>
        </div>
      </article>
      {/* {getdata.map((el, index) => {
        return (
          <Profilecard
            image={"http://localhost:3000/images/" + el.image}
            name={el.name}
            mno={el.mno}
            email={el.email}
          />
        );
      })} */}
    </div>
  );
};
