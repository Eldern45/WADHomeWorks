const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "1234",
    database: "WADHomeWorks",
    host: "localhost",
    port: "5432"
});

const execute = async (query) => {
    try {
        await pool.connect();
        await pool.query(query);
        return true;
    } catch (error) {
        console.log(error.stack);
        return false;
    }
};

const createTblQuery = `
    CREATE TABLE IF NOT EXISTS "users" (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        email VARCHAR(200) NOT NULL UNIQUE,
        password VARCHAR(200) NOT NULL 
    );
    CREATE TABLE IF NOT EXISTS "posttable" (
        id SERIAL PRIMARY KEY,
        body VARCHAR NOT NULL,
        posttime TIMESTAMP NOT NULL,
        postauthor VARCHAR
    );`;

execute(createTblQuery).then(result => {
    if (result) {
        console.log('If does not exists, create "users" and "posttable" tables');
    }
});

module.exports = pool;
