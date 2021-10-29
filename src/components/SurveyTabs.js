import React from "react";
import StyledSurveyTabs from "./styled/SurveyTabs.styled";
import SurveyTabItem from "./SurveyTabItem";

const SurveyTabs = (props) => {
    return (
        <StyledSurveyTabs>
            <SurveyTabItem
                active={true}
                disabled={false}
                handleChangeStep={props.handleChangeStep}
                step={1}
            >
                Step 1
            </SurveyTabItem>
            <SurveyTabItem
                active={false}
                disabled={false}
                handleChangeStep={props.handleChangeStep}
                step={2}
            >
                Step 2
            </SurveyTabItem>
        </StyledSurveyTabs>
    );
};

export default SurveyTabs;
