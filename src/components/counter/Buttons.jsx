import React from "react";

export default props => {
    return (
        <div>
            <button onClick={props.onDec}>-</button>
            {/* <button onClick={_ => this.inc()}>+</button> */}
            <button onClick={props.onInc}>+</button>
        </div>
    )
}
