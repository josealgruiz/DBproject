"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import pool from '../peliculasDB';
class PeliculasController {
    index(req, res) {
        // pool.query('DESCRIBE movies');
        res.json('Peliculas');
    }
}
exports.peliculasController = new PeliculasController();
exports.default = exports.peliculasController;
