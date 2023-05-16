import React, { useState } from "react";
import axios from "axios";

export default function AddEducation(){

    const [type, setType] = useState("");
    const [Altitude, setAltitude] = useState("");
    const [Longitude, setLongitude] = useState("");
    const [Status, setStatus] = useState("");
    const [Specialists, setSpecialists] = useState("");
    const [Reports, setReports] = useState("");

    function setData(e){
        e.preventDefault();

        const newEducation = {
            type,
            Altitude,
            Longitude,
            Status,
            Specialists,
            Reports
        }

        axios.post("http://localhost:5000/education/add", newEducation).then(() =>{
            alert("Data Added Successfully!")
        }).catch((err) => {
            alert(err)
        })

    }

    return(
        <div>
            <form onSubmit={setData}>
  <div className="mb-3">
    <label for="type" class="form-label">Turtle Type</label>
    <input type="text" class="form-control" id="type"  placeholder="Enter Turtle Type" 
    onChange={(e) => {
        setType(e.target.value);

    }}/>
  </div>

  <div className="mb-3">
    <label for="altitude" class="form-label">Altitude</label>
    <input type="text" class="form-control" id="altitude"  placeholder="Enter Altitude"
     onChange={(e) => {
        setAltitude(e.target.value);

    }}/>
  </div>

  <div className="mb-3">
    <label for="longitude" class="form-label">Longitude</label>
    <input type="text" class="form-control" id="longitude"  placeholder="Enter Longitude"
     onChange={(e) => {
        setLongitude(e.target.value);

    }}/>
  </div>

  <div className="mb-3">
    <label for="status" class="form-label">Turtle Status</label>
    <input type="text" class="form-control" id="status"  placeholder="Enter Turtle Status"
     onChange={(e) => {
        setStatus(e.target.value);

    }}/>
  </div>

  <div className="mb-3">
    <label for="specialists" class="form-label">Turtle Specialists</label>
    <input type="text" class="form-control" id="specialists" placeholder="Enter Turtle Specialists"
     onChange={(e) => {
        setSpecialists(e.target.value);

    }}/>
  </div>

  <div className="mb-3">
    <label for="reports" class="form-label">Turtle Repots</label>
    <input type="text" class="form-control" id="reports"  placeholder="Enter Turtle Repots"
     onChange={(e) => {
        setReports(e.target.value);

    }}/>
  </div>


  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    )
}

