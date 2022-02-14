import React, { useEffect, useState } from "react";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { NavLink } from "react-router-dom";

const Table = () => {

  const [getuserdata, setUserData] = useState([]);
  console.log(getuserdata);

  const getdata = async () => {
    const res = await fetch("/table", {
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
      setUserData(data);
      console.log("got  added");
    }
  }

  useEffect(() => {
    getdata();
  }, [])

const deleteuser = async (id) => {
const res2 = await fetch(`/deleteuser/${id}`,{
    method:"DELETE",
    headers: {
      "Content-Type" : "application/json"
    }
  })

  const deletedata = await res2.json();
  console.log(deleteuser);

  if(res2.status === 422 || !deletedata) {
    console.log("error")
  } else {
    console.log("data delted")
    getdata();
  }
} 


  return (
    <>
      <div className="mt-5">
       
        <div className="container tb">
          <div className="add_btn mt-2 mb-2">
            <NavLink to="/addissues" className="btn btn-primary">
              Add Issues
            </NavLink>
            <NavLink to="/" className="signup-image-link">
              Go To Home Page
              </NavLink>
          </div>
         

          <table className="table">
            <thead>
              <tr className="table-dark">
                <th scope="col">id</th>
                <th scope="col">username</th>
                <th scope="col">email</th>
                <th scope="col">job</th>
                <th scope="col">number</th>
                <th scope="col"></th>
               
              </tr>
            </thead>
            <tbody>

            {
              getuserdata.map((element,id) => {
                return(
                  <>
                    <tr>
                      <th scope="row">{id+1}</th>
                      <td>{element.name}</td>
                      <td>{element.email}</td>
                      <td>{element.work}</td>
                      <td>{element.mobile}</td>
                    

                      <td className="d-flex justify-content-between">
                       <NavLink to={`view/${element._id}`}><button className="btn ">
                          <RemoveRedEyeIcon />
                        </button></NavLink> 
                        <NavLink to={`edit/${element._id}`}><button className="btn btn  ">
                          <EditIcon />
                        </button></NavLink>
                        <button onClick={()=> deleteuser(element._id)} className="btn btn ">
                          <DeleteIcon />
                        </button>
                      </td>
                    </tr>

                  </>
                )
              })
            }

                   
                  
              
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table;
