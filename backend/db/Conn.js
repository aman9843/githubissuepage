const mongoose = require('mongoose');
const DB = process.env.DATABASE;




mongoose.connect(DB, {
     useNewUrlParser:true,
     useUnifiedTopology:true,
     useCreateIndex:true
}).then(()=>{
    console.log("connected to database successfully")
}).catch((err)=>{
    console.log('connection failed');
});