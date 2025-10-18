const express = require('express')
const router = express.Router()

const fetch = (...args)=> import('node-fetch').then(({ default: fetch}) => fetch(...args))

router.use(express.static('public'))

//? http://localhost:5050/ 
router.get('/', (req, res)=> {
    res.render('pages/main', {
        title: 'Homepage of Wines',
        name: "By: Crazpicc"
    })
})

//! REDS
//? http://localhost:5050/reds
router.get('/reds', (req, res)=> {

    const url = 'https://api.sampleapis.com/wines/reds'

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            res.render('pages/reds', {
                title: 'Delicious Reds',
                name: 'By: Crazpicc',
                data
            })
        })
})

//! ROSE
//? http://localhost:5050/rose 
router.get('/rose', (req, res)=> {

    const url = 'https://api.sampleapis.com/wines/rose'

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            res.render('pages/rose', {
                title: 'Beautiful Rose',
                name: 'By: Crazpicc',
                data
            })
        })
})

//! SPARKLING
//? http://localhost:5050/sparkling
router.get('/sparkling', (req, res)=> {

    const url = 'https://api.sampleapis.com/wines/sparkling'

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            res.render('pages/sparkling', {
                title: 'Sparkling Wines',
                name: 'By: Crazpicc',
                data
            })
        })
})

//! DESSERT
//? http://localhost:5050/dessert
router.get('/dessert', (req, res)=> {

    const url = 'https://api.sampleapis.com/wines/dessert'

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            res.render('pages/dessert', {
                title: 'Yummy Desserts',
                name: 'By: Crazpicc',
                data
            })
        })
})

//! WHITES
//? http://localhost:5050/whites
router.get('/whites', (req, res)=> {

    const url = 'https://api.sampleapis.com/wines/whites'

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            res.render('pages/whites', {
                title: 'White Wines',
                name: 'By: Crazpicc',
                data
            })
        })
}) 


module.exports = router