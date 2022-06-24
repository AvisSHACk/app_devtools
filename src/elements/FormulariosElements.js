import styled from "styled-components";
import { css } from "styled-components";
const Formulario = styled.form`
    width: 50%;
    margin:auto;
    display: flex;

    ${({autenticacion}) => autenticacion && css`
        flex-direction: column;
    `}
`;

const Texto = styled.input`
    border: 0;
    outline: none;
    border: 2px solid grey;
    width: 100%;
    padding: .8rem 1rem;
    border-radius:50px;

    ${({autenticacion}) => autenticacion && css`
        margin-bottom: 1rem;
    `}
`

const Button = styled.button`
    ${({autenticacion}) => autenticacion && css`
        border: 0;
        outline: none;
        border: 2px solid grey;
        width: 100%;
        padding: .8rem 1rem;
        border-radius:50px;
        background-color: tomato;
        color: #fff;
    `}
`

export { Formulario, Texto, Button };