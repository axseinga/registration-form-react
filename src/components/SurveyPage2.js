import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";

const SurveyPage2 = (props) => {
    const state = props.plantsState;
    return (
        <StyledSurveyPage>
            <section>
                <SurveyInput
                    name={"email"}
                    dispatch={props.dispatch}
                    action={"UPDATE_VALUE"}
                    type="text"
                    value={state["email"].value}
                >
                    Please fill in your e-mail address:
                </SurveyInput>
                <SurveyInput
                    name={"username"}
                    dispatch={props.dispatch}
                    type="text"
                    action={"UPDATE_VALUE"}
                    value={state["username"].value}
                >
                    And username:
                </SurveyInput>
            </section>
            <div>r</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage2;
