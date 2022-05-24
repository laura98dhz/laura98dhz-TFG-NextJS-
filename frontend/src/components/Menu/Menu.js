function Menu(){
    return(
        <nav className="menu--inmuebles--container">

            <ul className="menu--inmuebles--items">
                <li className="menu--inmuebles--item">
                    <div className="menu--inmuebles--item--container">
                        <p className="menu--inmuebles--item--texto">Tipo de Inmueble</p>
                        <div className="menu--inmuebles--item--flecha"></div>
                    </div>
                    
                    <ul className="menu--inmuebles--subMenu">
                        <li className="menu--inmuebles--subMenu--item"><input type="checkbox" name="tipoInmueble[]" value="Piso"/> Piso</li>
                        <li className="menu--inmuebles--subMenu--item"><input type="checkbox" name="tipoInmueble[]" value="Casa"/> Casa</li>
                    </ul>
                </li>
                <li className="menu--inmuebles--item">
                    <div className="menu--inmuebles--item--container">
                        <p className="menu--inmuebles--item--texto">Precio</p>
                        <div className="menu--inmuebles--item--flecha"></div>
                    </div>
                    <ul className="menu--inmuebles--subMenu">
                        <li className="menu--inmuebles--subMenu--item">Mínimo <input type="number" name="PrecioMin"/></li>
                        <li className="menu--inmuebles--subMenu--item">Máximo <input type="number" name="PrecioMax"/></li>
                    </ul>
                </li>
                <li className="menu--inmuebles--item">
                    <div className="menu--inmuebles--item--container">
                        <p className="menu--inmuebles--item--texto">Habitaciones</p>
                        <div className="menu--inmuebles--item--flecha"></div>
                    </div>
                    <ul className="menu--inmuebles--subMenu">
                        <li className="menu--inmuebles--subMenu--item">Piso</li>
                        <li className="menu--inmuebles--subMenu--item">Casa</li>
                    </ul>
                </li>
                <li className="menu--inmuebles--item">
                    <div className="menu--inmuebles--item--container">
                        <p className="menu--inmuebles--item--texto">Baños</p>
                        <div className="menu--inmuebles--item--flecha"></div>
                    </div>
                    <ul className="menu--inmuebles--subMenu">
                        <li className="menu--inmuebles--subMenu--item">Piso</li>
                        <li className="menu--inmuebles--subMenu--item">Casa</li>
                    </ul>
                </li>
                <li className="menu--inmuebles--item">
                    <div className="menu--inmuebles--item--container">
                        <p className="menu--inmuebles--item--texto">Sperficie</p>
                        <div className="menu--inmuebles--item--flecha"></div>
                    </div>
                    <ul className="menu--inmuebles--subMenu">
                        <li className="menu--inmuebles--subMenu--item">Piso</li>
                        <li className="menu--inmuebles--subMenu--item">Casa</li>
                    </ul>
                </li>

            </ul>

            {/* <div className="menu--inmuebles--items">
            <li className="menu--inmuebles--items--menu">
            {/* <p className="menu--inmuebles--items--menu--texto">Tipo de Inmueble</p>
                <div className="menu--inmuebles--items--menu--flecha"></div> */}
            {/* </li> */}
            {/* </div> */}
            {/* // <div className="menu--inmuebles--items--menu">  */}
                {/* <p className="menu--inmuebles--items--menu--texto">Precio</p> */}
                {/* <div className="menu--inmuebles--items--menu--flecha"></div> */}
            {/* // </div> */}
                
            {/* // <div className="menu--inmuebles--items--menu">  */}
                {/* <p className="menu--inmuebles--items--menu--texto">Habitaciones</p> */}
                {/* <div className="menu--inmuebles--items--menu--flecha"></div> */}
            {/* // </div> */}
            {/* // <div className="menu--inmuebles--items--menu">  */}
                {/* <p className="menu--inmuebles--items--menu--texto">Baños</p> */}
                {/* <div className="menu--inmuebles--items--menu--flecha"></div> */}
            {/* // </div> */}
            {/* // <div className="menu--inmuebles--items--menu">  */}
            {/* //     <p className="menu--inmuebles--items--menu--texto">Sperficie</p> */}
                {/* <div className="menu--inmuebles--items--menu--flecha"></div> */}
            {/* // </div> */}
        </nav>
    )
}
export default Menu;