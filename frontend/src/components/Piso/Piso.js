export default function Piso(props){
    console.log(props)
    return(

        <div key={props.piso.id} className="piso--container">
            <div className="piso--foto"></div>
            <div className="piso--detalles">
                <div className="piso--detalles--precio">
                    <p>{props.piso.precio} €</p>
                </div>
                <div className="piso--detalles--ubicacion">
                    <p>{props.piso.tipoInmueble} en {props.piso.ubicacion}</p>
                </div>
                <div className="piso--detalles--otrosDetalles">
                    <p>{props.piso.habitaciones} habs.</p>
                    <p>{props.piso.baños} baños</p>
                    <p>{props.piso.superficie} &#13217;</p>
                </div>
            </div>
        </div>
    )
}