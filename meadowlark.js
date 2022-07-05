const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()

//configure Handlebars view engine
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

/* Static middleware which is used to show one or more directories
containing static resources delivered to the client without any special 
handling */
app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000

const fortunes = [
    "Conquer your fears or they will conquer you",
    "Rivers need springs",
    "Do not fear what you don't know.",
    "Whenever possible, keep it simple",
]

// Home page
/* Home page before introduction of Handle bars
    app.get('/', (req, res)=>{
        res.type('text/plain')
        res.send('Meadowlark Travel')
})
*/
// New home page
app.get('/', (req,res)=> res.render('home'))

// About page
/* About page before intorduction of Handle bars
    app.get('/about', (req, res)=>{
        res.type('text/plain')
        res.send(' About Meadowlark Travel')
})    
*/
// New about page
app.get('/about', (req,res)=> {
    
    // Modification to add fortune
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('about', { fortune: randomFortune })
})

// custom 404 page 
/* Custom 404 page before introduction of Handle bars
    app.use((req,res)=>{
        res.type('text/plain')
        res.status(404)
        res.send('404 - Not Found')
})
*/
// New custom 404 page
app.use((req,res)=> {
    res.status(404)
    res.render('404')
}
)

// custom 500 page 
/* Custom 500 page before introduction of handlebars
    app.use((err,req,res, next)=>{
        console.error(err.message)
        res.type('text/plain')
        res.status(500)
        res.send('500 - Server Error')
})
*/
// New custom 500 page
app.use((err,req,res, next)=>{
    console.error(err.message)
    res.status(500)
    res.render('500')
})


app.listen(port, ()=> console.log(
    `Express started on http://localhost:${port};` +
    `press Ctrl - C to terminate.`
))