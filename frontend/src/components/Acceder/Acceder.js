function Acceder (){
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
                        <input type='text' className="acceder-usuario-caja" placeholder="Usuario"></input>
                    </div>
                    <div className="acceder-contraseña">
                        <i class="fa-solid fa-key acceder-contraseña-icono"></i>
                        <input type='password' className="acceder-contraseña-caja" placeholder="Contraseña"></input>
                        <i class="fa-solid fa-eye acceder-contraseña-icono"></i>
                    </div>
                    <div className="acceder-redes">
                        <i class="fa-brands fa-facebook acceder-redes-facebook"></i>
                        <i class="fa-brands fa-google-plus acceder-redes-google"></i>
                    </div>
                    <button className="acceder-boton">Acceder</button>
                    <div className="acceder-recordar-contraseña">
                        <a href="" className="acceder-recordar-contraseña-texto">¿Has Olvidado La Contraseña?</a>
                    </div>
                    <div className="acceder-registrar">
                        <a href="" className="acceder-registrar-texto">¿No tienes cuenta? Registrate</a>
                    </div>

                </form>
            </div>
        </section>
        </>
    )
}
export default Acceder;