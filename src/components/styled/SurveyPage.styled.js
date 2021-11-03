import styled from "styled-components";

const StyledSurveyPage = styled.div`
    display: flex;
    font-size: 1.5rem;
    width: 80%;
    height: 90%;
    justify-content: space-evenly;
    align-items: center;

    & section {
        display: flex;
        flex-direction: column;
        width: 60%;
    }

    & section > span {
        color: red;
    }

    & section > div {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    & .page-six {
        font-size: 1.1rem;
        width: 100%;

        & div {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0.3rem 0;
        }
    }

    & .page-seven {
        align-items: center;
        justify-content: center;

        & h2 {
            margin-bottom: 3rem;
        }
    }

    & h2 {
        margin-bottom: 1rem;
    }

    & span {
        font-size: 1rem;
    }

    & > div {
        width: 20%;
        font-family: "Yaogarden";
        font-size: 20rem;
        color: #cae0d0;
        text-shadow: -1px 1px 7px #414843, 1px -1px 7px #ffffff;

        &:hover {
            animation: shake 2s;
        }
    }

    @keyframes shake {
        10%,
        90% {
            transform: translate3d(-1px, 0, 0);
        }

        20%,
        80% {
            transform: translate3d(2px, 0, 0);
        }

        30%,
        50%,
        70% {
            transform: translate3d(-4px, 0, 0);
        }

        40%,
        60% {
            transform: translate3d(4px, 0, 0);
        }
    }
`;

export default StyledSurveyPage;
