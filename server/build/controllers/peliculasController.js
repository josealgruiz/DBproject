"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('mysql');
var pool = mysql.createPool({ host: 'localhost', user: 'root', password: '123123', database: 'movies_db', port: 3307 });
class PeliculasController {
    //consultar todas las peliculas 
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const movies = yield pool.query('SELECT * FROM movies');
            res.json(movies);
        });
    }
    getOne(req, res) {
        res.json({ text: 'This is the movie ' + req.params.id });
    }
    //crear pelicula y almacenarlo en la base de datos
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield pool.query('INSERT INTRO movies set ?', [req.body]);
            console.log(req.body);
            res.json({ message: 'Movie saved!' });
        });
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
