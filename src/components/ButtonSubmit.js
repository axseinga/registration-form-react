import React from "react";
import StyledButton from "./styled/Button.styled";

const Button = (props) => {
    return <StyledButton type="submit">{props.children}</StyledButton>;
};

export default Button;
