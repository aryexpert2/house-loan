import express from "express";

const app = express();
app.listen(3000, ()=>{
    console.log('le serveur écoute sur le port 3000!');
})