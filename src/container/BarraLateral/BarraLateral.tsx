import FiltroCardContato from '../../components/FiltroCard/FiltroCardContato'
import { Input } from '../../styles'
import * as S from './styles'

const BarraLateral = () => {
  return (
    <S.Aside>
      <div>
        <Input
        type="text"
        placeholder="Buscar..."
        />
      </div>
      <S.Filtros>
        <FiltroCardContato tag='Família' contador={2} />
        <FiltroCardContato tag='Amigo' contador={1} />
        <FiltroCardContato tag='Trabalho' contador={7} />
        <FiltroCardContato tag='Todos' contador={19} />
      </S.Filtros>
    </S.Aside>
  )
}

export default BarraLateral
