//solo hacemos las consultas a las API
let renderingMovie = (movieData) => {
    console.log(movieData.Search.lenght)

let search =document.getElementById("searching-mov")
for (const peli of movieData.Search) {
  console.log(peli)
  search.innerHTML += ' <div class= "card" style="width: 18rem;">'
  + '<img src=' + `${peli.Poster}` + 'class="card-img-top img-fluid rounded mx-auto" alt=' + '/>'
  +'<div class="card-body">'
  +' <h5 class="card-title"> '+ `${peli.Title}`+'</h5>'
  + ' <p class="card-text">' + `${peli.Year}` + '</p>'
  +'</div>'
+'</div>'
}
}
/*let movieTitle = document.getElementById("movie-name") //Aparece en la búsqueda el título de la película
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
}*/


export let getMovieAPI = (buscarPeli) => {
    console.log(buscarPeli)
    //Traer valor del input 
  fetch ("https://omdbapi.com/?s=" +`${buscarPeli}`+ "&apikey=5f698bec")
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

//Renderear peliculas de preselección 


let renderingSelectionMovie = (data) => {
  console.log(data)
  let selectionMovies = document.getElementById("Recomendaciones")  
  selectionMovies.innerHTML += '<div class= "card" style= "width: 10rem; margin:2%; text align: center;" >'
  + '<img src=' + `${data.Poster}` + ' class="card-img-top" alt=' + `${data.Title}`+'/>'
  + '<div class="card-body">'
  +' <h5 class="card-title"> '+ `${data.Title}`+'</h5>'
  + '</div>'
  + '<ul class="list-group list-group-flush">'
  + '<p> <br> Año:' + `${data.Year}`+ '</p>'
  + '<p> <br> Género:' + `${data.Genre}`+ '</p>'
  + '<p> <br> Director:'  + `${data.Director}`+ '</p>'
  + '</ul>'
  + '<p> <br> Resumen:' + `${data.Plot}`+ '</p>'
  + '<div class="card-body">'
  + '<a href="#" class="card-link"></a>'
 + '</div>'
 + '</div>'
}

//Crear preseleccion de recomendaciones con array

let preSelectedMovies = [ "tt1321510", "tt0249462", "tt2948372" , "tt3890160" , "tt0445922"]
for (const movieItem of preSelectedMovies){
  console.log(movieItem)
  fetch ("https://omdbapi.com/?i=" + movieItem + "&apikey=5f698bec")
  .then((response) => response.json())
  .then((data) => renderingSelectionMovie(data))
  .catch((error) => console.log (error))

}



//Renderear peliculas   Biopic

let renderingSelectionMovieBiopics = (data) => {
  console.log(data)
  let selectionMoviesBio = document.getElementById("Biopic")  
  selectionMoviesBio.innerHTML += '<div class= "card" style= "width: 10rem; margin:2%; text align: center;" >'
  + '<img src=' + `${data.Poster}` + ' class="card-img-top" alt=' + `${data.Title}`+'/>'
  + '<div class="card-body">'
  +' <h5 class="card-title"> '+ `${data.Title}`+'</h5>'
  + '</div>'
  + '<ul class="list-group list-group-flush">'
  + '<p> <br> Año:' + `${data.Year}`+ '</p>'
  + '<p> <br> Género:' + `${data.Genre}`+ '</p>'
  + '<p> <br> Director:'  + `${data.Director}`+ '</p>'
  + '</ul>'
  + '<p> <br> Resumen:' + `${data.Plot}`+ '</p>'
  + '<div class="card-body">'
  + '<a href="#" class="card-link"></a>'
 + '</div>'
 + '</div>'
}


//Crear arreglo en la sección Biopic

 let selectionMoviesB =[ "tt0350258" , "tt1727824" , "tt0450188" , "tt0421082" , "tt0368794"]
 for (const movieItem of selectionMoviesB){
  console.log(movieItem)
  fetch ("https://omdbapi.com/?i=" + movieItem + "&apikey=5f698bec")
  .then((response) => response.json())
  .then((data) => renderingSelectionMovieBiopics(data))
  .catch((error) => console.log (error))

}
//Renderear peliculas de  Drama 

let renderingSelectionMovieDrama = (data) => {
  console.log(data)
  let selectionMoviesDrama = document.getElementById("Drama")  
  selectionMoviesDrama.innerHTML += '<div class= "card" style= "width: 10rem; margin:2%; text align: center;" >'
  + '<img src=' + `${data.Poster}` + ' class="card-img-top" alt=' + `${data.Title}`+'/>'
  + '<div class="card-body">'
  +' <h5 class="card-title"> '+ `${data.Title}`+'</h5>'
  + '</div>'
  + '<ul class="list-group list-group-flush">'
  + '<p> <br> Año:'  + `${data.Year}`+ '</p>'
  + '<p> <br> Género:'  + `${data.Genre}`+ '</p>'
  + '<p> <br> Director:'  + `${data.Director}`+ '</p>'
  + '</ul>'
  + '<p> <br>  Resumen:' + `${data.Plot}`+ '</p>'
  + '<div class="card-body">'
  + '<a href="#" class="card-link"></a>'
 + '</div>'
 + '</div>'
}


//Crear arreglo de la seccion Drama 

let selectionMoviesD = ["tt1707386", "tt1485796", "tt5363618", "tt3783958", "tt0408236"]
for (const movieItem of selectionMoviesD){
  console.log(movieItem)
  fetch ("https://omdbapi.com/?i=" + movieItem + "&apikey=5f698bec")
  .then((response) => response.json())
  .then((data) => renderingSelectionMovieDrama(data))
  .catch((error) => console.log (error))

}
//Renderear peliculas de Comedia

let renderingSelectionMovieComedy = (data) => {
  console.log(data)
  let selectionMoviesComedy = document.getElementById("Comedia")  
  selectionMoviesComedy.innerHTML += '<div class= "card" style= "width: 10rem; margin:2%; text align: center;" >'
  + '<img src=' + `${data.Poster}` + ' class="card-img-top" alt=' + `${data.Title}`+'/>'
  + '<div class="card-body">'
  +' <h5 class="card-title"> '+ `${data.Title}`+'</h5>'
  + '</div>'
  + '<ul class="list-group list-group-flush">'
  + '<p> <br> Año:' + `${data.Year}`+ '</p>'
  + '<p> <br> Género:' + `${data.Genre}`+ '</p>'
  + '<p> <br> Director:'  + `${data.Director}`+ '</p>'
  + '</ul>'
  + '<p> <br> Resumen:' + `${data.Plot}`+ '</p>'
  + '<div class="card-body">'
  + '<a href="#" class="card-link"></a>'
 + '</div>'
 + '</div>'
}



//Crear sección Comedia

let selectionMoviesC = ["tt0795421" , "tt0372824" , "tt0105417", "tt0446029", "tt3470600" ]
for (const movieItem of selectionMoviesC){
  console.log(movieItem)
  fetch ("https://omdbapi.com/?i=" + movieItem + "&apikey=5f698bec")
  .then((response) => response.json())
  .then((data) => renderingSelectionMovieComedy(data))
  .catch((error) => console.log (error))

}

