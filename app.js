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

app.get('/trip',(req,res) => {
    res.render('trip')
    console.log('hello world')
})





app.listen(3001,() => {
    console.log('Server is running...')
})

