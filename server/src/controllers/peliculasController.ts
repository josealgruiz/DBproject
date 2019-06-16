import {Request, Response} from 'express';
 

var mysql = require('mysql');
var pool = mysql.createPool({ host: 'localhost', user: 'root', password: '123123', database: 'movies_db', port: 3307});
   
class PeliculasController {
    public list (req: Request, res: Response) {
        res.json({text: 'creating a movie'});

    } 

    public getOne (req: Request, res: Response){
        res.json({text: 'This is the movie '+req.params.id});
    }

   public create (req: Request, res: Response){
        console.log(req.body);
        res.json({text: 'creating a movie'});
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