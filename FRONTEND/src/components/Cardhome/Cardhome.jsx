import React from "react";
import "./Cardhome.css";

function Cardhome({
    title = "Titulo",
    imageSrc = "",
    alt = "foto",
    href = "#",
    target,
    rel,
}) {
    return (
        <a className="cardhome" href={href} target={target} rel={rel}>
            <div className="cardhome__image-wrap">
                {imageSrc ? (
                    <img className="cardhome__image" src={imageSrc} alt={alt} />
                ) : (
                    <span className="cardhome__placeholder">{alt}</span>
                )}
            </div>
            <div className="cardhome__title">{title}</div>
        </a>
    );
}

export default Cardhome;