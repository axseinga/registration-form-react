import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";

const SurveyPage2 = (props) => {
    const state = props.plantsState;
    const inputs = [
        { name: "email", label: "Please fill in your e-mail address:" },
        { name: "username", label: "And username:" },
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
                        type="text"
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
            <div>r</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage2;
