import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'
import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'

ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro 
            titulo="Situação do aluno" 
            aluno="Pedro"
            nota={6.3}/>
        <ComParametro 
            titulo="Situação da aluna" 
            aluno="Maria"
            nota={9.9}/>
    </div>,
    document.getElementById('root')
)
