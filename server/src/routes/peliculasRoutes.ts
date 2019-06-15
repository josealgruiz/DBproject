import { Router} from 'express';
import {peliculasController} from '../controllers/peliculasController';

class PeliculasRoutes{

public router: Router = Router();

    constructor(){
        this.config();

    }

    config ():void {
        this.router.get('/', peliculasController.index);
    }

}

const peliculasRoutes = new PeliculasRoutes();
export default peliculasRoutes.router;