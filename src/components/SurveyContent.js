import React from "react";
import StyledSurveyContent from "./styled/SurveyContent.styled";
import SurveyPage1 from "./SurveyPage1";
import SurveyPage2 from "./SurveyPage2";

const SurveyContent = (props) => {
    const currentPage = (currPage) => {
        if (currPage === 1) {
            return (
                <SurveyPage1
                    name={props.name}
                    setName={props.setName}
                    surname={props.surname}
                    setSurname={props.setSurname}
                ></SurveyPage1>
            );
        }
        if (currPage === 2) {
            return (
                <SurveyPage2
                    email={props.email}
                    setEmail={props.setEmail}
                    username={props.username}
                    setUsername={props.setUsername}
                ></SurveyPage2>
            );
        }
    };
    return (
        <StyledSurveyContent>
            {currentPage(props.currentStep)}
        </StyledSurveyContent>
    );
};

export default SurveyContent;
