var express = require('express')
var config = require('../config')
var distance = require('../utils/distance')
var router = express.Router()
var pg = require('pg')


//Creates an new home using lat and long(required), and name and address(optional)
createHome = async(req, res) => {
    const client = new pg.Client(config.connectionString);
    try{
        await client.connect();
        const home = await client.query('INSERT INTO HOMES(latitude, longitude, name, address) VALUES($1, $2, $3, $4) RETURNING id', [req.body.latitude, req.body.longitude, req.body.name, req.body.address])
        if(home.rows.length == 0){
            res.status(500).send("Failed to create home");
        }
        else{
            res.status(201).send(home.rows[0]);
        }
    }
    catch(err){
        res.status(500).send("Database insert failure due to: " + err);    
    }
}

//Checks the distance between current location and the chosen home using lat and long and home id(required)
checkDistance = async(req, res) => {
    const client = new pg.Client(config.connectionString);
    try{
        await client.connect();
        const home = await client.query('SELECT latitude,longitude FROM HOMES WHERE id=$1', [req.body.id])
        if(home.rows.length == 0){
            res.status(500).send("Failed to find record");
        }
        else{
            var difference = distance.calcDistanceLatLong(req.body.latitude, req.body.longitude, home.rows[0].latitude, home.rows[0].longitude);
            if(difference >= 200){
                res.status(200).send("A friendly reminder to lock your doors")
            }
            else{
                res.status(200).send()
            }
        }
    }
    catch(err){
        res.status(500).send("Database select failure due to: " + err);    
    }
  }

router.post('/', createHome);
router.post('/compare', checkDistance);

module.exports = router