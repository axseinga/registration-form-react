import styled from "styled-components";
import backgroundImage from "./../../images/thimo-van-leeuwen-Mc2vQZK6FH0-unsplash.jpg";

const StyledApp = styled.div`
    background-image: url(${backgroundImage});
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #072312;
`;

export default StyledApp;
