const express = require('express')
const router = express.Router()
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', async function (req, res, next) {
    try{
        const movies = await Movie.find({}).sort({ title: 1 })
        res.render('movies', { movies })
    }
    catch (error) {
        next(error)
    }
})

router.get('/:movieId', async function (req, res, next) {
    const { movieId } = req.params
    try {
      const movie = await Movie.findById(movieId)
      res.render('detail', movie )
      console.log(movie)
    } catch (error) {
      next(error)
    }
  })

module.exports = router