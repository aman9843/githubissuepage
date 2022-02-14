import React, { useEffect, useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutLine from "@material-ui/icons/DeleteOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DescriptionIcon from "@mui/icons-material/Description";
import { NavLink, useParams, useHistory } from "react-router-dom";
const Details = () => {
  const history = useHistory();

  const [getuserdata, setUserData] = useState([]);
  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {
    const res = await fetch(`/getuser/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setUserData(data);
      console.log("got  added");
    }
  };

  useEffect(() => {
    getdata();
  });

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
        history.push("/table")
      }
    } 
    


  return (
    <div className="container mt-3">
      <h1 style={{ fontWeight: 400 }}> Welcome Aman Prasad</h1>
      <Card sx={{ minWidth: 600 }}>
        <CardContent>
          <div className="add_btn">
            <NavLink to={`/edit/${getuserdata._id}`}>
              <button className="btn btn-primary mx-2">
                <EditIcon />
              </button>
            </NavLink>
            <button
              onClick={() => deleteuser(getuserdata._id)}
              className="btn btn-danger"
            >
              <DeleteOutLine />
            </button>
          </div>
          <div className="row">
            <div className="left-view col-lg-6 col-md-6 col-12">
              <h3 className="mt-3">
                Name:{" "}
                <span style={{ fontWeight: 400 }}>{getuserdata.name}</span>
              </h3>
              <h3 className="mt-3">
                Age: <span style={{ fontWeight: 400 }}>{getuserdata.age}</span>
              </h3>
              <p className="mt-3 dp">
                <EmailIcon />
                Email:<span>{getuserdata.email}</span>
              </p>
              <p className="mt-3 dp">
                <WorkIcon />
                Occupation:<span>{getuserdata.work}</span>
              </p>
            </div>
            <div className="right-view col-lg-6 col-md-6 col-12">
              <p className="mt-5 dp">
                <PhoneIcon />
                Phone:<span>{getuserdata.mobile}</span>
              </p>
              <p className="mt-3 dp">
                <LocationOnIcon />
                Location:<span>{getuserdata.add}</span>
              </p>
              <p className="mt-3 dp">
                <DescriptionIcon />
                Description:<span>{getuserdata.desc}</span>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
