import React from "react";

import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio"

export default (_) => (
    <div id="app">
        <h1>Fundamentos React</h1>
        <Aleatorio min={50} max={80}></Aleatorio>
        <Primeiro></Primeiro>
        <ComParametro titulo="Situação do aluno" aluno="Pedro" nota={6.3} />
        <ComParametro titulo="Situação da aluna" aluno="Maria" nota={9.9} />
        <Fragmento />
    </div>
);
