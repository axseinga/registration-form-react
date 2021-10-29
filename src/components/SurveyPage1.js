import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";
import Button from "./Button";

const SurveyPage1 = (props) => {
    return (
        <StyledSurveyPage>
            <Button>prev</Button>
            <section>
                <SurveyInput
                    name={"name"}
                    value={props.name}
                    handleChange={props.setName}
                >
                    Please tell us your name:
                </SurveyInput>
                <SurveyInput
                    name={"surname"}
                    value={props.surname}
                    handleChange={props.setSurname}
                >
                    And you surname:
                </SurveyInput>
            </section>
            <div>E</div>
            <Button>next</Button>
        </StyledSurveyPage>
    );
};

export default SurveyPage1;
