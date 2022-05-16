import { useRef, useState } from "react";
import { FindByNombre } from '../../service/usuariosServices';


function Acceder (props){
    const [buscarUsuario, setBuscarUsuario] = useState(null);
    const [buscarContraseña, setBuscarContraseña] = useState(null);

    const usuario = useRef("");
    const contraseña = useRef("");

    function cerrarAcceder(){
        props.cerrarOnCLick();
    }

    function comprobarUsuario(e, usuario, contraseña){
        e.nativeEvent.preventDefault();

        fetch("http://localhost:8080/usuarios"+'/'+ usuario.current.value, { 
            'method': 'GET',
            'headers': { 'Content-Type': 'application/json' },    
        }).then(result => {
            return result.json();
        }).then( usuario => {
            setBuscarUsuario(usuario);
        })
        .catch(err => console.log('Solicitud fallida', err)); 
        setBuscarContraseña(contraseña.current.value)
    }

    if(buscarUsuario !== null && buscarContraseña !== null){
        if(buscarContraseña === buscarUsuario.contraseña){
            props.usuarioOnClick(buscarUsuario);
        }
    }

    return(
        <>
        <div className="acceder-container-atras">
        </div>
        <section className="acceder">
            
            <div className="acceder-container">
                <form className="acceder-form">
                    <div className="acceder-titulo">
                        <h2>Acceder</h2>
                    </div>
                    <div className="acceder-usuario">
                        <i class="fa-solid fa-circle-user acceder-usuario-icono"></i>
                        <input ref={usuario} type='text' className="acceder-usuario-caja" placeholder="Usuario"></input>
                    </div>
                    <div className="acceder-contraseña">
                        <i class="fa-solid fa-key acceder-contraseña-icono"></i>
                        <input ref={contraseña} type='password' className="acceder-contraseña-caja" placeholder="Contraseña"></input>
                        <i class="fa-solid fa-eye acceder-contraseña-icono"></i>
                    </div>
                    <div className="acceder-redes">
                        <i class="fa-brands fa-facebook acceder-redes-facebook"></i>
                        <i class="fa-brands fa-google-plus acceder-redes-google"></i>
                    </div>
                    <button className="acceder-boton" onClick={(e)=>comprobarUsuario(e, usuario, contraseña)}>Acceder</button>
                    <div className="acceder-recordar-contraseña">
                        <a href="" className="acceder-recordar-contraseña-texto">¿Has Olvidado La Contraseña?</a>
                    </div>
                    <div className="acceder-registrar">
                        <a href="" className="acceder-registrar-texto">¿No tienes cuenta? Registrate</a>
                    </div>

                </form>
                <i class="fa-solid fa-xmark acceder-cruz" onClick={()=> cerrarAcceder()}></i>
            </div>
        </section>
        </>
    )
}
export default Acceder;