import { useState, useEffect } from "react";


function FindAllInmuebles(){
    
    const [datos, setDatos] = useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:8080/inmuebles", { 
            'method': 'GET',
            'headers': { 'Content-Type': 'application/json' },    
        }).then(result => {
            return result.json();
        }).then( datos => {
            setDatos(datos);
        })
        .catch(err => console.log('Solicitud fallida', err)); 
        },[])
    
    return datos;
}

function FindInmuebleByUbicacion(ubicacion){
    
    const [datos, setDatos] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/inmuebles"+'/'+ ubicacion, { 
            'method': 'GET',
            'headers': { 'Content-Type': 'application/json' },    
        }).then(result => {
            return result.json();
        }).then( datos => {
            setDatos(datos);
        })
        .catch(err => console.log('Solicitud fallida', err));  
    },[])

    return datos;
}

function CreateInmueble(vendedor, inmueble){
    
    const [datos, setDatos] = useState([]);

    fetch("http://localhost:8080/inmuebles" + '/' + vendedor, { 
        'method': 'POST',
        'body': JSON.stringify(inmueble),
        'headers': { 'Content-Type': 'application/json' },    
    }).then(result => {
        return result.json();
    }).then( datos => {
        setDatos(datos);
    })
    .catch(err => console.log('Solicitud fallida', err)); 
    
    return datos;
}

function UpdateInmueble(id, inmueble){
    
    const [datos, setDatos] = useState([]);

    fetch("http://localhost:8080/inmuebles"+'/'+id, { 
        'method': 'PUT',
        'body': JSON.stringify(inmueble),
        'headers': { 'Content-Type': 'application/json' },    
    })
    .then( datos => {
        setDatos(datos);
    })
    .catch(err => console.log('Solicitud fallida', err)); 

    return datos;
}

function DeleteInmueble(id){

    const [datos, setDatos] = useState([]);

    fetch("http://localhost:8080/inmuebles"+'/'+id, { 
        'method': 'DELETE',
        'headers': { 'Content-Type': 'application/json' },    
    })
    .then( datos => {
        setDatos(datos);
    })
    .catch(err => console.log('Solicitud fallida', err)); 
    
    return datos;
}

export {FindAllInmuebles, FindInmuebleByUbicacion, CreateInmueble, UpdateInmueble, DeleteInmueble};
