import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInputChecks from "./SurveyInputChecks";

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
                    <SurveyInputChecks
                        name={"cacti"}
                        type="checkbox"
                        value={"cacti"}
                        field={"plantsFavourites"}
                        ischeckbox={true}
                        dispatch={props.dispatch}
                        action={"UPDATE_FAV"}
                        isChecked={state["cacti"]}
                        handleChange={props.handleChange}
                        onFocusOut={props.onFocusOut}
                        state={state}
                    >
                        Cacti & succulents
                    </SurveyInputChecks>
                    <SurveyInputChecks
                        name={"aroids"}
                        type="checkbox"
                        value={"aroids"}
                        field={"plantsFavourites"}
                        ischeckbox={true}
                        dispatch={props.dispatch}
                        action={"UPDATE_FAV"}
                        isChecked={state["aroids"]}
                        handleChange={props.handleChange}
                        onFocusOut={props.onFocusOut}
                        state={state}
                    >
                        Monsteras & aroids
                    </SurveyInputChecks>
                    <SurveyInputChecks
                        name={"marantas"}
                        type="checkbox"
                        value={"marantas"}
                        field={"plantsFavourites"}
                        ischeckbox={true}
                        dispatch={props.dispatch}
                        action={"UPDATE_FAV"}
                        isChecked={state["marantas"]}
                        handleChange={props.handleChange}
                        onFocusOut={props.onFocusOut}
                        state={state}
                    >
                        Marantas & Calatheas
                    </SurveyInputChecks>
                    <SurveyInputChecks
                        name={"begonias"}
                        type="checkbox"
                        value={"begonias"}
                        field={"plantsFavourites"}
                        ischeckbox={true}
                        dispatch={props.dispatch}
                        action={"UPDATE_FAV"}
                        isChecked={state["begonias"]}
                        handleChange={props.handleChange}
                        onFocusOut={props.onFocusOut}
                        state={state}
                    >
                        Begonias
                    </SurveyInputChecks>
                    <SurveyInputChecks
                        name={"alocasias"}
                        type="checkbox"
                        value={"alocasias"}
                        field={"plantsFavourites"}
                        ischeckbox={true}
                        dispatch={props.dispatch}
                        action={"UPDATE_FAV"}
                        isChecked={state["alocasias"]}
                        handleChange={props.handleChange}
                        onFocusOut={props.onFocusOut}
                        state={state}
                    >
                        Alocasias
                    </SurveyInputChecks>
                    <SurveyInputChecks
                        name={"palms"}
                        type="checkbox"
                        value={"palms"}
                        field={"plantsFavourites"}
                        ischeckbox={true}
                        dispatch={props.dispatch}
                        action={"UPDATE_FAV"}
                        isChecked={state["palms"]}
                        handleChange={props.handleChange}
                        onFocusOut={props.onFocusOut}
                        state={state}
                    >
                        Palms & arecas
                    </SurveyInputChecks>
                    <SurveyInputChecks
                        name={"ferns"}
                        type="checkbox"
                        value={"ferns"}
                        field={"plantsFavourites"}
                        ischeckbox={true}
                        dispatch={props.dispatch}
                        action={"UPDATE_FAV"}
                        isChecked={state["ferns"]}
                        handleChange={props.handleChange}
                        onFocusOut={props.onFocusOut}
                        state={state}
                    >
                        Ferns
                    </SurveyInputChecks>
                    <SurveyInputChecks
                        name={"orchids"}
                        type="checkbox"
                        value={"orchids"}
                        field={"plantsFavourites"}
                        ischeckbox={true}
                        dispatch={props.dispatch}
                        action={"UPDATE_FAV"}
                        isChecked={state["orchids"]}
                        handleChange={props.handleChange}
                        onFocusOut={props.onFocusOut}
                        state={state}
                    >
                        Orchids
                    </SurveyInputChecks>
                </div>
                {state.touched && state.hasError && <span>{state.error}</span>}
            </section>
            <div>q</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage5;
