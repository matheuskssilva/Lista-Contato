import Contatos from '../../components/Contato/Contato'

import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const ListaContato = () => {
  const { contatos } = useSelector((state: RootReducer) => state)

  return (
    <S.ListaContact>
      <S.Titulo>Lista de Contatos</S.Titulo>
      <S.Resultado>2 contatos marcados como: ....</S.Resultado>

      <S.Grid>
        {contatos.map((c) => (
          <li key={c.name}>
            <Contatos name={c.name} tag={c.tag} tel={c.tel} email={c.email} />
          </li>
        ))}
      </S.Grid>
    </S.ListaContact>
  )
}

export default ListaContato
