import React, { useState } from "react";
import IndirectChild from "./IndirectChild";

export default (props) => {
    const [name, setName] = useState("?");
    const [age, setAge] = useState(0);
    const [nerd, setNerd] = useState(false);

    function supplyInformations(name, age, nerd) {
        setName(name);
        setAge(age);
        setNerd(nerd);
    }
    return (
        <div>
            <span>{name} </span>
            <span>
                <strong>{age} </strong>
            </span>
            <span>{nerd ? "Verdadeiro" : "Falso"}</span>
            <IndirectChild click={supplyInformations} />
        </div>
    );
};
