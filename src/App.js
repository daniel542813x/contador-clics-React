import './App.css';
import './css/Boton.css'
import Boton from './componentes/Boton';
import CodeLogo from './imagenes/logo.png';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {
  const [numClics,setNumClics] = useState(0)
  
  const manejarClic=()=>{
    setNumClics(numClics+1);
  }




  const ReiniciarContador=()=>{
    setNumClics(0);
  }
  return (
    <div className="App">
       <div className='logo-contenedor'>
          <img className='logo'
            src={CodeLogo}
            alt="Logo"/>
       </div>

       <div className='contenedor-principal'>
         <Contador num={numClics}/>
         <Boton  
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic} />
         <Boton  
          texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={ReiniciarContador} />
       </div>
    </div>
  );
}

export default App;
