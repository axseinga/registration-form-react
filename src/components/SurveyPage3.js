import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";

const SurveyPage3 = (props) => {
    return (
        <StyledSurveyPage>
            <section>
                <SurveyInput
                    name={"password"}
                    value={props.email}
                    handleChange={props.setEmail}
                >
                    Please choose your password:
                </SurveyInput>
                <SurveyInput
                    name={"passwordsecond"}
                    value={props.username}
                    handleChange={props.setUsername}
                >
                    Confirm your password:
                </SurveyInput>
            </section>
            <div>z</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage3;
