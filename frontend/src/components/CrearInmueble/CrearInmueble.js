export default function CrearInmueble(){
    return(
        <>
        <div className="crear-inmueble-container-atras">
        </div>
        <section className="crear-inmueble">
            
            <div className="crear-inmueble-container">
                <form className="crear-inmueble-form">
                    
                    <div className="crear-inmueble-titulo">
                        <h2>Subir Inmueble</h2>
                    </div>

                    <div className="crear-inmueble-tipo-inmueble">
                        <p className="crear-inmueble-tipo-inmueble-texto">Tipo de Inmueble</p>
                        <div className="crear-inmueble-tipo-inmueble-container">
                            <input type="radio" name="Tipo-Inmueble" value="Piso"></input>
                            <label>Piso</label>
                            <input type="radio" name="Tipo-Inmueble" value="Casa"></input>
                            <label>Casa</label>
                        </div>
                    </div>

                    <div className="crear-inmueble-tipo-transaccion">
                        <p className="crear-inmueble-tipo-transaccion-texto">Tipo de Transacción</p>
                        <div className="crear-inmueble-tipo-transaccion-container">
                            <input type="radio" name="Tipo-Transaccion" value="Alquiler"></input>
                            <label>Alquiler</label>
                            <input type="radio" name="Tipo-Transaccion" value="Venta"></input>
                            <label>Venta</label>
                        </div>
                    </div>
                    
                    <div className="crear-inmueble-precio">
                        <p className="crear-inmueble-precio-texto">Precio</p>
                        <div className="crear-inmueble-precio-container">
                            <input type='number' className="crear-inmueble-precio-caja"></input>
                        </div>
                    </div>

                    <div className="crear-inmueble-ubicacion">
                        <p className="crear-inmueble-ubicacion-texto">Ubicacion</p>
                        <div className="crear-inmueble-ubicacion-container">
                            <input type='text' className="crear-inmueble-ubicacion-caja"></input>
                        </div>
                    </div>

                    <div className="crear-inmueble-superficie">
                        <p className="crear-inmueble-superficie-texto">Superficie</p>
                        <div className="crear-inmueble-superficie-container">
                            <input type='number' className="crear-inmueble-superficie-caja"></input>
                        </div>
                    </div>

                    <div className="crear-inmueble-habitaciones">
                        <p className="crear-inmueble-habitaciones-texto">Número de Habitaciones</p>
                        <div className="crear-inmueble-habitaciones-container">
                            <input type='number' className="crear-inmueble-habitaciones-caja"></input>
                        </div>
                    </div>

                    <div className="crear-inmueble-baños">
                        <p className="crear-inmueble-baños-texto">Número de Baños</p>
                        <div className="crear-inmueble-baños-container">
                            <input type='number' className="crear-inmueble-baños-caja"></input>
                        </div>
                    </div>

                    <div className="crear-inmueble-descripcion">
                        <p className="crear-inmueble-descripcion-texto">Descripción del Inmueble</p>
                        <div className="crear-inmueble-descripcion-container">
                            <textarea className="crear-inmueble-descripcion-caja"></textarea>
                        </div>
                    </div>
                    
                    <button className="crear-inmueble-boton">Subir</button>

                </form>
                <i class="fa-solid fa-xmark acceder-cruz"></i>
            </div>
        </section>
        </>
    )
}