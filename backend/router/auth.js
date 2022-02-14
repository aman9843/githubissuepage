// const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const multer = require("multer");
let path = require("path");









require('../db/Conn');
const {User,Register} = require("../model/userSchema");
const { request } = require('express');







// router.get('/',(req,res) => {
//     res.send(`hello connected to fronted`);
// });

// using promises 
// router.post('/signUp',(req,res) => {

//     const {name,email,pass,re_pass} = req.body; 

//     if(!name || !email || !pass || !re_pass) {
//         return res.json({error:"You have entered wrong crdentials!"});
//     }

//     user.findOne({email:email})
//         .then((userExist) => {
//             if(userExist) {
//                 return res.status(422).json({error:"Email already exist"});
//             }


//             const user = new user({name, email, pass, re_pass});

//             user.save().then(()=> {
//                 res.status(201).json({message:"user registered successfully"});
//             }).catch((err)=> res.status(500).json({error:"Failed to registered"}))
//         }).catch(err => {console.log(err);});

    
// });

/* SignUp Validation using async await */

router.post('/signup', async (req,res) => {
    const { name, email, pass, re_pass } = req.body; 
    if(!name || !email || !pass || !re_pass) {
        return res.status(422).json({error: "Please filled the data properly"});
            }

    try {
        const userExist = await User.findOne({email : email});
        if(userExist) {
            return res.status(422).json({error:"Email Already Exist"});
        } else if(pass != re_pass) {
            return res.status(422).json({error:"Password doesn't match"});
        } else {
            const user = new User({name, email, pass, re_pass});

            await user.save();
            res.status(201).json({message:"User registered successfully"})
        }
       
        
    } catch (err) {
        console.log(err);
    }


})


/* Login validation */


router.post('/login', async (req,res) => {
   try {
       const {email,pass} = req.body;

       if(!email || !pass) {
           return res.status(400).json({error:"Please fill the data"})
       }

     const userLogin = await User.findOne({ email: email });
 

     if(userLogin) {
        const isMatch = await bcrypt.compare(pass, userLogin.pass);
        
     
     if(!isMatch) {
         res.status(400).json({error:"Invalid credentials password"});
     } 
     
     else {
        res.json({message:"user signed succesfull"});
     } 


    } else {
         res.status(400).json({error:"Invalid credentials"});

     }

    


   

   } catch (err) {
       console.log(err);
   }  


})

// // //image upload 
// const storage = multer.diskStorage({
// destination: (req,file,callback) => {
// callback(null,'./public/images/');
//        },

// filename:(request,files,callback) => {
// callback(null,files.originalname);
//        },
//    })


// const upload = multer({storage: storage});
    






//image upload

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '/img');

    },


    filename: (req,file,callback) => {
        callback(null,Date.now() + path.extname(file.originalname));
    },
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}


//upload image 

const upload = multer({ storage, fileFilter });



// add_issues Validation //

router.post("/addissues",upload.single('image'), async(req,res) => {
    
  
//    const {name,email,age,mobile,work,add,desc} = req.body;

        const name = req.body.name;
        const email = req.body.email;
        const age = req.body.age;
        const mobile = req.body.mobile;
        const work = req.body.work;
        const add = req.body.add;
        const desc = req.body.desc;
        const image = req.file;





  
   if(!name || !email || !age || !mobile || !work || !add || !desc) {
     res.status(422).json("Please Fill the data");
   } 

   try {
       const preuser = await Register.findOne({email:email});
       console.log(preuser);
  
       if(preuser) {
           res.status(422).json("User Already Exist");


       } else {
           const adduser = new Register({
               name,
               email,
               age,
               mobile,
               work,
               add,
               desc,
               image


           });
           console.log(adduser);

           await adduser.save();
           res.status(201).json(adduser);
           console.log(adduser);
            
       }
   } catch (error) {
       
       res.status(422).json(error);
   }

})






// get user data

router.get("/table", async(req,res)=>{

    try {
        const userdata = await Register.find();
        res.status(201).json(userdata);
        console.log(userdata);

    } catch (error) {
        res.status(422).json(error);
    }
    

})


//get indivual data 
router.get("/getuser/:id",async(req,res) => {
    try{
         console.log(req.params);
         const {id} = req.params;

         const userindividual = await Register.findById({_id:id});
         console.log(userindividual);
         res.status(201).json(userindividual)
    } catch (error){
            res.status(422).json(error)
    }
})


//get updated data 
router.patch("/updateuser/:id",async(req,res)=>{
    try{
        const{id} = req.params;
        const updateduser = await Register.findByIdAndUpdate(id,req.body,{
            new:true    
        })

       console.log(updateduser);
       res.status(201).json(updateduser);

    } catch (error) {
        res.status(422).json(error);

    }
})

//get deleted data 
router.delete("/deleteuser/:id", async(req,res)=>{
    try{
        const{id} = req.params;



        const deleteuser = await Register.findByIdAndDelete({_id:id})
        console.log(deleteuser);
        res.status(201).json(deleteuser);
        
    } catch(error) {
        res.status(422).json(error)

    }
})




module.exports = router;