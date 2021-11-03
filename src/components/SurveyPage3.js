import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";

const SurveyPage3 = (props) => {
    const state = props.plantsState;
    return (
        <StyledSurveyPage>
            <section>
                <SurveyInput
                    name={"password"}
                    dispatch={props.dispatch}
                    action={"UPDATE_VALUE"}
                    type="password"
                    value={state["password"].value}
                    handleChange={props.handleChange}
                    onFocusOut={props.onFocusOut}
                    state={state}
                >
                    Please choose your password:
                </SurveyInput>
                <SurveyInput
                    name={"secondPassword"}
                    dispatch={props.dispatch}
                    action={"UPDATE_VALUE"}
                    type="password"
                    value={state["secondPassword"].value}
                    handleChange={props.handleChange}
                    onFocusOut={props.onFocusOut}
                    state={state}
                >
                    Confirm your password:
                </SurveyInput>
            </section>
            <div>z</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage3;
