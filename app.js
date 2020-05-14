const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.use(express.urlencoded())
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')





app.get('/',(req,res) => {
    res.render('index')
})

app.get('/all-trips',(req,res) => {
    res.render('all-trips')
    console.log('viewing all trips')
})

app.get('/add-trip',(req,res) => {
    res.render('add-trip')
    console.log('adding a trip')
})

app.get('/delete-trip',(req,res) => {
    res.render('delete-trip')
    console.log('deleting a trip')
})




app.listen(3001,() => {
    console.log('Server is running...')
})

