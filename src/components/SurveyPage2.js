import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";

const SurveyPage2 = (props) => {
    return (
        <StyledSurveyPage>
            <section>
                <SurveyInput
                    name={"email"}
                    value={props.email}
                    handleChange={props.setEmail}
                >
                    Please fill in your e-mail address:
                </SurveyInput>
                <SurveyInput
                    name={"username"}
                    value={props.username}
                    handleChange={props.setUsername}
                >
                    And username:
                </SurveyInput>
            </section>
            <div>r</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage2;