import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";

const SurveyPage4 = (props) => {
    return (
        <StyledSurveyPage>
            <section>
                <h2>How many houseplants do you have already?</h2>
                <SurveyInput
                    name={"amount"}
                    type="radio"
                    value={"0-20"}
                    isradio={true}
                    dispatch={props.dispatch}
                    handleChange={props.handleChange}
                >
                    0 - 20
                </SurveyInput>
                <SurveyInput
                    name={"amount"}
                    type="radio"
                    value={"21-40"}
                    isradio={true}
                    dispatch={props.dispatch}
                    handleChange={props.handleChange}
                >
                    21 - 40
                </SurveyInput>
                <SurveyInput
                    name={"amount"}
                    type="radio"
                    value={"41-60"}
                    isradio={true}
                    dispatch={props.dispatch}
                    handleChange={props.handleChange}
                >
                    41 - 60
                </SurveyInput>
                <SurveyInput
                    name={"amount"}
                    type="radio"
                    value={"61-more"}
                    isradio={true}
                    dispatch={props.dispatch}
                    handleChange={props.handleChange}
                >
                    61 or more
                </SurveyInput>
            </section>
            <div>C</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage4;
