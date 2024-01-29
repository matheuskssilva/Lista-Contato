import React from 'react'
import { Circulo } from './styles'
import add from '../../images/add.png'

const BotaoAdicionar = () => {
  return (
    <>
      <Circulo to='/cadastro'><img src={add} alt="" /></Circulo>
    </>
  )
}

export default BotaoAdicionar
