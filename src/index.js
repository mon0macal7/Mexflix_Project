//Aquí va la comunicacion con el DOM 
import { searchMovie } from "/app.js";


//BRING BUTTON TO GIVE A FUNCTION
let buttonSearch = document.getElementById("searchButton")
buttonSearch.addEventListener("click", searchMovie)
