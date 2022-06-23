//create router to handle user api reqs
const exp = require("express");
const userApp = exp.Router();
//import bcryptjs for password hashing
const bcryptjs =require("bcryptjs");
const expressAsyncHandler = require("express-async-handler");
const { response } = require("express");
//import jsonwebtoken to create tokan
const jwt=require("jsonwebtoken")
require('dotenv').config()

//to extract body of request object
userApp.use(exp.json());

//USER API Routes
//create route to handle '/getusers' path
userApp.get("/getusers",expressAsyncHandler(async(request,response)=>{
       // user collection object
       let userCollectionObject=request.app.get("userCollectionObject") 
       //get all users
       let users=await userCollectionObject.find().toArray()
       //send res
       response.send({message:"Users list",payload:users})



}));    


//create route to user login
userApp.post("/login",expressAsyncHandler(async(request,response)=>{
  
    //get user collection object
    let userCollectionObject=request.app.get("userCollectionObject")
    //get user credentials obj from client
    let userCredObj=request.body
    //search for user by username
    let userOfDB=await userCollectionObject.findOne({username:userCredObj.username})
    //if username not existed
    if(userOfDB==null)
    {
       response.send({message:" Invalid user"}) 
    }
    else
    {
        //compare password
        let status=await bcryptjs.compare(userCredObj.password,userOfDB.password)
        //if passwords are not matched
        if(status==false)
        {
            response.send({message:"Invalid password"})
        }
        else
        {
             //create token
            let token=jwt.sign({username:userOfDB.username},process.env.SECRET_KEY,{expiresIn:60})
            //send token
            response.send({message:"login success",payload:token,userObj:userOfDB})
        }
    }

})); 







//create route to handle 'create-user'
userApp.post("/create-user",expressAsyncHandler(async(request,response)=>{
       // user collection object
      
       let userCollectionObject=request.app.get("userCollectionObject") 
       userCollectionObject.insertOne({a:1,b:2})
       console.log(userCollectionObject)
       // get user object from client
       let newUserObj=request.body;

       //search for user by username
       let userOfDB = await userCollectionObject.findOne({username:newUserObj.username})
       if(userOfDB!==null)
       {
           response.send({message:"Username has already taken...plz chhose another"})
       }

       //if user not existed
       else
       {
           //hash password
       let hashedPassword = await bcryptjs.hash(newUserObj.password,6)
       //replace plain password with hashed password in newUserObj
       newUserObj.password=hashedPassword;

       await userCollectionObject.insertOne({a:1,b:2})
       //send response
       response.send({message:"User created"})
       
        }
}));

userApp.put("/update-user",expressAsyncHandler(async(request,response)=>{
       //get productCollectionObject
  let userCollectionObject = request.app.get("userCollectionObject");
  //get modified product obj
  let modifiedUser=request.body;
  //update
  await userCollectionObject.updateOne({username:modifiedUser.username},{$set:{...modifiedUser}})
  //send response
  response.send({message:"User details updated"})
}))

userApp.delete("/remove-user/:username",expressAsyncHandler(async(request,response)=>{

    //get productCollectionObject
    let userCollectionObject = request.app.get("userCollectionObject");
    //write logic to delete product by its id
    let u=(request.params.username);
    let user=await userCollectionObject.findOne({username:u});
    if(user==null)
    {
      response.send("user do not exist")
    }
    else
    {
      const pro = await userCollectionObject.deleteOne(user);
      response.send("user deleted successfully");
  
    }
  
  }))
  


















module.exports = userApp;