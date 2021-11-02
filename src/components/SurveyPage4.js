import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";

const SurveyPage4 = (props) => {
    const state = props.plantsState.plantsAmount;
    return (
        <StyledSurveyPage>
            <section>
                <h2>How many houseplants do you have already?</h2>
                <SurveyInput
                    name={"a"}
                    type="radio"
                    value={"0-20"}
                    isradio={true}
                    dispatch={props.dispatch}
                    action={"UPDATE_AMOUNT"}
                    isChecked={state.value === "a"}
                    handleChange={props.handleChange}
                >
                    0 - 20
                </SurveyInput>
                <SurveyInput
                    name={"b"}
                    type="radio"
                    value={"21-40"}
                    isradio={true}
                    dispatch={props.dispatch}
                    action={"UPDATE_AMOUNT"}
                    isChecked={state.value === "b"}
                    handleChange={props.handleChange}
                >
                    21 - 40
                </SurveyInput>
                <SurveyInput
                    name={"c"}
                    type="radio"
                    value={"41-60"}
                    isradio={true}
                    dispatch={props.dispatch}
                    action={"UPDATE_AMOUNT"}
                    isChecked={state.value === "c"}
                    handleChange={props.handleChange}
                >
                    41 - 60
                </SurveyInput>
                <SurveyInput
                    name={"d"}
                    type="radio"
                    value={"61-more"}
                    isradio={true}
                    dispatch={props.dispatch}
                    action={"UPDATE_AMOUNT"}
                    isChecked={state.value === "d"}
                    handleChange={props.handleChange}
                >
                    61 or more
                </SurveyInput>
            </section>
            <div>C</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage4;
