import React from "react";
import StyledSurveyPage1 from "./styled/SurveyPage1.styled";
import SurveyInput from "./SurveyInput";
import Button from "./Button";

const SurveyPage1 = (props) => {
    return (
        <StyledSurveyPage1>
            <Button>prev</Button>
            <section>
                <SurveyInput name={"name"}>
                    Please tell us your name:
                </SurveyInput>
                <SurveyInput name={"surname"}>And you surname:</SurveyInput>
            </section>
            <div>la</div>
            <Button>next</Button>
        </StyledSurveyPage1>
    );
};

export default SurveyPage1;
