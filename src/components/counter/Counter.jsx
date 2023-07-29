import React, { Component } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import FormStep from "./FormStep";

import './Counter.css';

class Counter extends Component {
    state = {
        number: this.props.initialNumber || 0,
        step: this.props.initialStep || 5,
    };

    inc = () => {
        this.setState({
            number: this.state.number + this.state.step,
        });
    };

    dec = () => {
        this.setState({
            number: this.state.number - this.state.step,
        });
    };

    setStep = (newStep) => {
        this.setState({
            step: newStep,
        });
    };

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display number={this.state.number}/>
                <FormStep step={this.state.step} setStep={this.setStep}/>
                <Buttons onDec={this.dec} onInc={this.inc}/>
            </div>
        );
    }
}

export default Counter;
