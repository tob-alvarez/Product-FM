import './App.css'
import Carrousel from './components/Carrousel/Carrousel'
import Navbar from './components/Navbar/Navbar'
import ProviderEcommerce from './context/Context'

function App() {

  return (
    <>
      <ProviderEcommerce>
        <Navbar/>
        <Carrousel/>
      </ProviderEcommerce>
    </>
  )
}

export default App
