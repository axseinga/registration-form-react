import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";
import Button from "./Button";

const SurveyPage1 = (props) => {
    return (
        <StyledSurveyPage>
            <Button>prev</Button>
            <section>
                <SurveyInput name={"email"}>
                    Please fill in your e-mail address:
                </SurveyInput>
            </section>
            <div>R</div>
            <Button>next</Button>
        </StyledSurveyPage>
    );
};

export default SurveyPage1;
