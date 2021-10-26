import React from "react";
import StyledSurvey from "./styled/Survey.styled";
import SurveyTabs from "./SurveyTabs";
import SurveyContent from "./SurveyContent";

const Survey = () => {
    return (
        <StyledSurvey>
            <section>
                <h1>Let us know what you think!</h1>
                <SurveyTabs />
                <SurveyContent />
            </section>
            <div>progress bar</div>
        </StyledSurvey>
    );
};

export default Survey;
