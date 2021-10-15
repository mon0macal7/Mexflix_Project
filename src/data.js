//solo hacemos las consultas a las API
let renderingMovie = (movieData) => {
    console.log(movieData)

let movieTitle = document.getElementById("movie-name") 
let movieImg = document.getElementById("movie-img")
let movieActors = document.getElementById("actors")
movieTitle.innerHTML= movieData.Title
movieImg.setAttribute("src",movieData.Poster) 
movieActors.innerHTML =movieData.Actors
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

