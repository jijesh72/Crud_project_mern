const express=require("express")
const mysql=require("mysql2")
const cors=require("cors")

const app=express()

app.use(cors())
app.use(express.urlencoded({extended:true}))

app.use(express.json())
const conn=mysql.createConnection({
    host:"localhost", 
    user:"root",
    password:"Jijesh@12",
    database:"crud"
})
conn.connect((err)=>{
    if(err){
        console.log("error ",err)
    }
    console.log("database connected successfully")
    
})
//View all the users
app.get('/',(req,res)=>{
    const sql="select * from user"
    conn.query(sql,(err,result)=>{
    if(err){
        return res.json("error inside server",err)
    }
    return res.json(result)
})
})
//Add user 
app.post('/Add',(req,res)=>{
    const {name,email,phone}=req.body
    const sql="insert into user ( name,email,phone) values (?,?,?)"
    conn.query(sql,[name,email,phone],(err,result)=>{
        if(err)throw res.json(err)
        return res.json(result)
    })
})
 
//view one user with their id
app.get('/view/:id',(req,res)=>{
    const sql="select * from user where id =?"
    // console.log(sql)
    const id=req.params.id
    conn.query(sql,[id],(err,result)=>{
        // console.log(result);
    if(err){
        return res.json("error inside server",err)
    }
    return res.json(result)
    })
})

//update user

app.put("/edit/:id",(req,res)=>{
    const id=req.params.id
    const sql="update  user set `name`=?, `email`=?, `phone`=?  where id=?"
    conn.query(sql,[req.body.name,req.body.email,req.body.phone,id],(err,result)=>{
        if(err){
            return res.json({message:"Error inside the server"})
        }
        return res.json(result)
    })
})

//delete user

app.delete("/delete/:id",(req,res)=>{
    const id=req.params.id
    const sql="delete from user where id= ?"
    conn.query(sql,[id],(err,result)=>{
        if(err){
            return res.json({message:"Error inside the server"})
        }
        return res.json(result)
    
    })
})


app.listen(3010,()=>{
    console.log("server on http//:localhost3000")
})