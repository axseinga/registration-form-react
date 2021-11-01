import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import Button from "./Button";

const SurveyPage7 = (props) => {
    return (
        <StyledSurveyPage>
            <section className="page-seven">
                <h2>
                    Please check if you filled in all fields and hit submit
                    button.
                </h2>
                <input type="submit" value="Submit" />
            </section>
            <div>D</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage7;
