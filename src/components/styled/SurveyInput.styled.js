import styled, { css } from "styled-components";

const checkboxInputStyle = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    margin-left: 0rem;
    font-size: 1rem;

    & > label {
        align-self: center;
        margin-bottom: 0px;
        margin-right: 0.5rem;
    }

    & > input {
        width: 30px;
        height: 30px;
        color: #082413;
        -webkit-appearance: inherit;
        border-radius: 0px;
        align-self: center;
        border: none;
        background: #c3d9c8;
        box-shadow: inset 2px 2px 4px #94a598, inset -2px -2px 4px #f2fff8;
        font-size: 1.2rem;
        position: relative;

        &:checked:before {
            content: "";
            position: absolute;
            border-radius: 50%;
            left: 25%;
            top: 25%;
            width: 16px;
            height: 16px;
            background-color: #082413;
        }

        &:active,
        &:hover {
            background: #cce3d2;
            box-shadow: inset 2px 2px 4px #94a598, inset -2px -2px 4px #f2fff8;
        }
    }
`;

const radioInputStyle = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 1rem;
    margin-left: 2rem;

    & > label {
        align-self: center;
        margin-bottom: 0px;
        margin-right: 0.5rem;
    }

    & > input {
        width: 30px;
        height: 30px;
        color: #082413;
        -webkit-appearance: inherit;
        border-radius: 50%;
        align-self: center;
        border: none;
        background: #c3d9c8;
        box-shadow: inset 2px 2px 4px #94a598, inset -2px -2px 4px #f2fff8;
        font-size: 1.2rem;
        position: relative;

        &:checked:before {
            content: "";
            position: absolute;
            border-radius: 50%;
            left: 25%;
            top: 25%;
            width: 16px;
            height: 16px;
            background-color: #082413;
        }

        &:active,
        &:hover {
            background: #cce3d2;
            box-shadow: inset 2px 2px 4px #94a598, inset -2px -2px 4px #f2fff8;
        }
    }
`;

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
        width: 100%;
        height: 40px;
        color: #082413;
        border-radius: 15px;
        border: none;
        background: #c3d9c8;
        box-shadow: inset 5px 5px 10px #a0b2a4, inset -5px -5px 10px #e6ffec;
        font-size: 1.2rem;

        &:active,
        &:hover {
            background: #cce3d2;
            box-shadow: inset 5px 5px 12px #a0b2a4, inset -5px -5px 12px #e6ffec;
        }
    }

    ${(props) => props.isradio && radioInputStyle}
    ${(props) => props.ischeckbox && checkboxInputStyle}
`;

export default StyledSurveyInput;
