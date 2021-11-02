import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";

const SurveyPage1 = (props) => {
    const state = props.plantsState;
    return (
        <StyledSurveyPage>
            <section>
                <SurveyInput
                    name={"name"}
                    dispatch={props.dispatch}
                    type="text"
                    action={"UPDATE_VALUE"}
                    value={state["name"].value}
                >
                    Please tell us your name:
                </SurveyInput>
                <SurveyInput
                    name={"surname"}
                    dispatch={props.dispatch}
                    type="text"
                    action={"UPDATE_VALUE"}
                    value={state["surname"].value}
                >
                    And you surname:
                </SurveyInput>
            </section>
            <div>E</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage1;
