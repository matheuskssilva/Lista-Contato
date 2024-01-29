import styled, { createGlobalStyle } from 'styled-components'
import { variaveis } from './variaveis'

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        list-style: none;
    }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
  width: 100%;
`


export const Subtitle = styled.h2`
  font-size: 1.25rem;
  color: ${variaveis.grey};
  font-weight: 500;
`

export const Input = styled.input`
  width: 180px;
  height: 40px;
  background-color: transparent;
  border: 1px solid ${variaveis.greyCard};
  color: ${variaveis.white};
  border-radius: 8px;
  padding: 4px 13px;
`

export default EstiloGlobal