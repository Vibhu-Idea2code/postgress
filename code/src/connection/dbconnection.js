const Pool=require('pg').Pool;

const pool=new Pool({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postgres",
    database: "postgress"
});
module.exports=pool;