const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mikmak_db'
});

let sql = connection.promise();

class Charity {

    constructor(){}

    static async getAllCharities(){
        let result;
        try{
            result = await sql.query(`SELECT * FROM charities`);
        } catch (err) {
            console.log(err);
        }
        return result ? result[0]: '';
    }
}

module.exports = Charity;