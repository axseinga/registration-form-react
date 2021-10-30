import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";

const SurveyPage1 = (props) => {
    return (
        <StyledSurveyPage>
            <section>
                <SurveyInput
                    name={"name"}
                    /*value={props.name}
                    handleChange={props.setName}*/
                    handleChange={props.handleChange}
                    value={props.userInput}
                >
                    Please tell us your name:
                </SurveyInput>
                <SurveyInput
                    name={"surname"}
                    handleChange={props.handleChange}
                    value={props.userInput}
                >
                    And you surname:
                </SurveyInput>
            </section>
            <div>E</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage1;
