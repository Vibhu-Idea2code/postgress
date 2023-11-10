const pool=require('../connection/dbconnection');
const queries=require('../service/queries');

const getUser=(req,res)=>{
    console.log('getting student');
    pool.query(queries.getUsers,(error,results)=>{
        if(error)throw error;
        res.status(200).json(results.rows);
    })
}

const getUserEx=(req,res)=>{
    const id=parseInt(req.params.id);
    pool.query(queries.getUserById,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const cresteUser=(req,res)=>{
    const user = req.body;
    let insertQuery = `insert into users(id, name) 
                       values(${user.id}, '${user.name}')`
                       pool.query(insertQuery, (err, result)=>{
                        if(!err){
                            res.send('Insertion was successful')
                        }
                        else{ console.log(err.message) }
                    })
                }
    // const {name,email}=req.body;
//     console.log(req.body);
//     create user
//     pool.query(queries.addUser,[name,email],(error,results)=>{
//         if(error)throw error;
//         res.status(201).send("user is created successfully created");
//     });
//     // email checking
//     pool.query(queries.checkEmailEx,[email],(error,results)=>{
//         if(results.rows.length){
//             res.send("Email is already Exists");
//         }
//     })
// }
// app.post('/users', (req, res)=> {
    
  
// })
module.exports={
    getUser,
    getUserEx,
    cresteUser
}