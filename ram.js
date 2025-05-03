// // require mongoose model  and connect with database
// const mongoose=require('mongoose')
// mongoose.connect('mongodb://localhost:27017/store');

// const main =async ()=>{

// //schema  means the fixed table name 

// const productSchema=new mongoose.Schema({
//   name:String,
//   age:Number
// });

// // model node + dbconnect

//  const productmodel=mongoose.model('products',productSchema)
// let data= new productmodel({name:'shyam', age:25});

// let result=await data.save();
// console.log(result);
// }
// main()


//CRUD with Mongoose.................//.............//...........

// for insert tab .......................................//................./...
// require mongoose model  and connect with database

// const mongoose=require('mongoose')
// mongoose.connect('mongodb://localhost:27017/store');



//schema  means the fixed table name 
// const productSchema=new mongoose.Schema({
//   name:String,
//   age:Number
// });

// const insertproducts =async ()=>{
// //model node + dbconnect
//  const productmodel=mongoose.model('products',productSchema)
// let data= new productmodel({name:'gopal', age:120, name:'radh', age:45} 
  
// );

// let result=await data.save();
// console.log(result);
// }


// insertproducts()  // ....... callback function 

//deleteproducts

  //   const deleteproducts =async ()=>{
  //  const productModel=mongoose.model('products', productSchema)
  // let data=await productModel.deleteMany({'name':'krishna'});
  
  // console.log(data);
  // }
  // deleteproducts()


//update

//   const updateproducts =async ()=>{
//     const productModel=mongoose.model('products', productSchema)
//    let data=await productModel.updateOne(
//     {'name':'krishna'},
//     {$set:{'age':50}}
//   );
   
//    console.log(data);
//    }
// updateproducts()


// read....... (find())..........................

// const readproducts =async ()=>{
//     const productModel=mongoose.model('products', productSchema)
//  let data=await productModel.find()
  
//    console.log(data);
//   }
//    readproducts()






/////// dynaminc create gardai aab 
const express=require('express')
require("./config")
const app=express()
let products=require("./products")


app.get('./list',async(req,res)=>{
  let data=await products.find()
  res.send()
})
app.listen(5000)

// const productSchema=new mongoose.Schema({
//   name:String,
//   age:Number
// });


// const deleteproducts =async ()=>{
// const productmodel=mongoose.model('products',productSchema)
// let data= new productmodel({name:'gopal', age:120, name:'radh', age:45} 
  
// );

// let result=await data.save();
// console.log(result);}



