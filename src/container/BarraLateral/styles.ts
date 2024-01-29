import styled from 'styled-components'
import { variaveis } from '../../styles/variaveis'

export const Aside = styled.aside`
  background-color: ${variaveis.barraBackground};
  width: 250px;
  height: 100vh;
  border-right: 3px solid ${variaveis.greyBorder};
  padding-top: 54px;
  padding-left: 24px;
`

export const Filtros = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 25px;
    margin-top: 65px;
`