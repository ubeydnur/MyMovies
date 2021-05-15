const moviesTableDom = document.querySelector('#movies-table')
const headerDom = document.querySelector("#header")

class UI {
    addMovieToUI(newMovie) {
        moviesTableDom.innerHTML += `
                <tr>
                    <td><img src="${newMovie.url}"></td>
                    <td>${newMovie.name}</td>
                    <td>${newMovie.director}</td>
                    <td><a href="#"  id="delete-movie" class="btn btn-outline-danger">Delete</a></td>
                </tr>
        `
    }

    clearInputs(e1, e2, e3) {
        e1.value = ""
        e2.value = ""
        e3.value = ""
    }

    displayMessages(message, type) {
        const alertDom = document.createElement("div")
        alertDom.className = `alert alert-${type} text-center w-75 mx-auto`
        alertDom.role = "alert"
        alertDom.textContent = message

        headerDom.appendChild(alertDom)

        setTimeout(() => {
            alertDom.remove()
        }, 2000)
    }

    loadAllMovies(movies) {
        movies.forEach((movie) => {
            moviesTableDom.innerHTML += `
            <tr>
                <td><img src="${movie.url}"></td>
                <td>${movie.name}</td>
                <td>${movie.director}</td>
                <td><a href="#"  id="delete-movie" class="btn btn-outline-danger">Delete</a></td>
            </tr>
    `
        })
    }

    deleteMovieFromUI(element) {
        element.parentElement.parentElement.remove()
    }

    deleteAllMoviesFromUI() {
        // moviesTableDom.innerHTML = ""
        while (moviesTableDom.firstElementChild != null) {
            moviesTableDom.firstElementChild.remove()
        }
    }
}