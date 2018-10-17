const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const port = process.env.PORT || 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, './static')));

app.set('views', path.join(__dirname,'./views'));
app.set('view engine', 'ejs');

let cats = [
    {fav_food: "spagehetti", age: 3, sleeping_spots: ['under the bed', 'in the sunbeam']},
    {fav_food: "pizza", age: 5, sleeping_spots: ['on the bed', 'in the grass']},
    {fav_food: "toast", age: 2, sleeping_spots: ['on the couch']}
];

console.log(cats);

app.get('/cats', function(req,res){
    res.render('cats');
})

app.get('/cuddles/:id', function(req,res) {
    let id = req.params.id-1
    console.log(cats[id]);

    let context = {
        'cat': cats[id]
    }

    res.render('details',context);
})


app.listen(port, () => console.log('listening to port', port));