import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: #1E1E28;
    }
`;

export const ContentStyled = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ClockStyled = styled.div`
    display: flex;
    gap: 30px;
    `;

export const NumberStyled = styled.div`
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    color: hsl(345, 95%, 68%);
    font-size: 4rem;
    font-weight: 700;
    background: rgb(44,44,68);
    background: -moz-linear-gradient(0deg, rgba(44,44,68,1) 0%, rgba(44,44,68,1) 50%, rgba(52,54,79,1) 50%, rgba(52,54,79,1) 100%);
    background: -webkit-linear-gradient(0deg, rgba(44,44,68,1) 0%, rgba(44,44,68,1) 50%, rgba(52,54,79,1) 50%, rgba(52,54,79,1) 100%);
    background: linear-gradient(0deg, rgba(44,44,68,1) 0%, rgba(44,44,68,1) 50%, rgba(52,54,79,1) 50%, rgba(52,54,79,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#2c2c44",endColorstr="#34364f",GradientType=1);
`;

export const TextStyled = styled.p`
    text-align: center;
    font-size: 14px;
    color: hsl(237, 18%, 59%);
    font-weight: 600;
    letter-spacing: 3px;
`;

export const StyledH1 = styled.h1`
    text-align: center;
    font-size: 30px;
    color: hsl(0, 0%, 100%);
    font-weight: 600;
    letter-spacing: 3px;

    @media (max-width: 768px) {
        font-size: 20px;
    }

    @media (max-width: 425px) {
        font-size: 16px;
    }

    @media (max-width: 375px) {
        font-size: 14px;
    }

`;