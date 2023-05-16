import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert2";
import axios from "axios";

export default function AddAwareness() {
  const mystyle = { backgroundColor: "#b7ffe913" };
  const [awareness, setAwareness] = useState({
    ftopic: "",
    fdescription: "",
    flinks: "",
    fimage: "",
    fvideo: "",
  });

  const handleChangeText = (name, value) => {
    setAwareness({ ...awareness, [name]: value.target.value });
    console.log(awareness);
  };

  const AddAwareness = (e) => {
    e.preventDefault();
    const fund = {
      ftopic: awareness.ftopic,
      fdescription: awareness.fdescription,
      flinks: awareness.flinks,
      fimage: awareness.fimage,
      fvideo: awareness.fvideo,
    };
    axios
      .post("http://localhost:5000/awareness", fund)
      .then(() => {
        swal.fire(` succesfully added`);
        navigate("/awareness");
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
          <h2 className="profile__title">Add awareness</h2>
          <form onSubmit={AddAwareness}>
            <div className="form__group">
              <div>
                <label>Topic </label>
                <input
                  name="ftopic"
                  type="text"
                  placeholder="enter topic"
                  title="Topic Name must be required"
                  required
                  onChange={(val) => handleChangeText("ftopic", val)}
                />
              </div>

              <div>
                <label>Description </label>
                <input
                  name="fdescription"
                  type="text"
                  placeholder="enter desription"
                  title="desription must be required "
                  required
                  onChange={(val) => handleChangeText("fdescription", val)}
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Links </label>
                <input
                  name="flinks"
                  type="text"
                  placeholder="enter link"
                  title="link address be required"
                  required
                  onChange={(val) => handleChangeText("flink", val)}
                />
              </div>

              <div>
                <label>Image</label>
                <input
                  name="fimage"
                  type="text"
                  placeholder="enter image"
                  title="image be required"
                  required
                  onChange={(val) => handleChangeText("fimage", val)}
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Video </label>
                <input
                  name="fvideo"
                  type="text"
                  placeholder="enter video"
                  title="video must be required"
                  required
                  onChange={(val) => handleChangeText("fvideo", val)}
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
                  onClick={() => navigate("/Awareness")}
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
