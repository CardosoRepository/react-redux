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
            <Card title="#01 - Primeiro Exercício" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
            <Card title="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro title="Situação do aluno" student="Pedro" grade={9.3} />
            </Card>
            <Card title="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card title="#04 - Desafio aleatório" color="#FA6900">
                <Aleatorio min={1} max={60}></Aleatorio>
            </Card>
        </div>
    </div>
);
