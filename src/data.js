                   //solo hacemos las consultas a las API

let renderingMovie = (movieData) => {
    console.log(movieData.Search.lenght)

    //función para la busqueda 
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
                    //Exportar función para búsqueda de pelicula
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
  let plot= document.getElementById("modal")

  //.........................................Bootstrap Modal Card..............
  plot.innerHTML += `    <div class="modal fade" id=`+`${data.imdbID}`+`data-bs-backdrop="static"
      data-bs-keyboard="false"tabindex="-1"aria-labelledby="staticBackdropLabel"aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">` + `${data.Title}` +
            `</h5>
              <button type="button"class="btn-close"  data-bs-dismiss="modal"aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <h5>Plot:</h5><p>${data.Plot}</p>
              <div class="modal-footer">
              <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal">Close
             </button>
            </div>
        </div>
      </div>
    </div>`
  //.........................................
  selectionMovies.innerHTML += '<div class= "card" style= "width: 12rem; margin:2%; text align: center;" >'
  + '<a href="" data-bs-toggle= "modal" data-bs-target=#'+`${data.imdbID}` +'><img src=' + `${data.Poster}` + ' class="card-img-top" alt=' + `${data.Title}`+'/> </a>'
  + '<div class="card-body">'
  +' <h5 class="card-title"> '+ `${data.Title}`+'</h5>'
  + '</div>'
  + '<ul class="list-group list-group-flush">'
  +  '<p> Año:' + `${data.Year}`+ '</p>'
  +  '<p>  Género:' + `${data.Genre}`+ '</p>'
  +  '<p>  Director:'  + `${data.Director}`+ '</p>'
  + '</ul>'
  + '<div class="card-body">'
  + '<a href="#" class="card-link"></a>'
 + '</div>'
 + '</div>'
}

                              //Crear preseleccion de recomendaciones con array

let preSelectedMovies = [ "tt2582802", "tt1321510", "tt0249462", "tt2948372" , "tt3890160" , "tt0445922", "tt0451966", "tt1042877" ]
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
  let plot= document.getElementById("modal")
  //.........................................Bootstrap Modal Card..............
  plot.innerHTML += `<div class="modal fade" id=`+`${data.imdbID}`+` data-bs-backdrop="static"
  data-bs-keyboard="false" tabindex="-1"aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">` + `${data.Title}` +
        `</h5>
          <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <h5>Plot:</h5><p>${data.Plot}</p>
          <div class="modal-footer">
           <button
          type="button"
          class="btn btn-secondary"
          data-bs-dismiss="modal"> Close
         </button>
        </div>
    </div>
  </div>
</div>`
//.........................................

  selectionMoviesBio.innerHTML += '<div class= "card" style= "width: 12rem; margin:2%; text align: center;" >'
  + '<a href="" data-bs-toggle= "modal" data-bs-target=#'+`${data.imdbID}` +'><img src=' + `${data.Poster}` + ' class="card-img-top" alt=' + `${data.Title}`+'/> </a>'
  + '<div class="card-body">'
  +' <h5 class="card-title"> '+ `${data.Title}`+'</h5>'
  + '</div>'
  + '<ul class="list-group list-group-flush">'
  +  '<p>  Año:'  + `${data.Year}`+ '</p>'
  +  '<p>  Género:'  + `${data.Genre}`+ '</p>'
  +  '<p>  Director:'  + `${data.Director}`+ '</p>'
  + '</ul>'
  + '<div class="card-body">'
  + '<a href="#" class="card-link"></a>'
 + '</div>'
 + '</div>'
}
                             //Crear arreglo en la sección Biopic

 let selectionMoviesB =[ "tt0350258" , "tt1727824" , "tt0450188" , "tt0421082" , "tt0368794" , "tt0094747", "tt3890160" ,"tt2042568"]
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
  let plot= document.getElementById("modal")
  //.........................................Bootstrap Modal Card..............
  plot.innerHTML += ` <div class="modal fade" id=`+`${data.imdbID}`+`data-bs-backdrop="static"
  data-bs-keyboard="false"tabindex="-1" aria-labelledby="staticBackdropLabel"aria-hidden="true">
  <div class="modal-dialog">
  <div class="modal-content">
  <div class="modal-header">
  <h5 class="modal-title">` + `${data.Title}` +
  `</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <h5>Plot:</h5><p>${data.Plot}</p>
      <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Close
      </button>
      </div>
    </div>
  </div>
</div>`
//.........................................

  selectionMoviesDrama.innerHTML += '<div class= "card" style= "width: 12rem; margin:2%; text align: center;" >'
  + '<a href="" data-bs-toggle= "modal" data-bs-target=#'+`${data.imdbID}` +'><img src=' + `${data.Poster}` + ' class="card-img-top" alt=' + `${data.Title}`+'/> </a>'
  + '<div class="card-body">'
  +' <h5 class="card-title"> '+ `${data.Title}`+'</h5>'
  + '</div>'
  + '<ul class="list-group list-group-flush">'
  +  '<p> Año:'  + `${data.Year}`+ '</p>'
  +  '<p> Género:'  + `${data.Genre}`+ '</p>'
  +  '<p>  Director:'  + `${data.Director}`+ '</p>'
  + '</ul>'
  + '<div class="card-body">'
  + '<a href="#" class="card-link"></a>'
 + '</div>'
 + '</div>'
}


                                //Crear arreglo de la seccion Drama 

