//solo hacemos las consultas a las API
let renderingMovie = (movieData) => {
    console.log(movieData.Search.lenght)

let search =document.getElementById("searching-mov")
for (const peli of movieData.Search) {
  console.log(peli)
  search.innerHTML += ' <div class= "card" style="width: 18rem;">'
  + '<img src=' + `${peli.Poster}` + ' class="card-img-top" alt=' + '/>'
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
//Traer peliculas preseleccionadas


//Renderear peliculas de preselección 


let renderingSelectionMovie = (data) => {
  console.log(data)
  let selectionMovies = document.getElementById("Recomendaciones")  
  selectionMovies.innerHTML += '<div class= "card" style= "width: 18rem; margin:2%; text align: center;" >'
  + '<img src=' + `${data.Poster}` + ' class="card-img-top" alt=' + `${data.Title}`+'/>'
  + '<div class="card-body">'
  +' <h5 class="card-title"> '+ `${data.Title}`+'</h5>'
  + '</div>'
  + '<ul class="list-group list-group-flush">'
  + '<p> Año:' + `${data.Year}`+ '</p>'
  + '<p> Género:' + `${data.Genre}`+ '</p>'
  + '<p> Director:'  + `${data.Director}`+ '</p>'
  + '</ul>'
  + '<p>Resumen:' + `${data.Plot}`+ '</p>'
  + '<div class="card-body">'
  + '<a href="#" class="card-link"></a>'
 + '</div>'
 + '</div>'
}

//crear preseleccion con array

let preSelectedMovies = [ "tt1321510", "tt0249462", "tt2948372" , "tt3890160" , "tt0445922"]
for (const movieItem of preSelectedMovies){
  console.log(movieItem)
  fetch ("https://omdbapi.com/?i=" + movieItem + "&apikey=5f698bec")
  .then((response) => response.json())
  .then((data) => renderingSelectionMovie(data))
  .catch((error) => console.log (error))

}
//iterar seleccion con fetch

for(const item of preSelectedMovies){
  fetch ("https://omdbapi.com/?i=" +item + "&apikey=5f698bec")
  .then ((response)=> response.json())
  .then((data) => renderingSelectionMovie(data))
  .catch((error)=> console.log(error))
}
//Renderear peliculas   Biopic



//Crear seccion Biopic

 let selectionMoviesB =[ "tt0350258" , "tt1727824" , "tt0450188" , "tt0421082" , "tt0368794"]
 for (const movieItem of selectionMoviesB){
  console.log(movieItem)
  fetch ("https://omdbapi.com/?i=" + movieItem + "&apikey=5f698bec")
  .then((response) => response.json())
  .then((data) => renderingSelectionMovie(data))
  .catch((error) => console.log (error))

}
//Renderear peliculas de  Drama 


//Crear seccion Drama 

let selectionMoviesD = ["tt1707386", "tt1485796", "tt5363618", "tt3783958", "tt0408236"]
for (const movieItem of selectionMoviesD){
  console.log(movieItem)
  fetch ("https://omdbapi.com/?i=" + movieItem + "&apikey=5f698bec")
  .then((response) => response.json())
  .then((data) => renderingSelectionMovie(data))
  .catch((error) => console.log (error))

}
//Renderear peliculas de preselección



//Crear sección Comedia

let selectionMoviesC = ["tt0795421" , "tt0372824" , "tt0105417", "tt0446029", "tt3470600" ]
for (const movieItem of selectionMoviesC){
  console.log(movieItem)
  fetch ("https://omdbapi.com/?i=" + movieItem + "&apikey=5f698bec")
  .then((response) => response.json())
  .then((data) => renderingSelectionMovie(data))
  .catch((error) => console.log (error))

}

