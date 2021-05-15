const formDom = document.querySelector('#add-form')
const nameInputDom = document.querySelector('#movie-name')
const directorInputDom = document.querySelector('#movie-director')
const urlInputDom = document.querySelector('#movie-url')
const moviesListDom = document.querySelector('#movies')
const deleteAllMoviesDom = document.querySelector('#delete-all-movies')

//UI objesini başlatma
const ui = new UI()

//Storage Objesi üretme
const storage = new Storage()

//Tüm eventleri yükleme
eventListeners()

function eventListeners() {
    formDom.addEventListener('submit', addMovie)
    document.addEventListener('DOMContentLoaded', () => {
        let movies = storage.getMoviesFromStorage()
        ui.loadAllMovies(movies)
    })
    moviesListDom.addEventListener('click', deleteMovie)
    deleteAllMoviesDom.addEventListener('click',deleteAllMovies)
}

function addMovie(e) {
    const name = nameInputDom.value
    const director = directorInputDom.value
    const url = urlInputDom.value

    if (name === '' || director === '' || url === '') {
        //Hata
        ui.displayMessages("Tüm alanları doldurun...", "danger")
    }
    else {
        //Yeni Film
        const newMovie = new Movie(name, director, url)

        //Arayüze film ekleme
        ui.addMovieToUI(newMovie)

        //storage'a movie ekleme
        storage.addMovieToStorage(newMovie)

        ui.displayMessages("Add new movie...", "success")
    }

    ui.clearInputs(nameInputDom, directorInputDom, urlInputDom)

    e.preventDefault()
}

function deleteMovie(e) {
    if (e.target.id == 'delete-movie') {
        ui.deleteMovieFromUI(e.target)
        storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        ui.displayMessages("Delete movie...", 'warning')
    }
}

function deleteAllMovies(){
    if(confirm('Are you sure you want to delete')){
        ui.deleteAllMoviesFromUI()
        storage.deleteAllMoviesFromStorage()
    
        ui.displayMessages("Delete all movies...", 'warning')
    }
}