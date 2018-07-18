var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
const config = require('../config/database');

var db = mongojs(config.database, ['tasks']);
router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});
module.exports = router;