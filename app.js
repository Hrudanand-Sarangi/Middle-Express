const express= require("express");
const app= express();
const ExpressError= require("./ExpressError");

const checkToken=(req,res,next)=>{
    let {token}= req.query;
    if (token === "giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESSDENIED");
};

app.get("/api", checkToken ,(req,res)=>{
    res.send("Data");
})


app.get("/",(req,res)=>{
    res.send("This is a random page");
});

app.get("/err",(req,res)=>{
    abcd=abcd;
});

app.use((err,req,res,next)=>{
    let {status =500,message="Some error Occured"}= err;
    res.status(status) .send(message);
});

app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin forbiden");
});

app.listen(8080,(req,res)=>{
    console.log("Server is listining at the port 8080");
});