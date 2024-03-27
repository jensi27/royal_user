import React from "react";

export const Gallerycardprops = (props) =>{
    return(
        <div className="col-lg-3 col-md-4">
                <ul className="gallery-item">
                  <li style= {{listStyle : "none"}}
                    // href="Image/restaurant/restaurant1.png"
                    // className="gallery-lightbox"
                  >
                    <img
                      src={props.image}
                      alt=""
                      className="img-fluid"
                    />
                  </li>
                </ul>
              </div>
    )
}