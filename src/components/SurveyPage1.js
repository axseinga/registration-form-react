import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";
import Button from "./Button";

const SurveyPage1 = (props) => {
    return (
        <StyledSurveyPage>
            <Button>prev</Button>
            <section>
                <SurveyInput name={"name"}>
                    Please tell us your name:
                </SurveyInput>
                <SurveyInput name={"surname"}>And you surname:</SurveyInput>
            </section>
            <div>E</div>
            <Button>next</Button>
        </StyledSurveyPage>
    );
};

export default SurveyPage1;
