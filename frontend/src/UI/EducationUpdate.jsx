import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert2";
import axios from "axios";
import EducationService from "../services/EducationService";

export default function EducationUpdate() {
  const mystyle = { backgroundColor: "#FAFAFA" };

  const { _id } = useParams();
  const [education, setEducation] = useState({
    type: "",
    Altitude: "",
    Longitude: "",
    Status: "",
    Specialists: "",
    Reports: "",
  });

  useEffect(() => {
    const getEducationById = () => {
      EducationService.getItemById(_id).then((res) => {
        setEducation(res.data);
        console.log(res.data);
      });
    };
    getEducationById();
  }, []);

  const handleChangeText = (type, value) => {
    setEducation({ ...education, [type]: value.target.value });
    console.log(education);
  };

  const UpdateEducation = (e) => {
    e.preventDefault();
    const edu = {
      type: education.type,
      Altitude: education.Altitude,
      Longitude: education.Longitude,
      Status: education.Status,
      Specialists: education.Specialists,
      Reports: education.Reports,
    };
    axios
      .put(`http://localhost:5000/education/${_id}`, edu)
      .then(() => {
        swal.fire(` succesfully updated`);
        navigate("/research");
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
          <h2 className="profile__title">Update Education & Research</h2>
          <form onSubmit={UpdateEducation}>
            <div className="form__group">
              <div>
                <label>Type</label>
                <input
                  name="ffname"
                  type="text"
                  placeholder="Steve"
                  title="First Name must be required"
                  required
                  value={education.type}
                  onChange={(val) => handleChangeText("type", val)}
                />
              </div>

              <div>
                <label>Nesting Density</label>
                <input
                  name="flname"
                  type="text"
                  placeholder="Rogers"
                  title="Last Name must be required "
                  required
                  value={education.Altitude}
                  onChange={(val) => handleChangeText("Altitude", val)}
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Egg Laying Density</label>
                <input
                  name="faddress"
                  type="text"
                  placeholder="2/1, Peters Rd, Colombo-04"
                  title="Address must be required"
                  required
                  value={education.Longitude}
                  onChange={(val) => handleChangeText("Longitude", val)}
                />
              </div>

              <div>
                <label>Status</label>
                <input
                  name="femail"
                  type="text"
                  placeholder="ABC@gmail.com"
                  title="E-mail must be required"
                  required
                  value={education.Status}
                  onChange={(val) => handleChangeText("Status", val)}
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Specialists</label>
                <input
                  name="famount"
                  type="text"
                  placeholder="Rs.XXXXX.XX"
                  title="Amount must be required"
                  required
                  value={education.Specialists}
                  onChange={(val) => handleChangeText("Specialists", val)}
                />
              </div>

              <div>
                <label>Reports</label>
                <input
                  name="fmethod"
                  type="text"
                  placeholder="Method must be required"
                  required
                  value={education.Reports}
                  onChange={(val) => handleChangeText("Reports", val)}
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
                  onClick={() => navigate("/research")}
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