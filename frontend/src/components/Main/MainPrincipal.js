import logo from '../../Recursos/img/logo2.png';
import CalculadoraHipoteca from '../CalculadoraHipoteca/CalculadoraHipoteca';
import { useRef } from 'react';
function MainPrincipal(props){

    const buscar = useRef(null);

    function selectOpcionTransaccion(e, opcion){
        e.nativeEvent.preventDefault();
        props.opcionOnClick(opcion)
    }
    
    function buscarInmueble(e, ubicacion){
        e.nativeEvent.preventDefault();
        props.ubicacionOnClick(ubicacion.current.value)
        props.handleOnClick();
    }
    
    return(
        <main>
            <section className='main-principal'>
                <div className='main-principal-container'>
                    <div className='main-principal-container-logo'>
                        <img src={logo} className='main-principal-container-logo-img'></img>
                    </div>
                    <div className='main-principal-container-buscar'>
                        
                        <h2 className='main-principal-container-buscar-titulo'>Encuentre la casa de sus sueños</h2>
                        <form className='main-principal-container-buscar-form'>
                            <div className='main-principal-container-buscar-form-botones'>
                                <button className='main-principal-container-buscar-form-botones--1' onClick={(e)=>selectOpcionTransaccion(e, "Venta")}>Comprar</button>
                                <button className='main-principal-container-buscar-form-botones--2' onClick={(e)=>selectOpcionTransaccion(e, "Alquiler")}>Alquilar</button>
                            </div>
                            <input ref={buscar} type='text' className='main-principal-container-buscar-form-text'></input>
                            <button className='main-principal-container-buscar-form-text-boton' onClick={(e)=>buscarInmueble(e, buscar)}>
                                <i class="fa-solid fa-magnifying-glass main-principal-container-buscar-form-text-boton-icono"></i>
                            </button>  
                        </form>
                    </div>
                </div>
            </section>
            <section className='calculadoraHipoteca'>
                <CalculadoraHipoteca/>
            </section>
        </main>
    )
}
export default MainPrincipal;