import styled from "styled-components";

const StyledSurvey = styled.div`
    min-width: 350px;
    width: 70%;
    height: 700px;
    background-color: rgba(202, 224, 208, 0.9);
    border-radius: 20px;
    box-shadow: 20px 20px 60px #4e6152, -20px -20px 60px #556659;

    & section {
        padding: 2rem;
        height: 75%;

        & .ProgressBarContainer {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    & h1 {
        margin-bottom: 1.5rem;
        font-size: 1.3rem;
    }
`;

export default StyledSurvey;
