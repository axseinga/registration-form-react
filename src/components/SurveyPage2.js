import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";

const SurveyPage2 = (props) => {
    return (
        <StyledSurveyPage>
            <section>
                <SurveyInput
                    name={"email"}
                    handleChange={props.handleChange}
                    value={props.userInput}
                >
                    Please fill in your e-mail address:
                </SurveyInput>
                <SurveyInput
                    name={"username"}
                    handleChange={props.handleChange}
                    value={props.userInput}
                >
                    And username:
                </SurveyInput>
            </section>
            <div>r</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage2;
