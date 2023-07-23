import React from "react";
import './App.css';

import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";

export default (_) => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card titulo="#01 - Primeiro Exercício">
                <Primeiro></Primeiro>
            </Card>
            <Card titulo="#02 - Com Parâmetro">
                <ComParametro titulo="Situação do aluno" aluno="Pedro" nota={9.3} />
            </Card>
            <Card titulo="#03 - Fragmento">
                <Fragmento />
            </Card>
            <Card titulo="#04 - Desafio aleatório">
                <Aleatorio min={1} max={60}></Aleatorio>
            </Card>
        </div>
    </div>
);
