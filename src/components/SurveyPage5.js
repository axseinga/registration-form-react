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
                    >
                        Cacti & succulents
                    </SurveyInput>
                    <SurveyInput
                        name={"type"}
                        type="checkbox"
                        value={"aroids"}
                        ischeckbox={true}
                    >
                        Monsteras & aroids
                    </SurveyInput>
                    <SurveyInput
                        name={"type"}
                        type="checkbox"
                        value={"marantas"}
                        ischeckbox={true}
                    >
                        Marantas & Calatheas
                    </SurveyInput>
                    <SurveyInput
                        name={"type"}
                        type="checkbox"
                        value={"begonias"}
                        ischeckbox={true}
                    >
                        Begonias
                    </SurveyInput>
                    <SurveyInput
                        name={"type"}
                        type="checkbox"
                        value={"alocasias"}
                        ischeckbox={true}
                    >
                        Alocasias
                    </SurveyInput>
                    <SurveyInput
                        name={"type"}
                        type="checkbox"
                        value={"palms"}
                        ischeckbox={true}
                    >
                        Palms & arecas
                    </SurveyInput>
                    <SurveyInput
                        name={"type"}
                        type="checkbox"
                        value={"ferns"}
                        ischeckbox={true}
                    >
                        Ferns
                    </SurveyInput>
                    <SurveyInput
                        name={"type"}
                        type="checkbox"
                        value={"orchids"}
                        ischeckbox={true}
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
