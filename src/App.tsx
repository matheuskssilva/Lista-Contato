import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import EstiloGlobal, { Container } from './styles'
import { Provider } from 'react-redux'

import store from './store'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
      </Provider>
    </>
  )
}

export default App
