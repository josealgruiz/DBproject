"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
var pool = mysql.createPool({ host: 'localhost', user: 'root', password: '123123', database: 'movies_db', port: 3307 });
class PeliculasController {
    list(req, res) {
        res.json({ text: 'creating a movie' });
    }
    getOne(req, res) {
        res.json({ text: 'This is the movie ' + req.params.id });
    }
    create(req, res) {
        console.log(req.body);
        res.json({ text: 'creating a movie' });
    }
    delete(req, res) {
        res.json({ text: 'deleting a movie ' + req.params.id });
    }
    put(req, res) {
        res.json({ text: 'updating a movie ' + req.params.id });
    }
}
exports.peliculasController = new PeliculasController();
exports.default = exports.peliculasController;
