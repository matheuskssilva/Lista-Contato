import styled from "styled-components";
import { variaveis } from "../../styles/variaveis";

export const ListaContact = styled.main`
    background-color: ${variaveis.background};
    display: block;
    flex-direction: column;
    padding-left: 3.3125rem;
`

export const Grid = styled.ul`
    margin: 2rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 3.125rem;
`

export const Resultado = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: ${variaveis.grey};
    margin-top: 1.5rem;
`

export const Titulo = styled.h3`
    margin-top: 55px;
    font-size: 2.5rem;
    font-weight: 600;
    color: ${variaveis.white};
`