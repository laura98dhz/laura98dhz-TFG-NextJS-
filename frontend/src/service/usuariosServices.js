import { useState, useEffect } from "react";

function FindByNombre(usuario){
    
    const [usuarios, setUsuarios] = useState("");

    useEffect(()=>{
        fetch("http://localhost:8080/usuarios"+'/'+ usuario, { 
            'method': 'GET',
            'headers': { 'Content-Type': 'application/json' },    
        }).then(result => {
            return result.json();
        }).then( usuario => {
            setUsuarios(usuario);
        })
        .catch(err => console.log('Solicitud fallida', err));  
    },[])

    return usuarios;
}

export {FindByNombre};