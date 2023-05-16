import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert2";
import axios from "axios";
import AwarenessService from "../services/AwarenessService";

export default function AwarenessUpdate() {
  const mystyle = { backgroundColor: "#FAFAFA" };

  const { _id } = useParams();
  const [awareness, setAwareness] = useState({
    ftopic: "",
    fdescription: "",
    flinks: "",
    fimage: "",
    fvideo: "",
  });

  useEffect(() => {
    const getAwarenessById = () => {
      AwarenessService.getItemById(_id).then((res) => {
        setAwareness(res.data);
        console.log(res.data);
      });
    };
    getAwarenessById();
  }, []);

  const handleChangeText = (ftopic, value) => {
    setAwareness({ ...awareness, [ftopic]: value.target.value });
    console.log(awareness);
  };

  const UpdateAwareness = (e) => {
    e.preventDefault();
    const fund = {
      ftopic: awareness.ftopic,
      fdescription: awareness.fdescription,
      flinks: awareness.flinks,
      fimage: awareness.fimage,
      fvideo: awareness.fvideo,
    };
    axios
      .put(`http://localhost:5000/awareness/${_id}`, fund)
      .then(() => {
        swal.fire(` succesfully updated`);
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
          <h2 className="profile__title">Update Awareness</h2>
          <form onSubmit={UpdateAwareness}>
            <div className="form__group">
              <div>
                <label>Topic</label>
                <input
                  name="ftopic"
                  type="text"
                  placeholder="enter topic name"
                  title="Topic Name must be required"
                  required
                  value={awareness.ftopic}
                  onChange={(val) => handleChangeText("ftopic", val)}
                />
              </div>

              <div>
                <label>Description </label>
                <input
                  name="fdescription"
                  type="text"
                  placeholder="enter description"
                  title="description must be required "
                  required
                  value={awareness.fdescription}
                  onChange={(val) => handleChangeText("fdescription", val)}
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Links </label>
                <input
                  name="faddress"
                  type="text"
                  placeholder="Enter Links"
                  title="Links must be required"
                  required
                  value={awareness.flinks}
                  onChange={(val) => handleChangeText("flinks", val)}
                />
              </div>

              <div>
                <label>Image Links </label>
                <input
                  name="fimage"
                  type="text"
                  placeholder="Enter image link"
                  title="image link must be required"
                  required
                  value={awareness.fimage}
                  onChange={(val) => handleChangeText("fimage", val)}
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Video Links</label>
                <input
                  name="fvideo"
                  type="text"
                  placeholder="Enter video link"
                  title="video link must be required"
                  required
                  value={awareness.fvideo}
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
