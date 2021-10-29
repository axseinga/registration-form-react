import React from "react";
import StyledSurvey from "./styled/Survey.styled";
import SurveyTabs from "./SurveyTabs";
import SurveyContent from "./SurveyContent";

const Survey = () => {
    return (
        <StyledSurvey>
            <section>
                <h1>
                    Welcome to houseplants lovers forum! Please fill in
                    registration form to continue.
                </h1>
                <SurveyTabs />
                <SurveyContent />
            </section>
            <div>progress bar</div>
        </StyledSurvey>
    );
};

export default Survey;
