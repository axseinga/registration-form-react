import styled from "styled-components";

const StyledSurveyPage1 = styled.div`
    display: flex;
    font-size: 1.5rem;
    width: 100%;
    height: 90%;
    justify-content: space-evenly;
    align-items: center;

    & section {
        display: flex;
        flex-direction: column;
        width: 50%;
    }

    & > div {
        width: 20%;
    }
`;

export default StyledSurveyPage1;
