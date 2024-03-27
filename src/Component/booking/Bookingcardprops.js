import React from "react";

export const Bookingcardprops = () =>{
    return(
        <div className="wow fadeInUp" data-wow-delay="0.2s">
                  <form method="get">
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            required
                          />
                          <label htmlFor="name">{props.name}</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Your Email"
                            required
                          />
                          <label htmlFor="email">{props.email}</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="form-floating date"
                          id="date3"
                          data-target-input="nearest"
                        >
                          <input
                            type="date"
                            className="form-control datetimepicker-input"
                            id="checkin"
                            placeholder="Check In"
                            data-target="#date3"
                            data-toggle="datetimepicker"
                            required
                          />
                          <label htmlFor="checkin">{props.checkin}</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="form-floating date"
                          id="date4"
                          data-target-input="nearest"
                        >
                          <input
                            type="date"
                            className="form-control datetimepicker-input"
                            id="checkout"
                            placeholder="Check Out"
                            data-target="#date4"
                            data-toggle="datetimepicker"
                            required
                          />
                          <label htmlFor="checkout">{props.checkout}</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="number"
                            className="form-control"
                            id="adult"
                            placeholder="Adult Number"
                            required
                          />
                          <label htmlFor="email">{props.adultno}</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="number"
                            className="form-control"
                            id="child"
                            placeholder="Child Number"
                            required
                          />
                          <label htmlFor="email">{props.childno}</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <select className="form-select" id="select3" required>
                            <option value={1}>Luxury Room</option>
                            <option value={2}>Juunior Suite</option>
                            <option value={3}>Super Deluxe</option>
                          </select>
                          <label htmlFor="select3">Select A Room</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            placeholder="Special Request"
                            id="message"
                            style={{ height: 100 }}
                            defaultValue={""}
                            required
                          />
                          <label htmlFor="message">Special Request</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-color w-100 py-3"
                          type="submit"
                        >
                          Book Room
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
    )
}