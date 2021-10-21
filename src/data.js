//solo hacemos las consultas a las API
let renderingMovie = (movieData) => {
    console.log(movieData)

let movieTitle = document.getElementById("movie-name") //Aparece en la búsqueda el título de la película
let movieImg = document.getElementById("movie-img")    // Aparece en la búsqueda el póster de la película
let movieActors = document.getElementById("actors")    // Aparece en la búsqueda nombre de los actores de la película
let movieYear = document.getElementById("yearMovie")   //Aparece en la búsqueda el año de la película
let movieGenre = document.getElementById("movie-genre")//Aparece en la búsqueda el género de la película
let movieDirector = document.getElementById("movie-director") //Aparece la búsqueda el Director de la película
let moviePlot = document.getElementById("movie-plot") //Aparece en la búsqueda el resumen de la película

movieTitle.innerHTML=  "Título: " +  movieData.Title
movieImg.setAttribute("src",movieData.Poster) 
movieActors.innerHTML =  "Actores: " +  movieData.Actors
movieYear.innerHTML = "Año: "  + movieData.Year
movieGenre.innerHTML = "Género: "  +  movieData.Genre
movieDirector.innerHTML = "Director: "  + movieData.Director
moviePlot.innerHTML = "Sinopsis: "  +  movieData.Plot
}


export let getMovieAPI = (buscarPeli) => {
    console.log(buscarPeli)
    //Traer valor del input 
  fetch ("https://omdbapi.com/?t=" +`${buscarPeli}`+ "&apikey=5f698bec")
  .then((response)=>{
      console.log(response)
      if(response.status==404){
      alert ("Escribiste mal el título")
    } else{
        response.json()
        .then((data)=> renderingMovie(data))
        .catch ((error)=> console.log(error))
    } 
  }) 
  .finally(()=> console.log("promesaResuelta"))
}
//Traer peliculas preseleccionadas


//Renderear peliculas de preselección 


let renderingSelectionMovie = (data) => {
  console.log(data)
  let selectionMovies = document.getElementById("Recomendaciones")  
  selectionMovies.innerHTML += ' <div class= "card" style="width: 18rem;">'
  + '<img src=' + `${data.Poster}` + ' class="card-img-top" alt=' + `${data.Title}` +'/>'
  + '<div class="card-body">'
  +' <h5 class="card-title"> '+ `${data.Title}`+'</h5>'
  +' <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>'
  + '</div>'
  + '<ul class="list-group list-group-flush">'
  + '<li> Año:' + `${data.Year}`+ '</li>'
  + '<li> Género:' + `${data.Genre}`+ '</li>'
  + '<li> Director:'  + `${data.Director}`+ '</li>'
  + '</ul>'
  + '<p>Resumen:' + `${data.Plot}`+ '</p>'
  + '<div class="card-body">'
  + '<a href="#" class="card-link"></a>'
 + '</div>'
 + '</div>'
}

//crear pre seleccion con array

let preSelectedMovies = [ "tt1321510", "tt2948372" , "tt3890160" , "tt0445922"]
for (const movieItem of preSelectedMovies){
  console.log(movieItem)
  fetch ("https://omdbapi.com/?i=" + movieItem + "&apikey=5f698bec")
  .then((response) => response.json())
  .then((data) => renderingSelectionMovie(data))
  .catch((error) => console.log (error))

}

//Crear seccion Biopic

 let selectionMoviesB =[ "tt0350258" , "tt1727824" , "tt0450188" , "tt0421082" , "tt0368794" ]
 for (const movieItem of selectionMoviesB){
  console.log(movieItem)
  fetch ("https://omdbapi.com/?i=" + movieItem + "&apikey=5f698bec")
  .then((response) => response.json())
  .then((data) => renderingSelectionMovie(data))
  .catch((error) => console.log (error))

}



//Crear seccion Drama 

let selectionMoviesD = [ ,"tt5363618", "tt3783958", "tt0408236"]
for (const movieItem of selectionMoviesD){
  console.log(movieItem)
  fetch ("https://omdbapi.com/?i=" + movieItem + "&apikey=5f698bec")
  .then((response) => response.json())
  .then((data) => renderingSelectionMovie(data))
  .catch((error) => console.log (error))

}



//Crear sección Comedia

let selectionMoviesC = ["tt0795421" , "tt0372824" , "tt0105417", "tt0446029" ]
for (const movieItem of selectionMoviesC){
  console.log(movieItem)
  fetch ("https://omdbapi.com/?i=" + movieItem + "&apikey=5f698bec")
  .then((response) => response.json())
  .then((data) => renderingSelectionMovie(data))
  .catch((error) => console.log (error))

}



