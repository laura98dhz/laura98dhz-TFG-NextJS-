export default function AjustesUsuario(){
    return(
        <section className="ajustesUsuario--container">
            <div className="ajustesUsuario--usuario">
                <div className="ajustesUsuario--usuario--imagen--container"></div>
                <p className="ajustesUsuario--usuario--usuario">Nombre Usuario</p>
                <p className="ajustesUsuario--usuario--correo">Correo Electronico</p>
                <p className="ajustesUsuario--usuario--contraseña">Contraseña</p>
            </div>
            <div className="ajustesUsuario--inmuebles">
                <p>Mis inmuebles</p>
                <p className="ajustesUsuario--inmuebles--">Inmuebles + Editar + Borrar</p>
            </div>
        </section>
    )
}