import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert2";
import axios from "axios";

export default function AddAdvocacy() {
  const mystyle = { backgroundColor: "#b7ffe913" };
  const [advocacy, setAdvocacy] = useState({
    eventname: "",
    description: "",
    place: "",
    contact: "",
    image: "",
    
  });

  const handleChangeText = (name, value) => {
    setAdvocacy({ ...advocacy, [name]: value.target.value });
    console.log(advocacy);
  };

  const AddAdvocacy = (e) => {
    e.preventDefault();
    const Adv = {
      eventname: advocacy.eventname,
      description: advocacy.description,
      place: advocacy.place,
      contact: advocacy.contact,
      image: advocacy.image,
      
    };
    axios
      .post("http://localhost:5000/advocacy", Adv)
      .then(() => {
        swal.fire(` succesfully added`);
        navigate("/advocacy");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate = useNavigate();
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="details__form">
          <h2 className="profile__title">Add Advocacy</h2>
          <form onSubmit={AddAdvocacy}>
            <div className="form__group">
              <div>
              <label>Event Name </label>
                <input
                  name="eventname"
                  type="text"
                  placeholder="Marathon"
                  title="required"
                  required
                
                  onChange={(val) => handleChangeText("eventname", val)}
                />
              </div>

              <div>
                <label>Description </label>
                <input
                  name="description"
                  type="text"
                  placeholder="olive ridley marathon"
                  title="required "
                  required
                  
                  onChange={(val) => handleChangeText("description", val)}
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Place </label>
                <input
                  name="place"
                  type="text"
                  placeholder="2/1, Peters Rd, Colombo-04"
                  title="required"
                  required
                 
                  onChange={(val) => handleChangeText("place", val)}
                />
              </div>

              <div>
                <label>Contact </label>
                <input
                  name="contact"
                  type="text"
                  placeholder="ABC@gmail.com"
                  title="required"
                  required
                 
                  onChange={(val) => handleChangeText("contact", val)}
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Image</label>
                <input
                  name="image"
                  type="text"
                  placeholder="image URL"
                  title="required"
                  required
                 
                  onChange={(val) => handleChangeText("image", val)}
                />
              </div>
            </div>

            <div className="form__group">
              <div className="profile__img-btns">
                <button type="submit" className="sbt__btn">
                  Submit
                </button>
                <button
                  className="cncl__btn"
                  onClick={() => navigate("/Advocacy")}
                >
                  Cancel
                </button>
              </div>
            </div>

            <div />
          </form>
        </div>
      </div>
    </div>
  );
}
