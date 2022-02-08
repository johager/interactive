const movies = require('./db.json')  // the "./" is required to keep nodemon running

let globalId = movies.length + 1

module.exports = {
    getAllMovies: (req, res) => {
        res.status(200).send(movies)
    },
    deleteMovie: (req, res) => {
        const index = movies.findIndex(elem => elem.id === +req.params.id)
        movies.splice(index, 1)
        res.status(200).send(movies)
    },
    createMovie: (req, res) => {
        const { title, rating, imageURL} = req.body
        const newMovie = {
            id: globalId,
            title,
            rating,
            imageURL
        }
        movies.push(newMovie)
        res.status(200).send(movies)
        globalId++
    },
    updateMovie: (req, res) => {
        const {id} = req.params
        const {type} = req.body  // type is 'plus' or 'minus'
        const index = movies.findIndex(elem => elem.id === +id)

        if(movies[index].rating === 5 && type === 'plus') {
            res.status(400).send('cannot go above 5')
        } else if (movies[index].rating === 0 && type === 'minus') {
            res.status(400).send('cannot go below 0')
        } else if (type === 'plus') {
            movies[index].rating++
            res.status(200).send(movies)
        } else if (type === 'minus') {
            movies[index].rating--
            res.status(200).send(movies)
        } else {
            res.status(400).send('bad type')
        }
    }
}