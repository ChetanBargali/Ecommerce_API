const express=require('express');
const app=express();
const port=8000;



//make the app listen
app.listen(port,function(err){
    if(err){
        console.log('Error:',err)
    }
    console.log(`Server is running on port: ${port}`);
});