import styled, { css } from "styled-components";

const justifyFlexend = css`
    justify-content: flex-end;
`;

const StyledSurveyContent = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(202, 224, 208);
    min-width: 200px;
    height: 500px;
    border-right: 1px solid #072312;
    border-left: 1px solid #072312;
    border-bottom: 1px solid #072312;
    box-shadow: 10px 10px 20px #a0b2a4, -10px -10px 20px #e6ffec;

    & > div:first-child + div {
        width: 80%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;

        ${(props) => props.isFirstPage && justifyFlexend}
    }
`;

export default StyledSurveyContent;
