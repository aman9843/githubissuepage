import React, { useState } from "react";
import { NavLink,useHistory} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeIcon from '@material-ui/icons/Home';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';



const AddIssues = () => {
  toast.configure()
    const history = useHistory();
  
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    desc: "",
    image: ""
    
  });



 

  
  const setData = (e) => {
    console.log(e.target.value);
    const {name,value} = e.target;
    setInpval((preval) => {
      return {
        ...preval,
        [name]:value
      };
    });
  };

  const onChangeFile = (e) => {
    setInpval({...inpval, image: e.target.files[0]});
   
  }

  const addinpData = async (e) => {
    e.preventDefault();
    
   

    const { name, email, work, add, mobile, desc, age,image} = inpval;
        //  const formData = new FormData();

        //  formData.append("name",inpval.name);
        //  formData.append("email",inpval.email);
        //  formData.append("age",inpval.age);
        //  formData.append("mobile",inpval.mobile);
        //  formData.append("work",inpval.wokr);
        //  formData.append("add",inpval.add);
        //  formData.append("desc",inpval.desc);
        // //  formData.append("image",inpval.image);

         const res = await fetch("/addissues",{
         method: "POST",
         headers: {
                 "Content-Type": "application/json"
        
      },
      body:JSON.stringify({
        name,
        email,
        age,
        mobile,
        work,
        add,
        desc,
        image
       
      })
    });  

    console.log(inpval);
      

    const data = await res.json() ;
    console.log(data);
    if (res.status === 422 || !data) {
         toast("No Data")
        console.log("error");
    } else {

      toast("Data Added Successfully!")

      history.push('/table');
   
      console.log("data added");
      
    }
  }


  return (
    <div className="container mt-5">
      <NavLink to="/"><HomeIcon/></NavLink>

      <NavLink style={{marginLeft:"95%"}}to="/table"><SkipPreviousIcon/></NavLink>

      <form className="mt-4" method="post" encType="multipart/form-data" >
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputEmail1" className="form-label c">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={inpval.name}
              onChange={setData}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label c">
              email
            </label>
            <input
              type="email"
              name="email"
              value={inpval.email}
              onChange={setData}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label c">
              age
            </label>
            <input
              type="text"
              name="age"
              value={inpval.age}
              onChange={setData}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label c">
              Mobile
            </label>
            <input
              type="text"
              name="mobile"
              value={inpval.mobile}
              onChange={setData}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label c">
              Work
            </label>
            <input
              type="text"
              name="work"
              value={inpval.work}
              onChange={setData}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label c">
              Address
            </label>
            <input
              type="text"
              name="add"
              value={inpval.add}
              onChange={setData}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3 col-lg-12 col-md-12 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label c">
              Description of your Issue
            </label>
            <textarea
              name="desc"
              value={inpval.desc}
              onChange={setData}
              className="form-control"
            ></textarea>
          </div>
         <div className="mb-3 col-lg-12 col-md-12 col-12">
           <label htmlFor="file"  className="form-label c">Upload Image</label>
           <input type="file" accept=".png, .jpg, .jpeg" onChange={onChangeFile} name="image" id="image" className="form-control-file"></input>
         </div>

          <button
            type="submit"
            onClick={addinpData}
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddIssues;
