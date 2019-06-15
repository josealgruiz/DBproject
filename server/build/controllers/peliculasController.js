"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const peliculasDB_1 = __importDefault(require("../peliculasDB"));
class PeliculasController {
    index(req, res) {
        peliculasDB_1.default.query('DESCRIBE movies');
        res.json('Peliculas');
    }
}
exports.peliculasController = new PeliculasController();
exports.default = exports.peliculasController;
