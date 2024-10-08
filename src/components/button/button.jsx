import React from "react";
import {
  Button_base,
  Button_purple,
  Button_purple_inverted,
  Button_pink,
  Button_clear,
} from "./button_style";
import { ReactComponent as Cohete } from "../../icons/COHETE.svg";
import { ReactComponent as Flecha } from "../../icons/FLECHA.svg";

export const Button_class = {
  base: "base",
  purple: "purple",
  purple_inverted: "purple_inverted",
  pink: "pink",
  clear: "clear",
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
  none: "none",
  cohete: "cohete",
  flecha: "flecha",
};

const icon_type = (icon_select = Icon_class.none) =>
  ({
    [Icon_class.none]: "",
    [Icon_class.cohete]: <Cohete />,
    [Icon_class.flecha]: <Flecha />,
  }[icon_select]);

const Button = ({ button_select, text, icon_select, event }) => {
  const NewButton = button_type(button_select);
  return (
    <NewButton onClick={event}>
      {icon_type(icon_select)}
      {text}
    </NewButton>
  );
};

export default Button;
