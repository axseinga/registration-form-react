import styled from "styled-components";

const StyledSurveyInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;

    & > label {
        align-self: flex-start;
        margin-bottom: 20px;
    }

    & > input {
        width: 60%;
        height: 40px;
        color: #082413;
        border-radius: 15px;
        border: none;
        background: #c3d9c8;
        box-shadow: inset 5px 5px 10px #a0b2a4, inset -5px -5px 10px #e6ffec;

        &:active,
        &:hover {
            background: #cce3d2;
            box-shadow: inset 5px 5px 12px #a0b2a4, inset -5px -5px 12px #e6ffec;
        }
    }
`;

export default StyledSurveyInput;
