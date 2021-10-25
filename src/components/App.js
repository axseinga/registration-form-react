import React from "react";
import { Reset } from "styled-reset";
import StyledApp from "./styled/App.styled";
import Survey from "./Survey";

const App = () => {
    return (
        <>
            <Reset />
            <StyledApp>
                <Survey />
            </StyledApp>
        </>
    );
};

export default App;
