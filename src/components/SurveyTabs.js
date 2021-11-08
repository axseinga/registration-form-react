import React from "react";
import StyledSurveyTabs from "./styled/SurveyTabs.styled";
import SurveyTabItem from "./SurveyTabItem";

const SurveyTabs = (props) => {
    const tabs = [1, 2, 3, 4, 5, 6, 7];
    return (
        <StyledSurveyTabs>
            {tabs.map((tab, index) => {
                const tabNum = index + 1;
                return (
                    <SurveyTabItem
                        key={tabNum}
                        active={props.currStep === tabNum ? true : false}
                        disabled={false}
                        handleChangeStep={props.handleChangeStep}
                        step={tabNum}
                    >
                        Step {tabNum}
                    </SurveyTabItem>
                );
            })}
        </StyledSurveyTabs>
    );
};

export default SurveyTabs;
