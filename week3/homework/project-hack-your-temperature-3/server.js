
{
    'use strict';

    const argAPIkey  = getAPIkey();
    if (!argAPIkey) {return false};

    const express    = require('express');
    const xprsshb    = require("express-handlebars");
    const axios      = require('axios');

    const serverApp  = express();
    const serverPort = 3000;

    serverApp.engine('handlebars', xprsshb({ defaultLayout:'main' }));
    serverApp.set('view engine','handlebars');
    serverApp.use(express.json());
    serverApp.use(express.urlencoded({extended:true}));

    serverApp.listen(serverPort,()=>console.log(
        `PROJECT: Hack Your Temperature III - listening on port`,serverPort));

    serverApp.get('/',(req,res)=>res.render('index'));
    serverApp.post('/weather',handlePost);

    async function handlePost(req,res) {
        res.render('index',await asyncWeather(req.body.cityName,argAPIkey));
    };

    async function asyncWeather(aCityNAme,anAPIkey) {
        let result={cityName:aCityNAme};
        const apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${
                            aCityNAme}&units=metric&appid=${anAPIkey}`;
        try {
            const weather=await axios.get(apiURL);
            result.weatherText=`The temperature in ${weather.data.name} (${
                weather.data.sys.country}) is ${weather.data.main.temp} °C`;
            result.cityName=weather.data.name;
        } catch(err) {
            result.weatherText='API request error: ';
            if (err.response) {
                switch (err.response.status) {
                    case 401 :
                        console.log('The provided authorization key is either'
                                                +' invalid or has expired.');
                        result.weatherText+='Invalid API authorization key.';
                        break;
                    case 404 :
                        result.weatherText=`The city ${aCityNAme} is unknown.`;
                        break;
                    default  :
                        result.weatherText+=`${err.response.status}:${
                                                    err.response.statusText}`;
                };
            } else if (err.request) {
                result.weatherText+='server did not respond.';
            } else {
                result.weatherText+=`${err.message}`;
            };
        };
        return result;
    };

    function getAPIkey() {
        const fileAPIkey = './sources/keys.json';
        const errMsg = 'The server requires a Weather API key, contained in:\n'
                + `     ${fileAPIkey}`+'\nstructured as follows:\n'
                + '     { "API_KEY" : "<INSERT_YOUR_WEATHER_API_KEY_HERE>" }';
        let result=undefined;
        try {result=require(fileAPIkey).API_KEY} catch(anError) {};
        if (!result) {console.log(errMsg)};
        return result;
    };

};


;

