import { useEffect, useRef, useState } from "react";


function Acceder (props){
    const [buscarUsuario, setBuscarUsuario] = useState(null);
    const [buscarContraseña, setBuscarContraseña] = useState(null);
    const [recuperarContraseña, setRecuperarContraseña] = useState(false);
    const [usuarioValido, setUsuarioValido] = useState("");
    const [correoValido, setCorreoValido] = useState(false);

    const usuario = useRef("");
    const contraseña = useRef("");
    const correo = useRef("");

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

    function registrarUsuario(){
        props.crearUsuarioOnClick();
    }

    function contraseñaOlvidada(){
        setRecuperarContraseña(true)
    }
    function comprobarEmail(e){
        e.nativeEvent.preventDefault();
        
        fetch("http://localhost:8080/usuarios/email", { 
            'method': 'POST',
            'headers': { 'Content-Type': 'application/json' },  
            'body': JSON.stringify({
                'correo': correo.current.value
            })  
        }).then(result => {
            return result.json();
        }).then( (result) => {
            setCorreoValido(true)
            setUsuarioValido(result);
        })
        .catch(err => console.log('Solicitud fallida', err)); 
    }

    if(correoValido){
        fetch("http://localhost:8080/mails/send?email="+ correo.current.value + "&name=" + usuarioValido.nombreUsuario + "&password=" + usuarioValido.contraseña, { 
            'method': 'POST',
            'headers': { 'Content-Type': 'application/json' } 
        })
        .catch(err => console.log('Solicitud fallida', err)); 
        props.cerrarOnCLick()
        setRecuperarContraseña(false);
        setCorreoValido(false)
    }

    return(
        <>
        <div className="acceder-container-atras">
        </div>
        <section className="acceder">
            
            <div className="acceder-container">
                <form className="acceder-form">
                    
                    {
                    
                        recuperarContraseña ? (
                            <>
                            <div className="acceder-titulo">
                                <h2>Recuperar Contraseña</h2>
                            </div>
                            <div className="acceder-usuario">
                                <i class="fa-solid fa-envelope acceder-usuario-icono"></i>
                                <input ref={correo} type='text' className="acceder-usuario-caja" placeholder="Correo"></input>
                            </div>
                            <button className="acceder-boton" onClick={(e)=>comprobarEmail(e)}>Enviar</button>
                            </>
                        ) : (
                            <>
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
                            </div>
                            {/* <div className="acceder-redes">
                                <i class="fa-brands fa-facebook acceder-redes-facebook"></i>
                                <i class="fa-brands fa-google-plus acceder-redes-google"></i>
                            </div> */}
                            <button className="acceder-boton" onClick={(e)=>comprobarUsuario(e, usuario, contraseña)}>Acceder</button>
                            <div className="acceder-recordar-contraseña">
                                <a className="acceder-recordar-contraseña-texto" onClick={()=>contraseñaOlvidada()}>¿Has Olvidado La Contraseña?</a>
                            </div>
                            <div className="acceder-registrar">
                                <a onClick={()=>registrarUsuario()} className="acceder-registrar-texto">¿No tienes cuenta? Registrate</a>
                            </div>
                            </>
                        )
                    
                    }

                </form>
                <i class="fa-solid fa-xmark acceder-cruz" onClick={()=> {
                                                                    props.cerrarOnCLick()
                                                                    setRecuperarContraseña(false)
                                                                    }}></i>
            </div>
        </section>
        </>
    )
}
export default Acceder;