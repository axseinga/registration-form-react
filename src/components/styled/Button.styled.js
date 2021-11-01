import styled from "styled-components";

const StyledButton = styled.button`
    width: 100px;
    height: 40px;
    color: #082413;
    border-radius: 15px;
    border: none;
    background: #c3d9c8;
    box-shadow: 9px 9px 18px #90a194, -9px -9px 18px #f6fffc;

    &:active,
    &:hover {
        background: #c3d9c8;
        box-shadow: inset -8px -8px 15px rgba(255, 255, 255, 0.6),
            inset 10px 10px 10px rgba(0, 0, 0, 0.25);
    }
`;

export default StyledButton;
