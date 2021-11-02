import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInput from "./SurveyInput";

const SurveyPage5 = (props) => {
    const state = props.plantsState.plantsFavourites;
    return (
        <StyledSurveyPage>
            <section>
                <h2>
                    What is you favourite kind of houseplants?{" "}
                    <span>(mark as many as you want!)</span>
                </h2>
                <div>
                    <SurveyInput
                        name={"cacti"}
                        type="checkbox"
                        value={"cacti"}
                        ischeckbox={true}
                        dispatch={props.dispatch}
                        action={"UPDATE_FAV"}
                        isChecked={state["cacti"]}
                    >
                        Cacti & succulents
                    </SurveyInput>
                    <SurveyInput
                        name={"aroids"}
                        type="checkbox"
                        value={"aroids"}
                        ischeckbox={true}
                        dispatch={props.dispatch}
                        action={"UPDATE_FAV"}
                        isChecked={state["aroids"]}
                    >
                        Monsteras & aroids
                    </SurveyInput>
                    <SurveyInput
                        name={"marantas"}
                        type="checkbox"
                        value={"marantas"}
                        ischeckbox={true}
                        dispatch={props.dispatch}
                        action={"UPDATE_FAV"}
                        isChecked={state["marantas"]}
                    >
                        Marantas & Calatheas
                    </SurveyInput>
                    <SurveyInput
                        name={"begonias"}
                        type="checkbox"
                        value={"begonias"}
                        ischeckbox={true}
                        dispatch={props.dispatch}
                        action={"UPDATE_FAV"}
                        isChecked={state["begonias"]}
                    >
                        Begonias
                    </SurveyInput>
                    <SurveyInput
                        name={"alocasias"}
                        type="checkbox"
                        value={"alocasias"}
                        ischeckbox={true}
                        dispatch={props.dispatch}
                        action={"UPDATE_FAV"}
                        isChecked={state["alocasias"]}
                    >
                        Alocasias
                    </SurveyInput>
                    <SurveyInput
                        name={"palms"}
                        type="checkbox"
                        value={"palms"}
                        ischeckbox={true}
                        dispatch={props.dispatch}
                        action={"UPDATE_FAV"}
                        isChecked={state["palms"]}
                    >
                        Palms & arecas
                    </SurveyInput>
                    <SurveyInput
                        name={"ferns"}
                        type="checkbox"
                        value={"ferns"}
                        ischeckbox={true}
                        dispatch={props.dispatch}
                        action={"UPDATE_FAV"}
                        isChecked={state["ferns"]}
                    >
                        Ferns
                    </SurveyInput>
                    <SurveyInput
                        name={"orchids"}
                        type="checkbox"
                        value={"orchids"}
                        ischeckbox={true}
                        dispatch={props.dispatch}
                        action={"UPDATE_FAV"}
                        isChecked={state["orchids"]}
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
