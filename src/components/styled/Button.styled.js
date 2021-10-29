import styled from "styled-components";

const StyledButton = styled.button`
    width: 100px;
    height: 40px;
    color: #082413;
    border-radius: 15px;
    border: none;
    background: linear-gradient(145deg, #d1e8d6, #b0c3b4);
    box-shadow: 10px 10px 20px #a0b2a4, -10px -10px 20px #e6ffec;

    &:active,
    &:hover {
        background: #c3d9c8;
        box-shadow: inset 5px 5px 10px #a0b2a4, inset -5px -5px 10px #e6ffec;
    }
`;

export default StyledButton;
