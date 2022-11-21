import React, {useEffect, useState} from 'react'
import { todosPersonajes } from '../funciones/funciones'

const Inicio = () =>{
    const [personaje, setPersonajes] = useState(null)

    useEffect(() =>{
        todosPersonajes(setPersonajes)
    },[])

    return(
        <>
            {personaje != null ? (
                personaje.map(personaje => (
                    <div key={personaje.id}>
                        <a href={`/personaje/${personaje.id}`}>{personaje.name}</a>
                        
                    </div>
                ))
            ): ('no hay personajes')}



        </>
    )
}

export default Inicio