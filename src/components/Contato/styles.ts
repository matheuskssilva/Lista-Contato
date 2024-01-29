import styled from "styled-components"
import { variaveis } from "../../styles/variaveis"

 export const Card = styled.div`
     background-color: ${variaveis.greyCard};
     border-radius: 8px;
     width: 264px;
     height: 237px;
     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
     padding: 17px 33px;
     flex-direction: column;
     
 `

 export const Main = styled.div`
     display: flex;
     align-items: left;
     flex-direction: column;
     justify-content: space-between;
 `

 export const Content = styled.div`
     display: flex;
     justify-content: space-between;
`
 export const Edit = styled.button`
     background-color: transparent;
     border: none;
     cursor: pointer;
 `

 export const Titulo = styled.h3`
     font-size: 1.5625rem;
     font-weight: 600;
     color: ${variaveis.white};
 `

 export const Tag = styled.span`
     font-size: .625rem;
     font-weight: 600;
     border: 1px solid ${variaveis.cyan};
     margin-top: 5px;
     border-radius: 4px;
     padding: 4px 16px;
     width: 70px;
     color: ${variaveis.cyan};
 `

 export const Info = styled.input`
     font-size: 12px;
     font-weight: 600;
     color: ${variaveis.grey};
     background-color: transparent;
     border: none;
 `

export const EditInfo = styled.div`
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: relative;
    top: 40px;
    left: 140px;
    display: flex;
    align-items: center;
    gap: 10px;

` 

 export const MainInput = styled.div`
     display: flex;
     margin-top: 30px;
     gap: 20px;
     flex-direction: column;
 `

export const Delete = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: relative;
    top: 40px;
    left: 90px;
`
