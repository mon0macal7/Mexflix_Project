//control pantallas
document.getElementById("screen-1").hidden = false
document.getElementById("screen-2").hidden = true
let access = document.getElementById("go")
access.addEventListener('click',function(){
   

    document.getElementById("screen-1").hidden = true
    document.getElementById("screen-2").hidden = false

} )


//Aquí va la comunicacion con el DOM 
import { getMovieAPI } from "./data.js";
console.log(getMovieAPI)

/*import { getMovieAPIActors} from "./data.js";
console.log(getMovieAPIActors)*/


let searchValue = document.getElementById ("searchInput").value
console.log(searchValue)

let searchMovie = () => {
    //traer valor del input
    let searchValue = document.getElementById("searchInput").value 
    getMovieAPI (searchValue)
    let movieCard = document.getElementById("searching-mov")
    movieCard.hidden = false;
}

let searchButton= document.getElementById ("searchButton")
searchButton.addEventListener('click', searchMovie)




//darle funcion al boton de busqueda

