import styled from "styled-components";
import { variaveis } from "../../styles/variaveis";


export const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 14px;
    background-color: ${variaveis.greyCard} ;
    width: 180px;
    border-radius: 8px;
`

export const Title = styled.h1`
  font-size: 20px;
  color: ${variaveis.white};
  font-weight: 600;
`

export const Contador = styled.span`
    padding: 4px;
    font-size: .9375rem;
    font-weight: 600;
    border: 1px solid ${variaveis.cyan};
    border-radius: 4px;
    color: ${variaveis.cyan};
    width: 25px;
    height: 25px;
    text-align: center;
`