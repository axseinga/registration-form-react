import React from "react";
import StyledSurveyTabs from "./styled/SurveyTabs.styled";
import SurveyTabItem from "./SurveyTabItem";

const SurveyTabs = (props) => {
    return (
        <StyledSurveyTabs>
            <SurveyTabItem
                active={props.currStep === 1 ? true : false}
                disabled={false}
                handleChangeStep={props.handleChangeStep}
                step={1}
            >
                Step 1
            </SurveyTabItem>
            <SurveyTabItem
                active={props.currStep === 2 ? true : false}
                disabled={false}
                handleChangeStep={props.handleChangeStep}
                step={2}
            >
                Step 2
            </SurveyTabItem>
            <SurveyTabItem
                active={props.currStep === 3 ? true : false}
                disabled={false}
                handleChangeStep={props.handleChangeStep}
                step={3}
            >
                Step 3
            </SurveyTabItem>
            <SurveyTabItem
                active={props.currStep === 4 ? true : false}
                disabled={false}
                handleChangeStep={props.handleChangeStep}
                step={4}
            >
                Step 4
            </SurveyTabItem>
            <SurveyTabItem
                active={props.currStep === 5 ? true : false}
                disabled={false}
                handleChangeStep={props.handleChangeStep}
                step={5}
            >
                Step 5
            </SurveyTabItem>
            <SurveyTabItem
                active={props.currStep === 6 ? true : false}
                disabled={false}
                handleChangeStep={props.handleChangeStep}
                step={6}
            >
                Step 6
            </SurveyTabItem>
        </StyledSurveyTabs>
    );
};

export default SurveyTabs;
