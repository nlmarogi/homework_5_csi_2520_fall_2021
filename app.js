const { request, response } = require("express")
const express = require("express")
const app = express()
const port= 3000


app.use(express.static("public"))
app.use('/css',express.static(__dirname + "public/css"))
app.use('/js',express.static(__dirname + "public/js"))
app.use('/images',express.static(__dirname + "public/images"))



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('views', './views')
app.set('view engine', 'ejs')






app.get('/', (request, response) =>{
    response.render('index')
})

app.get('/page1/:x', function(request, response){
    response.render('trivia.ejs')
});

app.get('/page2/:y', function(request, response){
    response.render('resume.ejs')
});

app.get('/page3/:z', function(request, response){
    response.render('funFact.ejs')
});



app.get('/handler', function (req, res) {
    const score = req.query.total_score;
    res.send(score + "/5! Good Job!");
  });


app.listen(port, () =>console.info('listening on port ${port}') ) 