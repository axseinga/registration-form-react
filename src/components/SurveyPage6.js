import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveySwitch from "./SurveySwitch";

const SurveyPage6 = (props) => {
    const state = props.plantsState.rules;
    return (
        <StyledSurveyPage>
            <section className="page-six">
                <div>
                    <p>I will not post “offensive” posts, links or images</p>
                    <SurveySwitch
                        name="rule1"
                        type="checkbox"
                        value="rule1"
                        dispatch={props.dispatch}
                        action={"UPDATE_RULES"}
                        isChecked={state["rule1"]}
                    ></SurveySwitch>
                </div>
                <div>
                    I will remain respectful of other members at all times
                    <SurveySwitch
                        name="rule2"
                        type="checkbox"
                        value="rule2"
                        dispatch={props.dispatch}
                        action={"UPDATE_RULES"}
                        isChecked={state["rule2"]}
                    ></SurveySwitch>
                </div>
                <div>
                    I will not spam, advertise or self-promote in the forums
                    <SurveySwitch
                        name="rule3"
                        type="checkbox"
                        value="rule3"
                        dispatch={props.dispatch}
                        action={"UPDATE_RULES"}
                        isChecked={state["rule3"]}
                    ></SurveySwitch>
                </div>
                <div>
                    Before starting a new thread I will search the forum for
                    similar topics.
                    <SurveySwitch
                        name="rule4"
                        type="checkbox"
                        value="rule4"
                        dispatch={props.dispatch}
                        action={"UPDATE_RULES"}
                        isChecked={state["rule4"]}
                    ></SurveySwitch>
                </div>
            </section>
            <div>A</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage6;
