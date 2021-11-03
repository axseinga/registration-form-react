import React from "react";
import StyledSurveyPage from "./styled/SurveyPage.styled";
import SurveyInputChecks from "./SurveyInputChecks";

const SurveyPage5 = (props) => {
    const state = props.plantsState.plantsFavourites;
    const inputs = [
        { name: "cacti", label: "Cacti & succulents" },
        { name: "aroids", label: "Monsteras & aroids" },
        { name: "marantas", label: "Marantas & Calatheas" },
        { name: "begonias", label: "Begonias" },
        { name: "alocasias", label: "Alocasias" },
        { name: "palms", label: "Palms & arecas" },
        { name: "ferns", label: "Ferns" },
        { name: "orchids", label: "Orchids" },
    ];
    const field = "plantsFavourites";
    const type = "checkbox";
    const action = "UPDATE_FAV";
    return (
        <StyledSurveyPage>
            <section>
                <h2>
                    What is you favourite kind of houseplants?{" "}
                    <span>(mark as many as you want!)</span>
                </h2>
                <div>
                    {inputs.map((input) => (
                        <SurveyInputChecks key={input.name}
                            name={input.name}
                            type={type}
                            value={input.name}
                            field={field}
                            ischeckbox={true}
                            dispatch={props.dispatch}
                            action={action}
                            isChecked={state[input.name]}
                            handleChange={props.handleChange}
                            onFocusOut={props.onFocusOut}
                            state={state}
                        >
                            {input.label}
                        </SurveyInputChecks>
                    ))}
                </div>
                {state.touched && state.hasError && <span>{state.error}</span>}
            </section>
            <div>q</div>
        </StyledSurveyPage>
    );
};

export default SurveyPage5;
