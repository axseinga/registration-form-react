import styled from "styled-components";

const StyledSurveySwitch = styled.div`
    height: 40px;
    position: relative;

    & input {
        position: absolute;
        opacity: 0;
        z-index: -2;

        & + label {
            position: relative;
            display: inline-block;
            width: 110px;
            height: 40px;
            border-radius: 20px;
            margin: 0;
            cursor: pointer;
            box-shadow: inset -8px -8px 15px rgba(255, 255, 255, 0.6),
                inset 10px 10px 10px rgba(0, 0, 0, 0.25);

            &::before {
                position: absolute;
                content: "NO";
                font-size: 13px;
                text-align: center;
                line-height: 25px;
                top: 8px;
                left: 8px;
                width: 45px;
                height: 25px;
                border-radius: 20px;
                background-color: #d1dad3;
                box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5),
                    3px 3px 5px rgba(0, 0, 0, 0.25);
                transition: 0.3s ease-in-out;
            }
        }

        &:checked + label::before {
            left: 50%;
            content: "YES";
            color: #fff;
            background-color: #082413;
            box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.5),
                3px 3px 5px #082413;
        }
    }
`;

export default StyledSurveySwitch;
