const express=require('express')
const cors=require('cors')
const bodyparser = require('body-parser')
const mysql=require('mysql2')


const app=express()
app.use(cors())
app.use(bodyparser.json())



//database conncetion
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'sandeep',
    database:'taskroutine',
    port:3306
})

//checking connection

db.connect(err=>{
    if(err) {console.log(err,'sdvsfdvsfd')}
    console.log('database connected')
})


//get projects
app.get('/projects',(req,res)=>{
    let qr=`select * from projects`

    db.query(qr,(err,result)=>{
        if(err)
        {
            console.log(err,'err')
        }
        if(result.length>0)
        {
            res.send({
                messsage:'all data users',
                projects:result
            })
        }
    })
})

//get single data
app.get('/projects/:projectName',(req,res)=>{
    let gPN=req.params.projectName
    let qr=`select * from projects where projectName='${gPN}'`

    db.query(qr,(err,result)=>{
        if(err)
        {
            console.log(err,'err')
        }
        if(result)
        {
            res.send({
                messsage:'all data users',
                data:result
            })
        }
    })
})

//post data
app.post('/projects',(req,res)=>{
    console.log('hi')
    console.log(req.params,"created")
    let projectName=req.body.projectName
    let description=req.body.description
    let teamSize=req.body.teamSize

    let qr=`insert into projects values('${projectName}','${description}',${teamSize})`
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err)
        }
        console.log(result)
        res.send({
            messsage:'inserted',


        }
        )
    })
})

//update 
app.put('/projects',(req,res)=>{
    console.log(req.body,"update")
    let projectName=req.body.projectName
    let description=req.body.description
    let teamSize=req.body.teamSize

    let qr=`update projects set description='${description}',teamSize=${teamSize} where projectName='${projectName}'`
    db.query(qr,(err,result)=>{
        if(err){
            console.log(err)
        }
        console.log(result)
        res.send({
            messsage:'updated',
            projects:result
        }
        )
    })
})

// app.delete('/projects',(req,res)=>{
//     console.log(req.body,'delete')
//     let projectName=req.params.projectName
//     let qr =`delete from projects where projectName='${projectName}'`
//     db.query(qr,(err,result)=>{
//         if(err){
//             console.log(err)
//         }
//         console.log(result)
//         res.send({
//             messsage:'delete',
//             projects:result
//         })
//     })
// })

app.post('/projects/delete',(req,res)=>{
    console.log(req.body,"delete")
    let projectName=req.body.projectName
    let description=req.body.description
    let teamSize=req.body.teamSize
    let qr=`delete from projects where projectName='${projectName}'`

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err)
        }
        console.log(result)
        res.send({
            messsage:'updated',
            projects:result
        }
        )
    })
})


//Login
app.post('/login',(req,res)=>{
    let UserName=req.body.UserName
    let Password=req.body.Password

    let qr=`select * from users where userName='${UserName}'`
    db.query(qr,(err,result)=>{
        if(err){console.log(err)}
        console.log(result)
        res.send(
            result)
    })
})

app.listen(3000,()=>{
    console.log('server running..')
})