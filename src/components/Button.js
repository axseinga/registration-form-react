import React from "react";
import StyledButton from "./styled/Button.styled";

const Button = (props) => {
    return (
        <StyledButton onClick={props.handleClick} type="button">
            {props.children}
        </StyledButton>
    );
};

export default Button;
