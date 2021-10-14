//Manipulamos la data que viene de data JS
export let searchMovie = () => {
    //Traer valor del input 
    let searchValue = document.getElementById("searchInput").value
     getMovieAPI(searchValue)
}
//El usuario puede ingresar busqueda al input 
//

//aparece un screen con catalogó preseleccionado 