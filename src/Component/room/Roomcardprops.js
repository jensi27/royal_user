import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Roomcardprops = (props) => {
    const history = useHistory()
    return (
        <div
            className="col-lg-4 col-md-6 wow fadeInUp cards"
            data-wow-delay="0.1s"
        >
            <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                    <img className="img-fluid" src={props.image} alt="" />
                    <small className="position-absolute start-0 top-100 translate-middle-y btn-color text-white rounded py-1 px-3 ms-4">
                        {" "}
                        {props.price} /Night
                    </small>
                </div>
                <div className="p-4 mt-2">
                    <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0"> {props.name} </h5>
                        <div className="ps-2">
                            <small className="fa fa-star text-color" />
                            <small className="fa fa-star text-color" />
                            <small className="fa fa-star text-color" />
                            <small className="fa fa-star text-color" />
                            <small className="fa fa-star text-color" />
                        </div>
                    </div>
                    <div className="d-flex mb-3">
                        <small className="border-end me-3 pe-3">
                            <i className="fa fa-bed text-color me-2" /> {props.bed}
                        </small>
                        <small className="border-end me-3 pe-3">
                            <i className="fa fa-bath text-color me-2" /> {props.bath}
                        </small>
                        <small>
                            <i className="fa fa-wifi text-color me-2" />
                            Wifi
                        </small>
                    </div>
                    <p
                        className="text-body mb-3"
                        style={{ height: 100, overflow: "hidden" }}
                    >
                        {" "}
                        {props.dec}
                    </p>
                    <ul className="d-flex justify-content-center" style={{paddingLeft : "0rem"}}>
                        {props.view}
                       {props.book}
                    </ul>
                </div>
            </div>
        </div>
    )
}