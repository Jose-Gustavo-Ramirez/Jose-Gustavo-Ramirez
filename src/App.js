import Inicio from './inicio'
import Encabezado from './encabezado'
import { Routes, Route } from 'react-router-dom';
import Produsctos from './productos';
import Contacto from './contacto';

function App() {
  return (
    <>

    <Encabezado />
    <Routes>
      <Route path='/' element= {<Inicio/>}/>
      <Route path='/contacto' element= {<Contacto/>} />
      <Route path='/produsctos' element= {<Produsctos/>} />
      </Routes>
    </>
  );
}

export default App;
