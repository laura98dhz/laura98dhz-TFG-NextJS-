import { useRef } from "react";

export default function AjustesUsuario(props){
    const usuario = useRef(null);
    const correo = useRef(null);
    const contraseña = useRef(null);

    function cerrarSesion(e){
        e.nativeEvent.preventDefault();

        sessionStorage.removeItem('usuario');
        sessionStorage.removeItem('correo');
        props.cerrarAjustes();
    }

    function actualizarDatos(e){
        e.nativeEvent.preventDefault();
        console.log(sessionStorage.getItem('usuario'))
        
        if(usuario.current.value){
            console.log(1)
            // fetch("http://localhost:8080/usuarios"+'/'+ sessionStorage.getItem('usuario'), { 
            // 'method': 'PUT',
            // 'headers': { 'Content-Type': 'application/json' },    
            // 'body': JSON.stringify({
            //     'nombreUsuario': usuario.current.value,
            //     // 'correo': correo.current.value,
            //     // 'contraseña': contraseña.current.value,
            // })
            // })
            // .catch(err => console.log('Solicitud fallida', err));
        }

        if(contraseña.current.value){
            console.log(2)
            // fetch("http://localhost:8080/usuarios"+'/'+ sessionStorage.getItem('usuario'), { 
            // 'method': 'PUT',
            // 'headers': { 'Content-Type': 'application/json' },    
            // 'body': JSON.stringify({
            //     'nombreUsuario': usuario.current.value,
            //     // 'correo': correo.current.value,
            //     // 'contraseña': contraseña.current.value,
            // })
            // })
            // .catch(err => console.log('Solicitud fallida', err));
        }

        if(correo.current.value){
            console.log(3)
            // fetch("http://localhost:8080/usuarios"+'/'+ sessionStorage.getItem('usuario'), { 
            // 'method': 'PUT',
            // 'headers': { 'Content-Type': 'application/json' },    
            // 'body': JSON.stringify({
            //     'nombreUsuario': usuario.current.value,
            //     // 'correo': correo.current.value,
            //     // 'contraseña': contraseña.current.value,
            // })
            // })
            // .catch(err => console.log('Solicitud fallida', err));
        }
    }

    return(
        <section className="ajustesUsuario--container">
            <div className="ajustesUsuario--usuario">
                <div className="ajustesUsuario--usuario--imagen--container">
                    <i class="fa-solid fa-user"></i>
                </div>
                <form action="#" method="POST" className="ajustesUsuario--usuario--datos--container">
                    <p>Datos</p>
                    <p className="ajustesUsuario--usuario--datos--usuario">Usuario</p>
                    <input ref={usuario} type="text" name="nombreUsuario" placeholder={sessionStorage.getItem('usuario')}></input>
                    <p className="ajustesUsuario--usuario--datos--correo">Correo Electronico</p>
                    <input ref={correo} type="mail" name="nombreMail" placeholder={sessionStorage.getItem('correo')}></input>
                    <p className="ajustesUsuario--usuario--datos--contraseña">Contraseña</p>
                    <input ref={contraseña} type="password" name="nombreContraseña"></input>
                    <button onClick={(e)=>actualizarDatos(e)}>Guardar</button>
                </form>
            </div>
            <div className="ajustesUsuario--inmuebles">
                <p>Mis inmuebles</p>
                <p className="ajustesUsuario--inmuebles--">Inmuebles + Editar + Borrar</p>
            </div>
            <div className="ajustesUsuario--cerrarSesion">
                <button onClick={(e)=>cerrarSesion(e)}>Cerrar Sesión</button>
            </div>
        </section>
    )
}