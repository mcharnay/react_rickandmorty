import axios from "axios";

//retorna el endpoint, state data.results retorna los datos del endpoint.
const todosPersonajes = async (state) => {
    const peticion = await axios.get('https://rickandmortyapi.com/api/character')
    state(peticion.data.results);  
}

const unicoPersonaje = async (id, state) => {
    const peticion = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    state(peticion.data);
}

//se importará en Inicio.jsx
export {
    todosPersonajes,
    unicoPersonaje
}