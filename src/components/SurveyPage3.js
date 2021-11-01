import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";

const SurveyPage3 = (props) => {
    return (
        <StyledSurveyPage>
            <section>
                <SurveyInput
                    name={"password"}
                    handleChange={props.handleChange}
                    value={props.userInput["password"]}
                    type="password"
                >
                    Please choose your password:
                </SurveyInput>
                <SurveyInput
                    name={"passwordsecond"}
                    handleChange={props.handleChange}
                    value={props.userInput["passwordsecond"]}
                    type="password"
                >
                    Confirm your password:
                </SurveyInput>
            </section>
            <div>z</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage3;
