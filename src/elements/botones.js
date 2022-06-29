import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
    display:table;
    text-align: center;
    margin-left:auto;
    margin-right: auto;
    padding: 1rem .8rem;
    background-color: green;
    color:#fff;
    text-decoration: none;

    ${({acciones}) => acciones && css`
        margin-left: 0;
        margin-right: 1rem;
    `}
`

export default Button;