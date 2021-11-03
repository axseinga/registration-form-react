import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";

const SurveyPage1 = (props) => {
    const state = props.plantsState;
    const inputs = [
        { name: "name", label: "Please tell us your name:" },
        { name: "surname", label: "And you surname:" },
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
            <div>E</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage1;
