import styled from "styled-components";

const StyledSurveyProgressBar = styled.div`
    box-sizing: content-box;
    width: 80%;
    height: 10px;
    position: relative;
    margin-top: 2rem;
    background: #c3d9c8;
    border-radius: 25px;
    padding: 10px;
    box-shadow: inset 2px 2px 4px #94a598, inset -2px -2px 4px #f2fff8;

    & div {
        display: block;
        width: 60%;
        height: 100%;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        background-color: #082413;
        background-image: linear-gradient(
            center bottom,
            rgb(43, 194, 83) 37%,
            rgb(84, 240, 84) 69%
        );
        box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
            inset 0 -2px 6px rgba(0, 0, 0, 0.4);
        position: relative;
        overflow: hidden;

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background-image: linear-gradient(
                -45deg,
                #94a598 25%,
                transparent 25%,
                transparent 50%,
                #94a598 50%,
                #94a598 75%,
                transparent 75%,
                transparent
            );
            z-index: 1;
            background-size: 50px 50px;
            animation: move 3s linear infinite;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            border-top-left-radius: 20px;
            border-bottom-left-radius: 20px;
            overflow: hidden;
        }
    }

    @keyframes move {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 50px 50px;
        }
    }
`;

export default StyledSurveyProgressBar;
