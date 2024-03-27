import React from 'react'

export const Teamcardprops = (props) => {

    return (
        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="rounded border border-dark shadow bg-dark overflow-hidden ">
                    <div className="position-relative">
                        <img className="img-fluid" src={props.image} alt="" />
                    </div>
                    <div className="text-center teams b1 border border-light p-4">
                        <h5 className="fw-bold text-white text-white mb-0">
                            {
                                props.name
                            }
                        </h5>
                        <small className="text-light">
                            {
                                props.profession
                            }
                        </small>
                    </div>
                </div>
            </div>
    )
}
