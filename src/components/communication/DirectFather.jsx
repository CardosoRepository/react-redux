import React from "react";
import DirectChild from "./DirectChild";

export default (props) => {
    return (
        <div>
            <DirectChild name="Gabriel" age={20} nerd={true} />
            <DirectChild name="Arthur" age={80} nerd={false} />
        </div>
    );
};
