const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');    
const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique: true
    },

    pass: {
        type:String,
        required:true
    },
    re_pass: {
        type:String,
        required:true
    }

})

userSchema.pre('save', async function(next) {
    console.log("hello!")

    if(this.isModified('pass')) {
        this.pass = await bcrypt.hash(this.pass, 12);
        this.re_pass = await bcrypt.hash(this.re_pass, 12);
    }

    next();

})



const registerSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },

    age: {
        type:String,
        required:true
    },
    mobile: {
        type:String,
        required:true
    },
    work: {
        type:String,
        required:true
    },
    add: {
        type:String,
        required:true
    },
    desc: {
        type:String,    
        required:true
    },
    image:{
        
        type:String,
        require:true
    }


})









const User = mongoose.model('User', userSchema);
const Register = mongoose.model('Register',registerSchema);
module.exports = {User,Register};  



















//image upload 
// const storage = multer.diskStorage({
// destination: function(request,file,callback) {
// callback(null,'./public/images');
//        },

// filename: function(request,file,callback) {
// callback(null,Date.now()+file.originalname);
//        },
//    })


// const upload = multer({
//     storage:storage,
//     limits:{
//         fieldSize:1024*1024*3
//     },
// })

// add_issues Validation //