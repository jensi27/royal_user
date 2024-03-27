import React from 'react'

export const Restaurantcardprops = (props) => {
    return (
        <div className="col-lg-4">
            <div className="box">
                <span>{props.no}</span>
                <h4>{props.title}</h4>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    )
}
