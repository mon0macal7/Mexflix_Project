//control pantallas
/*document.getElementById("screen1").hidden = false
document.getElementById("screen2").hidden = true
let access = document.getElementById("entry")
access*/

//Aquí va la comunicacion con el DOM 
import { getMovieAPI } from "./data.js";
console.log(getMovieAPI)

/*import { getMovieAPIActors} from "./data.js";
console.log(getMovieAPIActors)*/


let searchValue = document.getElementById ("searchInput").value
console.log(searchValue)


let searchMovie = ()=>{
    let searchValue = document.getElementById("searchInput").value 
    getMovieAPI (searchValue)
}

let searchButton= document.getElementById ("searchButton")
searchButton.addEventListener('click', searchMovie)
//darle funcion al boton de busqueda

