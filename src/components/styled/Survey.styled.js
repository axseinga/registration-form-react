import styled from "styled-components";

const StyledSurvey = styled.div`
    width: 70%;
    min-height: 600px;
    height: 70%;
    background-color: rgba(202, 224, 208, 0.9);
    border-radius: 20px;
    box-shadow: 20px 20px 60px #4e6152, -20px -20px 60px #556659;

    & section {
        padding: 2rem;
        height: 75%;
    }

    & h1 {
        margin-bottom: 1rem;
    }
`;

export default StyledSurvey;
