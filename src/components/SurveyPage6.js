import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveySwitch from "./SurveySwitch";

const SurveyPage6 = (props) => {
    const state = props.plantsState.rules;
    const inputs = [
        {
            name: "rule1",
            rule: "I will not post “offensive” posts, links or images",
        },
        {
            name: "rule2",
            rule: "I will remain respectful of other members at all times",
        },
        {
            name: "rule3",
            rule: "I will not spam, advertise or self-promote in the forums",
        },
        {
            name: "rule4",
            rule: "Before starting a new thread I will search the forum for similar topics.",
        },
    ];
    const action = "UPDATE_RULES";
    const type = "checkbox";
    const field = "rules";
    return (
        <StyledSurveyPage>
            <section className="page-six">
                {inputs.map((input) => (
                    <div key={input.name}>
                        <p>{input.rule}</p>
                        <SurveySwitch
                            name={input.name}
                            type={type}
                            field={field}
                            value={input.name}
                            dispatch={props.dispatch}
                            action={action}
                            isChecked={state[input.name]}
                            state={state}
                            handleChange={props.handleChange}
                            onFocusOut={props.onFocusOut}
                        ></SurveySwitch>
                    </div>
                ))}
                {state.touched && state.hasError && <span>{state.error}</span>}
            </section>
            <div>A</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage6;
