import React from "react";
import QRCode from "react-qr-code";

export const Qrcode = () => {
    return (
        <div>
            <h1>Qr code jenerator</h1>
            <QRCode value="royal-user-qocr-5sl5r1iae-jensi27s-projects.vercel.app"/>
            {/* <QRCode value="Feedback"/> */}
        </div>
    )
}