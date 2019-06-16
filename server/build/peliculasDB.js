"use strict";
/*export module db {
  var mySQL = require('mysql');
  var pool;
  export function dbpool(){
    return pool = mySQL.createPool({ host: 'localhost', user: 'root', password: '123123', database: 'movies_db', port: 3307});
     
  }
      
}

*/
/*import keys from './keys'

var mysql      = require('mysql');
var pool = mysql.createConnection ({host: 'localhost',
                                      user: 'root',
                                      password: '123123',
                                      database: 'movies_db',
                                      port: 3307,});

                                      pool.getConnection(function(err: any, connection: { query: (arg0: string, arg1: (error: any, results: any, fields: any) => void) => void; release: () => void; }) {
                                        if (err) throw err; // not connected!
                                      
                                        // Use the connection
                                        connection.query('SELECT something FROM sometable', function (error, results, fields) {
                                          // When done with the connection, release it.
                                          connection.release();
                                      
                                          // Handle error after the release.
                                          if (error) throw error;
                                      
                                          // Don't use the connection here, it has been returned to the pool.
                                        });
                                      }); */
