import {Request, Response} from 'express';
 

var mysql = require('mysql');
var pool = mysql.createPool({ host: 'localhost', user: 'root', password: '123123', database: 'movies_db', port: 3307});
   
class PeliculasController {
    //consultar todas las peliculas 
    public async list(req: Request, res: Response) {
        const movies = await pool.query('SELECT * FROM movies');
        res.json(movies); 
    } 

    public getOne (req: Request, res: Response){
        res.json({text: 'This is the movie '+req.params.id});
    }

        //crear pelicula y almacenarlo en la base de datos
   public async create (req: Request, res: Response) {
    await pool.query('INSERT INTRO movies set ?', [req.body]);    
    console.log(req.body);
        res.json({message: 'Movie saved!'});
    }

    public delete (req: Request, res: Response){
        res.json({text: 'deleting a movie ' + req.params.id});
    }

    public put (req: Request, res: Response){
        res.json({text: 'updating a movie ' + req.params.id});
    }
}

export const peliculasController = new PeliculasController();
export default peliculasController;