import React from "react";
import "./App.css";

import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import StudentsList from "./components/repetition/StudentsList";
import ProductsTable from "./components/repetition/ProductsTable";
import EvenOrOdd from "./components/conditional/EvenOrOdd";
import UserInfo from "./components/conditional/UserInfo";
import DirectFather from "./components/communication/DirectFather";
import IndirectFather from "./components/communication/IndirectFather";
import Input from "./components/form/Input";
import Counter from "./components/counter/Counter";

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
            <Card title="#06 - Repetição" color="#FF432E">
                <StudentsList />
            </Card>
            <Card title="#07 - Desafio Repetição" color="#3A9AD9">
                <ProductsTable />
            </Card>
            <Card title="#08 - Renderização condicional" color="#982395">
                <EvenOrOdd number={20}/>
                <UserInfo user={{ name: 'Fernando' }} />
            </Card>
            <Card title="#09 - Comunicação direta" color="#59323C">
                <DirectFather />
            </Card>
            <Card title="#10 - Comunicação indireta" color="#8BAD39">
                <IndirectFather />
            </Card>
            <Card title="#11 - Componente Controlado (Input)" color="#E45F56">
                <Input />
            </Card>
            <Card title="#12 - Contador" color="#424242">
                <Counter initialNumber={10}/>
            </Card>
        </div>
    </div>
);
