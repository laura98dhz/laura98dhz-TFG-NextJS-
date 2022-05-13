import logo from '../../Recursos/img/logo2.png';
import CalculadoraHipoteca from '../CalculadoraHipoteca/CalculadoraHipoteca';

function MainPrincipal(){
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
                                <button className='main-principal-container-buscar-form-botones--1'>Comprar</button>
                                <button className='main-principal-container-buscar-form-botones--2'>Alquilar</button>
                            </div>
                            
                            <select className='main-principal-container-buscar-form-select'>
                                <option>Vivienda</option>
                                <option>Obra Nueva</option>
                                <option>Local y Nave</option>
                                <option>Garaje</option>
                                <option>Oficina</option>
                                <option>Trastero</option>
                                <option>Terreno</option>
                                <option>Edificio</option>
                            </select> 
                            <input type='text' className='main-principal-container-buscar-form-text'></input>
                            <button className='main-principal-container-buscar-form-text-boton'>
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