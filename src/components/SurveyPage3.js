import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";

const SurveyPage3 = (props) => {
    const state = props.plantsState;
    const inputs = [
        { name: "password", label: "Please choose your password:" },
        { name: "secondPassword", label: "Confirm your password:" },
    ];
    const action = "UPDATE_VALUE";
    return (
        <StyledSurveyPage>
            <section>
                {inputs.map((input) => (
                    <SurveyInput
                        key={input.name}
                        name={input.name}
                        dispatch={props.dispatch}
                        type="password"
                        action={action}
                        value={state[input.name].value}
                        handleChange={props.handleChange}
                        onFocusOut={props.onFocusOut}
                        state={state}
                    >
                        {input.label}
                    </SurveyInput>
                ))}
            </section>
            <div>z</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage3;
