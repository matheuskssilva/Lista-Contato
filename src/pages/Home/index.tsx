
import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../container/BarraLateral/BarraLateral'
import ListaContato from '../../container/ListaDeContato/ListaContato'

const Home = () => {
  return (
    <>
         <BarraLateral />
        <ListaContato />
        <BotaoAdicionar />
    </>
  )
}

export default Home
