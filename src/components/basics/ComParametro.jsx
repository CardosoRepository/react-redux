import React from "react";

export default function ComParametro(props) {
    const status = props.grade >= 7 ? "Aprovado" : "Reprovado";
    return (
        <div>
            <h2>{props.title}</h2>
            <p>
                <strong>{props.student} </strong>
                tem nota
                <strong> {props.grade} </strong>e está
                <strong> {status}</strong>!
            </p>
        </div>
    );
}