let selectionMoviesD = ["tt1707386", "tt1485796", "tt5363618", "tt3783958", "tt0408236", "tt3544112","tt0299658", "tt0077631" ]
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
  let plot= document.getElementById("modal")
  //.........................................Bootstrap Modal Card..............
  
  plot.innerHTML += `<div class="modal fade" id=`+`${data.imdbID}`+` data-bs-backdrop="static"
  data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">` + `${data.Title}` +
        `</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <h5>Plot:</h5><p>${data.Plot}</p>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close </button>
       </div>
    </div>
  </div>
</div>`
//.........................................
  plot.innerHTML += ` <div class="modal fade" id=`+`${data.imdbID}`+`data-bs-backdrop="static"
  data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
  <div class="modal-content">
  <div class="modal-header">
  <h5 class="modal-title">` + `${data.Title}` +`</h5>
      <button type="button" class="btn-close"data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <h5>Plot:</h5><p>${data.Plot}</p>
      <div class="modal-footer">
       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> Close </button>
      </div>
    </div>
  </div>
</div>`
//.........................................

  selectionMoviesComedy.innerHTML += '<div class= "card" style= "width: 12rem; margin:2%; text align: center;" >'
  + '<a href="" data-bs-toggle= "modal" data-bs-target=#'+`${data.imdbID}` +'><img src=' + `${data.Poster}` + ' class="card-img-top" alt=' + `${data.Title}`+'/> </a>'
  + '<div class="card-body">'
  +' <h5 class="card-title"> '+ `${data.Title}`+'</h5>'
  + '</div>'
  + '<ul class="list-group list-group-flush">'
  +  '<p> Año:' + `${data.Year}`+ '</p>'
  +  '<p> Género:' + `${data.Genre}`+ '</p>'
  +  '<p> Director:'  + `${data.Director}`+ '</p>'
  + '</ul>'
  + '<div class="card-body">'
  + '<a href="#" class="card-link"></a>'
 + '</div>'
 + '</div>'
}
                                //Crear sección Comedia

let selectionMoviesC = ["tt0449059", "tt0795421" , "tt0445922", "tt0372824" , "tt0105417", "tt0446029", "tt3470600", "tt2107861" ]
for (const movieItem of selectionMoviesC){
  console.log(movieItem)
  fetch ("https://omdbapi.com/?i=" + movieItem + "&apikey=5f698bec")
  .then((response) => response.json())
  .then((data) => renderingSelectionMovieComedy(data))
  .catch((error) => console.log (error))

}

