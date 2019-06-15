import {Request, Response} from 'express';
import pool from '../peliculasDB';
 
class PeliculasController {

    public index (req: Request, res: Response) {
       pool.query('DESCRIBE movies');
        res.json('Peliculas');

    } 

}

export const peliculasController = new PeliculasController();
export default peliculasController;