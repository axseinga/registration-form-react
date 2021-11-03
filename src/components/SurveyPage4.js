import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInputChecks from "./SurveyInputChecks";

const SurveyPage4 = (props) => {
    const state = props.plantsState.plantsAmount;
    const field = "plantsAmount";
    return (
        <StyledSurveyPage>
            <section>
                <h2>How many houseplants do you have already?</h2>
                <SurveyInputChecks
                    name={"a"}
                    type="radio"
                    value={"0-20"}
                    field={field}
                    isradio={true}
                    dispatch={props.dispatch}
                    action={"UPDATE_AMOUNT"}
                    isChecked={state.value === "a"}
                    handleChange={props.handleChange}
                    onFocusOut={props.onFocusOut}
                    state={state}
                >
                    0 - 20
                </SurveyInputChecks>
                <SurveyInputChecks
                    name={"b"}
                    type="radio"
                    value={"21-40"}
                    field={field}
                    isradio={true}
                    dispatch={props.dispatch}
                    action={"UPDATE_AMOUNT"}
                    isChecked={state.value === "b"}
                    handleChange={props.handleChange}
                    onFocusOut={props.onFocusOut}
                    state={state}
                >
                    21 - 40
                </SurveyInputChecks>
                <SurveyInputChecks
                    name={"c"}
                    type="radio"
                    value={"41-60"}
                    field={field}
                    isradio={true}
                    dispatch={props.dispatch}
                    action={"UPDATE_AMOUNT"}
                    isChecked={state.value === "c"}
                    handleChange={props.handleChange}
                    onFocusOut={props.onFocusOut}
                    state={state}
                >
                    41 - 60
                </SurveyInputChecks>
                <SurveyInputChecks
                    name={"d"}
                    type="radio"
                    value={"61-more"}
                    field={field}
                    isradio={true}
                    dispatch={props.dispatch}
                    action={"UPDATE_AMOUNT"}
                    isChecked={state.value === "d"}
                    handleChange={props.handleChange}
                    onFocusOut={props.onFocusOut}
                    state={state}
                >
                    61 or more
                </SurveyInputChecks>
                {state.touched && state.hasError && <span>{state.error}</span>}
            </section>
            <div>C</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage4;
