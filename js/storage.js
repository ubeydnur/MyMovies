class Storage {
    addMovieToStorage(newMovie) {
        let movies = this.getMoviesFromStorage()

        movies.push(newMovie)

        localStorage.setItem('movies', JSON.stringify(movies))
    }

    getMoviesFromStorage() {
        let movies;
        if (localStorage.getItem('movies') === null) {
            movies = []
        } else {
            movies = JSON.parse(localStorage.getItem('movies'))
        }
        return movies
    }

    deleteMovieFromStorage(movieName) {
        let movies = this.getMoviesFromStorage()

        //splice
        movies.forEach((movie, index) => {
            if (movie.name === movieName) {
                movies.splice(index, 1)
            }
        })
        localStorage.setItem('movies', JSON.stringify(movies))
    }

    deleteAllMoviesFromStorage(){
        localStorage.removeItem('movies')
    }
}