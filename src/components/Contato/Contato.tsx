import * as S from './styles'

import Edit from '../../images/Edit.png'
import Trash from '../../images/Trash.png'

import Confirm from '../../images/Confirm.png'
import Close from '../../images/Close.png'


import { useState } from 'react'

type Props = {
  name: string,
  tag: string,
  tel: number,
  email: string
}

const Contato = ({ name, tag, tel, email }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)
  return (
    <S.Card>
      <S.Main>
      <S.Content>
      <S.Titulo>{name}</S.Titulo>
      <S.Edit onClick={() => setEstaEditando(true)}><img src={Edit} alt='edit' /></S.Edit>
      </S.Content>
      <S.Tag>{tag}</S.Tag>
     <S.MainInput>
     <S.Info 
     type="number"
     value={tel}
     disabled
     />
      <S.Info
      type="email"
      value={email}
      disabled
      />
     </S.MainInput>
     {estaEditando ? (
      <>
        <S.EditInfo>
         <img src={Confirm} alt='Button Confirm' />
          <img src={Close} alt='Button Close' onClick={() => setEstaEditando(false)} />
        </S.EditInfo>
      </>
     ) : (
      <>
        <S.Delete><img src={Trash} alt="trash"/></S.Delete>
      </>
     )}
      </S.Main>
    </S.Card>
  )
}

export default Contato
