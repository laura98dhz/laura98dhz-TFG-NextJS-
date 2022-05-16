import './scss/main.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Pisos from './components/Pisos/Pisos';
import MainPrincipal from './components/Main/MainPrincipal'
import Acceder from './components/Acceder/Acceder';
import { useState } from 'react';

function App() {

  const [cargarPisos, setCargarPisos] = useState(false);
  const [cargarHeader, setCargarHeader] = useState(true);
  const [cargarFooter, setCargarFooter] = useState(true);
  const [cargarAcceder, setCargarAcceder] = useState(false);
  const [cargarMain, setCargarMain] = useState(true);
  const [opcionElegida, setOpcionElegida] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  
  //Ocultar y mostrar

  function mostrarInmuebles(){
    setCargarPisos(true);
    setCargarMain(false)
  }

  function mostrarMain(){
    setCargarMain(true);
    setCargarPisos(false);
    setCargarAcceder(false)
  }

  function mostrarAcceder(){
    setCargarAcceder(true);
    setCargarMain(false);
    setCargarPisos(false);
    setCargarHeader(false);
    setCargarFooter(false);
    
  }

  function cerrarAcceder(){
    setCargarAcceder(false);
    setCargarHeader(true);
    setCargarMain(true);
    setCargarFooter(true);
  }
  
  //Guardar datos

  function selectOpcionTransaccion(opcion){
    setOpcionElegida(opcion);
  }

  function ubicacionElegida(ubicacion){
    setUbicacion(ubicacion)
  }

  function usuarioCorrecto(usuario){
    setCargarAcceder(false);
    setCargarHeader(true);
    setCargarMain(true);
    setCargarFooter(true);
    sessionStorage.setItem('usuario', usuario.nombreUsuario)
  }
  return (
    <>
      { cargarHeader ?  <Header handleOnClick={mostrarMain} accederOnClick={mostrarAcceder} usuario={sessionStorage.getItem('usuario')}/> : ""}
      { cargarAcceder ? <Acceder cerrarOnCLick={cerrarAcceder} usuarioOnClick={usuarioCorrecto}/> : "" }
      { cargarMain ? <MainPrincipal handleOnClick={mostrarInmuebles} opcionOnClick={selectOpcionTransaccion} ubicacionOnClick={ubicacionElegida}/> : "" }
      { cargarPisos ? <Pisos ubicacion={ubicacion} opcion={opcionElegida}/> : "" }
      { cargarFooter ? <Footer/> : "" }
    </>
  );
}

export default App;