import React,{useState,useEffect} from "react";
import { NavLink, useParams, useHistory} from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Edit = () => {

    toast.configure()

    const history = useHistory();

    const[inpval,setInpval] = useState({
        name:"",
        email:"",
        age:"",
        mobile:"",
        work:"",
        add:"",
        desc:""

    })

    const setData = (e) => {
        console.log(e.target.value);
        const {name,value}= e.target;
        setInpval((preval)=>{
            return {
                ...preval,
                [name]:value
            }
        })


    }

    const{id} = useParams("");
    console.log(id);



const getdata = async () => {
    const res = await fetch(`https://newgithub9843.herokuapp.com/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setInpval(data);
      console.log("got  added");
    }
  }


  useEffect(()=>{
      getdata();
  }, []);


  const updateuser = async (e) => {
      e.preventDefault();

      const {name,email,age,mobile,work,add,desc} = inpval

      const res2 = await fetch(`https://newgithub9843.herokuapp.com/updateuser/${id}`, {
          method:"PATCH",
          headers:{
              "Content-Type": "application/json"
          },

          body:JSON.stringify({
              name,email,age,mobile,work,add,desc
          })
      })

      const data2 = await res2.json()
      console.log(data2);

      if(res2.status === 422 || !data2) {
        toast("Please Fill The Data")
      } else {
          history.push("/table")
         toast("Data Updated SuccessFully!")
      }
  }

 

  return (

    <div className="container mt-5">
          
            <NavLink to="/">home</NavLink>
            
      
            <form className="mt-4">
                <div className="row">
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputEmail1" className="form-label c">Name</label>
                        <input type="text"  name="name" value={inpval.name} onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label c">email</label>
                        <input type="email"  name="email" value={inpval.email} onChange={setData}  className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label c">age</label>
                        <input type="number"  name="age" value={inpval.age} onChange={setData}  className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label c">Mobile</label>
                        <input type="number"  name="mobile" value={inpval.mobile} onChange={setData}  className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label c">Work</label>
                        <input type="text"  name="work" value={inpval.work} onChange={setData}  className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-6 col-md-6 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label c">Address</label>
                        <input type="text"  name="add"  value={inpval.add} onChange={setData}  className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 col-lg-12 col-md-12 col-12">
                        <label htmlFor="exampleInputPassword1" className="form-label c">Desciption of your Issue</label>
                        <textarea name="desc" value={inpval.desc} onChange={setData}  className="form-control"></textarea>
                    </div>
                    <div className="form">
                      <label htmlFor="exampleFormControlFile1 d"></label>
                      <input type="file"  className="form-control-file" id="exampleFormControlFile1"/>
                    </div>
                    <form>
                  
                   </form>

                    <button type="submit" onClick={updateuser} className="btn btn-primary">Submit</button>
                </div>
               
            </form>
            
        </div>
              
  );
};

export default Edit;
