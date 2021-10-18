//solo hacemos las consultas a las API
let renderingMovie = (movieData) => {
    console.log(movieData)

let movieTitle = document.getElementById("movie-name") //Para que aparezca en la búsqueda el título de la película
let movieImg = document.getElementById("movie-img")    //Para que aparezca en la búsqueda el póster de la película
let movieActors = document.getElementById("actors")    //Para que aparezca en la búsqueda nombre de los actores de la película
let movieYear = document.getElementById("yearMovie")   //Para que aparezca en la búsqueda el año de la película
let movieGenre = document.getElementById("movie-genre")//Para que aparezca en la búsqueda el género de la película

movieTitle.innerHTML= movieData.Title
movieImg.setAttribute("src",movieData.Poster) 
movieActors.innerHTML =movieData.Actors
movieYear.innerHTML = movieData.Year
movieGenre.innerHTML =movieData.Genre
}


export let getMovieAPI = (buscarPeli) => {
    //Traer valor del input 
  fetch ("https://omdbapi.com/?t= '' + ''" +`${buscarPeli}`+ "&apikey=5f698bec")
  .then((response)=>{
      console.log(response)
      if(response.status==404){
      alert ("Escribiste mal el título")
    }else{
        response.json()
        .then((data)=> renderingMovie(data))
        .catch ((error)=> console.log(error))
    } 
  }) 
  .finally(()=> console.log("promesaResuelta"))
}

