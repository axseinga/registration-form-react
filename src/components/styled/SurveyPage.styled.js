import styled from "styled-components";

const StyledSurveyPage = styled.div`
    display: flex;
    font-size: 1.5rem;
    width: 100%;
    height: 90%;
    justify-content: space-evenly;
    align-items: center;

    & section {
        display: flex;
        flex-direction: column;
        width: 45%;
    }

    & > div {
        width: 20%;
        font-family: "Yaogarden";
        font-size: 20rem;
        color: #cae0d0;
        text-shadow: -1px 1px 7px #414843, 1px -1px 7px #ffffff;
    }
`;

export default StyledSurveyPage;
