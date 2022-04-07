import "./Button.css";
import React from "react";

function Button(props) {
    return (
        <button className="btn">{props.children}</button>
    )
}

export default Button