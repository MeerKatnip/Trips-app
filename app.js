const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.use(express.urlencoded())
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

let listOfTrips = []



app.get('/',(req,res) => {
    res.render('index')
})

app.get('/all-trips',(req,res) => {
    res.render('all-trips')
    console.log('viewing all trips')
})

app.get('/add-trip',(req,res) => {
    res.render('add-trip')
})

app.post('/add-trip',(req,res) => {
    let city = req.body.city
    let cityImgURL = req.body.cityImgURL
    let departDate = req.body.departDate
    let returnDate = req.body.returnDate

    let trip = { city: city, cityImgURL: cityImgURL, departDate: departDate, returnDate: returnDate }
    listOfTrips.push(trip)
    console.log(listOfTrips)
    res.redirect("/add-trips")
})

app.get('/delete-trip',(req,res) => {
    res.render('delete-trip')
    console.log('deleting a trip')
})




app.listen(3001,() => {
    console.log('Server is running...')
})

