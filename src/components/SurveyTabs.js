import React from "react";
import StyledSurveyTabs from "./styled/SurveyTabs.styled";
import SurveyTabItem from "./SurveyTabItem";

const SurveyTabs = (props) => {
    return (
        <StyledSurveyTabs>
            <SurveyTabItem active={true} disabled={false}>
                Start
            </SurveyTabItem>
            <SurveyTabItem active={false} disabled={false}>
                Q1
            </SurveyTabItem>
            <SurveyTabItem active={false} disabled={false}>
                Q2
            </SurveyTabItem>
            <SurveyTabItem active={false} disabled={false}>
                Q3
            </SurveyTabItem>
            <SurveyTabItem active={false} disabled={false}>
                Q4
            </SurveyTabItem>
            <SurveyTabItem active={false} disabled={false}>
                Q5
            </SurveyTabItem>
            <SurveyTabItem active={false} disabled={false}>
                Q6
            </SurveyTabItem>
            <SurveyTabItem active={false} disabled={false}>
                Q7
            </SurveyTabItem>
            <SurveyTabItem active={false} disabled={false}>
                Q8
            </SurveyTabItem>
        </StyledSurveyTabs>
    );
};

export default SurveyTabs;
