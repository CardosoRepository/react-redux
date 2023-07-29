import React, { useState } from "react";
import "./Mega.css";

export default (props) => {
    function generateNonContainedNumber(min, max, array) {
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
        return array.includes(aleatorio)
            ? generateNonContainedNumber(min, max, array)
            : aleatorio;
    }

    function generateNumbers(qtd) {
        const number = Array(qtd)
            .fill(0)
            .reduce((nums) => {
                const newNumber = generateNonContainedNumber(1, 60, nums);
                return [...nums, newNumber];
            }, [])
            .sort((n1, n2) => n1 - n2);

        return number;
    }

    const [qtd, setQtd] = useState(props.qtd || 6);
    const initialNumbers = Array(qtd).fill(0);
    const [numbers, setNumbers] = useState(initialNumbers);

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numbers.join(" ")}</h3>
            <div>
                <label>Quantidade de Números</label>
                <input
                    min="6"
                    max="12"
                    type="number"
                    value={qtd}
                    onChange={(e) => {
                        setQtd(+e.target.value)
                        setNumbers(generateNumbers(+e.target.value))
                    }}
                />
            </div>
            <button onClick={(_) => setNumbers(generateNumbers(qtd))}>
                Gerar Números
            </button>
        </div>
    );
};
