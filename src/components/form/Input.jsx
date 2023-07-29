import React, { useState } from "react";
import "./Input.css";

export default (props) => {
    const [value, setValue] = useState("Inicial");

    function changes(event) {
        setValue(event.target.value);
    }
    return (
        <div className="Input">
            <h2>{value}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={value} onChange={changes} />
                <input value={value} readOnly/>
                <input value={undefined} />
            </div>
        </div>
    );
};
