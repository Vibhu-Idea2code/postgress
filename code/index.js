const express=require('express');
const userRoutes=require('./src/route/route');
const app=express();
const port=3000;
const bodyParser = require("body-parser");


app.use(express.json());
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send("hello world");
});
app.use('/api/v1',userRoutes);

app.listen(port,()=>console.log(`app listening on port ${port}`));