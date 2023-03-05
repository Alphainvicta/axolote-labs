import React from "react";

const Input = ({input_type, input_icon, input_text}) => {

    return(
        <div className="input_cont">
            {input_icon}
            <input type={input_type} placeholder={input_text}/>
        </div>
    )
}

export default Input;