import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import ButtonSubmit from "./ButtonSubmit";

const SurveyPage7 = (props) => {
    return (
        <StyledSurveyPage>
            <section className="page-seven">
                <h2>
                    Please check if you filled in all fields and hit submit
                    button.
                </h2>
                <ButtonSubmit type="submit">Submit</ButtonSubmit>
            </section>
            <div>D</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage7;
