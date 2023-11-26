require("dotenv").config();
const mongoose=require("mongoose");

//url 
const{DB}=process.env;

const connecttoDb=async()=>{
	try{
		await mongoose.connect(DB, {useNewUrlParser: true, useUnifiedTopology: true});
		console.log("Connected to database");
	}
	catch(error){
		console.log(error)


	}
	
	

}
module.exports=connecttoDb();