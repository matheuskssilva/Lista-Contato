import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contact'

const contatoSlice = createSlice({
  name: 'contato',
  initialState: [
    new Contato(
      'Reinaldo',
      enums.Category.FAMILIA,
      119154682 - 5245,
      'reinaldoteste@gmail.com',
      1
    ),
    new Contato(
      'Marcelo',
      enums.Category.TRABALHO,
      119154682 - 5245,
      'marceloteste@gmail.com',
      2
    ),
    new Contato(
      'Lucas',
      enums.Category.AMIGOS,
      119154682 - 5245,
      'lucasteste@gmail.com',
      3
    ),
    new Contato(
      'MaVanuzarcelo',
      enums.Category.FAMILIA,
      119154682 - 5245,
      'vanuzateste@gmail.com',
      4
    )
  ],
  reducers: {
    deleteContato: (state, action: PayloadAction<number>) => {
      state = state.filter(
        (contato) => contato.id !== action.payload
      )          
    }
  }
})

export const { deleteContato } = contatoSlice.actions

export default contatoSlice.reducer
