import React from "react";
import { Button_base, Button_purple, Button_purple_inverted, Button_pink, Button_clear } from "./button_style";
import { ReactComponent as Cohete } from "../../icons/COHETE.svg";

export const Button_class = {
    base: 'base',
    purple: 'purple',
    purple_inverted: 'purple_inverted',
    pink: 'pink',
    clear: 'clear',
};

const button_type = (button_select = Button_class.base) =>
({ 
    [Button_class.base]: Button_base,
    [Button_class.purple]: Button_purple,
    [Button_class.purple_inverted]: Button_purple_inverted,
    [Button_class.pink]: Button_pink,
    [Button_class.clear]: Button_clear,
}[button_select]);

export const Icon_class = {
    none: 'none',
    cohete: 'cohete',
};

const icon_type = (icon_select = Icon_class.none) =>
({ 
    [Icon_class.none]: '',
    [Icon_class.cohete]: <Cohete/>,
}[icon_select]);

const Button = ({ text, button_select, icon_select }) => {
    const New_button = button_type(button_select);
    return(
    <New_button>
        {icon_type(icon_select)}
        {text}
    </New_button>
    )}

export default Button