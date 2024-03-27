import React from "react";

export const Servicecardprops = (props) => {
    return (
        <ul className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <li className="service-item rounded" href="service.html">
                <div className="service-icon bg-transparent border rounded p-1">
                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                        <img src={props.image} style={{ height: "50px", width: "50px" }} />
                    </div>
                </div>
                <h5 className="mb-3">{props.name}</h5>
                <p className="text-body mb-0">
                    {props.description}
                </p>
            </li>
        </ul>
    )
}