import React from 'react'
import * as S from './styles'

export type Props = {
  tag: string,
  contador: number
}

const FiltroCardContato = ({ tag, contador }: Props) => {
  return (
    <S.Card >
      <S.Title>{tag}</S.Title>
      <S.Contador>{contador}</S.Contador>
    </S.Card>
  )
}

export default FiltroCardContato