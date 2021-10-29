import styled, { css } from "styled-components";

const activeStyle = css`
    border-top: 1px solid #072312;
    border-right: 1px solid #072312;
    border-left: 1px solid #072312;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom: 1px solid rgba(202, 224, 208, 1);
    background-color: rgb(202, 224, 208);
    box-shadow: none;
    margin-bottom: -1px;

    & > a {
        color: #072312;
    }
`;

const disabledStyle = css`
    border: none;
    cursor: auto;
    &:hover {
        border: none;
    }
    & > a {
        color: gray;
        cursor: auto;
    }
`;

const StyledSurveyTabItem = styled.li`
    width: 100px;
    display: block;
    list-style: none;
    padding: 0.5rem 0.75rem;
    border: 1px solid transparent;
    box-shadow: -10px -10px 20px #e6ffec;
    &:hover {
        background-color: rgb(202, 224, 208);
        border-top: 1px solid #072312;
        border-right: 1px solid #072312;
        border-left: 1px solid #072312;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
    & > a {
        text-decoration: none;

        &:visited {
            color: #072312;
        }
    }
    ${(props) => props.active && activeStyle}
    ${(props) => props.disabled && disabledStyle}
`;

export default StyledSurveyTabItem;
