import './header.scss';

import logo from '../../Recursos/img/logo.png'; 

function Header(){
    return(
        <header className='header'>
            <img src={logo} className='logo'/>
            <div className='header__container'>
                <div className='anuncio'>
                    <button className='anuncio-boton'>
                        <i class="fa-solid fa-thumbtack anuncio-boton-icono"></i>
                        <p>Pon tu anuncio gratis</p>
                    </button>       
                </div>
                <div className='usuario'>
                    <i class="fa-solid fa-user usuario-icono"></i>
                    <p>Acceder</p>
                </div>
                
                <div className='idioma'>
                    <select className='idioma-select'>
                                <option>Español</option>
                                <option>English</option>
                                <option>Catalá</option>
                                <option>Deutsche</option>
                            </select> 
                </div>
                
            </div>
        </header>
    )
}

export default Header;