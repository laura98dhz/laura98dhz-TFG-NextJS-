import logo from '../../Recursos/img/logo2.png';
import Menu from '../Menu/Menu';
import Piso from '../Piso/Piso'

import {FindAllInmuebles, FindInmuebleByUbicacion} from '../../service/inmueblesService';

import { useEffect, useState } from "react";

function Pisos(props){
    
    const pisos = FindInmuebleByUbicacion(props.ubicacion);        
    console.log(pisos)
 
    return(
        <>
        <Menu/>
        <main>
            <section className='main-pisos'>
                   {
                        pisos.map(function(piso){
                           if(piso.tipoOperacion===props.opcion){
                            return(
                                <Piso piso={piso}/>                                                         
                            )
                           }
                        })
                   }
            </section>
        </main>
        </>
    )
}
export default Pisos;