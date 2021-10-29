import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";
import Button from "./Button";

const SurveyPage2 = (props) => {
    return (
        <StyledSurveyPage>
            <Button>prev</Button>
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
            <Button>next</Button>
        </StyledSurveyPage>
    );
};

export default SurveyPage2;
