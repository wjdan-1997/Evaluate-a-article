const mockAPIResponse = require('./mockAPI.js')
var aylien  = require('aylien_textapi');
const { send } = require('process');
const { response } = require('express');
const { url } = require('inspector');
const fetch = require('node-fetch');

//

const cors = require('cors');
const bodyParser = require ('body-parser');
const express = require('express')
var path = require('path')
const dotenv = require('dotenv');
dotenv.config();
//
const app = express()
//
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'));
//
console.log(__dirname)


// SETUP API

console.log(`Your API Key is ${process.env.API_KEY} Done `);


// Get endpiont
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})
// test API if it's wiil work // Done
app.get('/test_Api',function (req,res){
    res.json({message: 'Success' ,
    name:'wejdan' ,
    })
})
//variable global
let userUrl = 'https://api.meaningcloud.com/sentiment-2.1?';
let apikey = process.env.API_KEY 

// Post endpiont
app.post('/testAPI',  (req,res)=>{
    let textInput = req.body.url;
    console.log(textInput, " please show me the url I want be sure!");
    let baseURL = `${userUrl}key=${apikey}&url=${textInput}&lang=en`
    console.log(baseURL, "Please i want");
    // fetch user input and use the response with json 
      fetch (baseURL)
     .then((response) => response.json())
     .then((response)=>{
       // console.log(response, "please show me the response thanks!");
            res.send(response);
     });

})
// callback the function 



// Done the server side

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

//app('/https://en.wikipedia.org/wiki/Jeddah' + 'key' + 'clintVlaue') // for expline 