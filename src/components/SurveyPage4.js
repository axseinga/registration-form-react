import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInputChecks from "./SurveyInputChecks";

const SurveyPage4 = (props) => {
    const state = props.plantsState.plantsAmount;
    const inputs = [
        { name: "a", value: "0-20" },
        { name: "b", value: "21-40" },
        { name: "c", value: "41-60" },
        { name: "d", value: "61-more" },
    ];
    const field = "plantsAmount";
    const action = "UPDATE_AMOUNT";
    const type = "radio";
    return (
        <StyledSurveyPage>
            <section>
                <h2>How many houseplants do you have already?</h2>
                {inputs.map((input) => (
                    <SurveyInputChecks
                        key={input.name}
                        name={input.name}
                        type={type}
                        value={input.value}
                        field={field}
                        isradio={true}
                        dispatch={props.dispatch}
                        action={action}
                        isChecked={state.value === input.name}
                        handleChange={props.handleChange}
                        onFocusOut={props.onFocusOut}
                        state={state}
                    >
                        {input.value}
                    </SurveyInputChecks>
                ))}
                {state.touched && state.hasError && <span>{state.error}</span>}
            </section>
            <div>C</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage4;
