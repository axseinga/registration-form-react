import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";

const SurveyPage5 = (props) => {
    return (
        <StyledSurveyPage>
            <section>
                <h2>
                    What is you favourite kind of houseplants?{" "}
                    <span>(mark as many as you want!)</span>
                </h2>
                <div>
                    <SurveyInput
                        name={"type"}
                        type="checkbox"
                        value={"cacti"}
                        ischeckbox={true}
                        handleChange={props.handleChangeCheckbox}
                    >
                        Cacti & succulents
                    </SurveyInput>
                    <SurveyInput
                        name={"type"}
                        type="checkbox"
                        value={"aroids"}
                        ischeckbox={true}
                        handleChange={props.handleChangeCheckbox}
                    >
                        Monsteras & aroids
                    </SurveyInput>
                    <SurveyInput
                        name={"type"}
                        type="checkbox"
                        value={"marantas"}
                        ischeckbox={true}
                        handleChange={props.handleChangeCheckbox}
                    >
                        Marantas & Calatheas
                    </SurveyInput>
                    <SurveyInput
                        name={"type"}
                        type="checkbox"
                        value={"begonias"}
                        ischeckbox={true}
                        handleChange={props.handleChangeCheckbox}
                    >
                        Begonias
                    </SurveyInput>
                    <SurveyInput
                        name={"type"}
                        type="checkbox"
                        value={"alocasias"}
                        ischeckbox={true}
                        handleChange={props.handleChangeCheckbox}
                    >
                        Alocasias
                    </SurveyInput>
                    <SurveyInput
                        name={"type"}
                        type="checkbox"
                        value={"palms"}
                        ischeckbox={true}
                        handleChange={props.handleChangeCheckbox}
                    >
                        Palms & arecas
                    </SurveyInput>
                    <SurveyInput
                        name={"type"}
                        type="checkbox"
                        value={"ferns"}
                        ischeckbox={true}
                        handleChange={props.handleChangeCheckbox}
                    >
                        Ferns
                    </SurveyInput>
                    <SurveyInput
                        name={"type"}
                        type="checkbox"
                        value={"orchids"}
                        ischeckbox={true}
                        handleChange={props.handleChangeCheckbox}
                    >
                        Orchids
                    </SurveyInput>
                </div>
            </section>
            <div>q</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage5;
