'use strict'

var express = require('express')

var bodyParser = require('body-parser')

var app = express();

app.set('view engine', 'ejs');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/assets', express.static('assets'));

app.get('/',(req, res)=>{
    
    res.render('index');
});
app.get('/contact',(req, res)=>{
    console.log(req.query)
    res.render('contact',{qs:req.query})
    
})
app.post('/contact', urlencodedParser, (req, res)=>{
    console.log(req.body)
    res.render('contact',{qs:req.query})
    
})

app.get('/profile/:name', function(req,res){
    var data = {
        name:"Moody Style",
        age:8,
        job:"ninja",
        hobbies:[
            'Lv.99',
            'Element: Electrique',
            'Armes: Shirken, sabre éclair'
        ]
    }
    res.render('profile', {person: req.params.name, data:data})
})

app.listen(3000)