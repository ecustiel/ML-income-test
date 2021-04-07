const express = require('express');
const bodyParser =  require('body-parser');
const request = require('request');
const rp = require('request-promise');
const fetch = require('node-fetch');
const Promise = require("bluebird");


const app = express();


//Routes
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/items', (req, res) => {
    
    const item = req.query.q;

    const resp = async () => {
        const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${encodeURI(item)}`);
        const respuesta = await response.json();
        
        return respuesta;
      }

      resp().then(respuesta => {
        res.json(respuesta);
      });
    
})

    
 

 app.get('/api/items/:id', (req, res) => {
    
    const item = req.params.id;
    console.log(item)
    
    const requests = [{
        url: `https://api.mercadolibre.com/items/${item}`
    },
    {
        url: `https://api.mercadolibre.com/items/${item}/description`
    }]
    
     Promise.map(requests, function(obj) {
        return rp(obj).then(function(body) {
          return JSON.parse(body);
        });
      }).then(function(results) {
        
         const returnArray = [];

        for (var i = 0; i < results.length; i++) {
          returnArray.push(results[i]);
          
        }
       
         res.json(returnArray);
        
        
      }, function(err) {
      });


   })


//Puerto Servidor Localhost
app.listen(4000, () => {
    console.log(`Servidor corriendo en puerto ${4000}`);
})



module.exports = app;