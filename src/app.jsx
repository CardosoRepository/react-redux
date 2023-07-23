import React from "react";
import "./App.css";

import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";

export default (_) => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">
            <Card title="#01 - Primeiro Exercício" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
            <Card title="#02 - Com Parâmetro" color="#E8B71A">
                <ComParametro
                    title="Situação do aluno"
                    student="Pedro"
                    grade={9.3}
                />
            </Card>
            <Card title="#03 - Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>
            <Card title="#04 - Desafio aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>
            <Card title="#05 - Componente com filhos" color="#00C8F8">
                <Family surname="Silva" >
                    <FamilyMember name="Pedro" />
                    <FamilyMember name="Ana"  />
                    <FamilyMember name="Gustavo" />
                </Family>
            </Card>
        </div>
    </div>
);
