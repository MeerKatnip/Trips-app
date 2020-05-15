const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.use(express.urlencoded())
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

global.listOfTrips = []


// localhost:3000/css/version-1/style.css
app.use('/css/version-1',express.static('css'))
// localhost:3000/js/client.js
app.use(express.static(__dirname + '../public'))



app.get('/',(req,res) => {
    res.render('index')
})

app.get('/all-trips',(req,res) => {
    res.render('all-trips')
})

app.post('/all-trips',(req,res) => {
    let city = req.body.city
    let cityImgURL = req.body.cityImgURL
    let departDate = req.body.departDate
    let returnDate = req.body.returnDate

    let trip = { city: city, cityImgURL: cityImgURL, departDate: departDate, returnDate: returnDate }
    listOfTrips.push(trip)

    console.log(listOfTrips)
    
    res.redirect("/all-trips")

})

app.get('/add-trip',(req,res) => {
    res.render('add-trip',{tripsKey: listOfTrips})
})

app.post('/add-trip',(req,res) => {
    let city = req.body.city
    let cityImgURL = req.body.cityImgURL
    let departDate = req.body.departDate
    let returnDate = req.body.returnDate

    let trip = { city: city, cityImgURL: cityImgURL, departDate: departDate, returnDate: returnDate }
    listOfTrips.push(trip)

    console.log(listOfTrips)
    
    res.redirect("/add-trip")

})

app.get('/delete-trip',(req,res) => {
    res.render('delete-trip',{tripsKey: listOfTrips})
    
})

app.post('/delete-trip',(req,res) => {
    let city = req.body.city
    let cityImgURL = req.body.cityImgURL
    let departDate = req.body.departDate
    let returnDate = req.body.returnDate

    listOfTrips = listOfTrips.filter(trip => trip.city != city)
    res.redirect('/delete-trip')
})


app.listen(3001,() => {
    console.log('Server is running...')
})

