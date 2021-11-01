import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";

const SurveyPage1 = (props) => {
    return (
        <StyledSurveyPage>
            <section>
                <SurveyInput
                    name={"name"}
                    handleChange={props.handleChange}
                    value={props.userInput["name"]}
                    type="text"
                >
                    Please tell us your name:
                </SurveyInput>
                <SurveyInput
                    name={"surname"}
                    handleChange={props.handleChange}
                    value={props.userInput["surname"]}
                    type="text"
                >
                    And you surname:
                </SurveyInput>
            </section>
            <div>E</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage1;
