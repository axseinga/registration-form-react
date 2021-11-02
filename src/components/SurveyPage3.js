import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";

const SurveyPage3 = (props) => {
    return (
        <StyledSurveyPage>
            <section>
                <SurveyInput
                    name={"password"}
                    dispatch={props.dispatch}
                    action={"UPDATE_VALUE"}
                    type="password"
                >
                    Please choose your password:
                </SurveyInput>
                <SurveyInput
                    name={"secondPassword"}
                    dispatch={props.dispatch}
                    action={"UPDATE_VALUE"}
                    type="password"
                >
                    Confirm your password:
                </SurveyInput>
            </section>
            <div>z</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage3;
