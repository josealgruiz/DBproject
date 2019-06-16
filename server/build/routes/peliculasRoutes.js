"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const peliculasController_1 = require("../controllers/peliculasController");
class PeliculasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', peliculasController_1.peliculasController.list);
        this.router.get('/:id', peliculasController_1.peliculasController.getOne);
        this.router.post('/', peliculasController_1.peliculasController.create);
        this.router.delete('/:id', peliculasController_1.peliculasController.delete);
        this.router.put('/:id', peliculasController_1.peliculasController.put);
    }
}
const peliculasRoutes = new PeliculasRoutes();
exports.default = peliculasRoutes.router;
