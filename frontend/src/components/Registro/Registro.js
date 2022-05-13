function Registro (){
    return(
        <>
        <div className="registro-container-atras">
        </div>
        <section className="registro">
            
            <div className="registro-container">
                <form className="registro-form">
                    
                    <div className="registro-titulo">
                        <h2>Registrate</h2>
                    </div>
                    
                    <div className="registro-nombre">
                        <p className="registro-nombre-texto">Nombre</p>
                        <input type='text' className="registro-nombre-caja"></input>
                    </div>
                    
                    <div className="registro-apellidos">
                        <p className="registro-apellidos-texto">Apellidos</p>
                        <input type='text' className="registro-apellidos-caja"></input>
                    </div>

                    <div className="registro-usuario">
                        <p className="registro-usuario-texto">Nombre de Usuario</p>
                        <input type='text' className="registro-usuario-caja"></input>
                    </div>

                    <div className="registro-email">
                        <p className="registro-email-texto">Email</p>
                        <input type='email' className="registro-email-caja"></input>
                    </div>

                    <div className="registro-contraseña">
                        <p className="registro-contraseña-texto">Contraseña</p>
                        <div className="registro-contraseña-container">
                            <input type='password' className="registro-contraseña-caja"></input>
                            <i class="fa-solid fa-eye registro-contraseña-icono"></i>
                        </div>
                    </div>

                    <div className="registro-contraseña-repetir">
                        <p className="registro-contraseña-repetir-texto">Repetir Contraseña</p>
                        <div className="registro-contraseña-repetir-container">
                            <input type='password' className="registro-contraseña-repetir-caja"></input>
                            <i class="fa-solid fa-eye registro-contraseña-repetir-icono"></i>
                        </div>
                    </div>

                    <div className="registro-redes">
                        <i class="fa-brands fa-facebook registro-redes-facebook"></i>
                        <i class="fa-brands fa-google-plus registro-redes-google"></i>
                    </div>
                    
                    <button className="registro-boton">Registrarse</button>

                </form>
            </div>
        </section>
        </>
    )
}
export default Registro;