var express = require("express");
var app =express();
const bodyParser = require('body-parser');
app.set('view engine',"ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

const fs = require('fs');
    let jsonData = fs.readFileSync('data.json');
    let data = JSON.parse(jsonData);
    console.log(data.newItems[0].list);
     newItemsList = [data.newItems[0].list];



app.get("/",(req,res)=>{
    res.render("index",{newItemsList:newItemsList});
})


app.listen(4001,(req,res)=>{
    console.log("server is running at 4001 port");
})

app.post('/',(req,res)=>{
    // const fs = require('fs');
    // let jsonData = fs.readFileSync('data.json');
    // let data = JSON.parse(jsonData);
    //  newItemsList = data.item;
    let newitem = req.body.item;
    newItemsList.push(newitem);
    res.redirect('/');
})

app.post("/delete",(req,res)=>{
    num = req.body.v;
    newItemsList.splice(num,1);
    console.log(newItemsList);
    res.redirect('/');
})


