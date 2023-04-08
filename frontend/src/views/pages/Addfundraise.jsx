import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert2";
import axios from "axios";

export default function AddFundraise() {
  const mystyle = { backgroundColor: "#b7ffe913" };
  const [fundraise, setFundraise] = useState({
    ffname: "",
    flname: "",
    faddress: "",
    femail: "",
    famount: "",
    fmethod: "",
    fexpiry: "",
    fcvv: "",
    ftype:"",
  });

  const handleChangeText = (name, value) => {
    setFundraise({ ...fundraise, [name]: value.target.value });
    console.log(fundraise);
  };

  const AddFundraise = (e) => {
    e.preventDefault();
    const fund = {
      ffname: fundraise.ffname,
      flname: fundraise.flname,
      faddress: fundraise.faddress,
      femail: fundraise.femail,
      famount: fundraise.famount,
      fmethod: fundraise.fmethod,
      fexpiry: fundraise.fexpiry,
      fcvv: fundraise.fcvv,
      ftype: fundraise.ftype,
    };
    axios
      .post("http://localhost:5000/fundraise", fund)
      .then(() => {
        swal.fire(` succesfully added`);
        navigate("/fundraise");
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
          <h2 className="profile__title">Add Fundraise</h2>
          <form onSubmit={AddFundraise}>
            <div className="form__group">
              <div>
                <label>First Name </label>
                <input
                  name="ffname"
                  type="text"
                  placeholder="Steve"
                  title="First Name must be required"
                  required
                  onChange={(val) => handleChangeText("ffname", val)}
                />
              </div>

              <div>
                <label>Last Name </label>
                <input
                  name="flname"
                  type="text"
                  placeholder="Rogers"
                  title="Last Name must be required "
                  required
                  onChange={(val) => handleChangeText("flname", val)}
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Address </label>
                <input
                  name="faddress"
                  type="text"
                  placeholder="2/1, Peters Rd, Colombo-04"
                  title="Address must be required"
                  required
                  onChange={(val) => handleChangeText("faddress", val)}
                />
              </div>

              <div>
                <label>E-mail </label>
                <input
                  name="femail"
                  type="text"
                  placeholder="ABC@gmail.com"
                  title="E-mail must be required"
                  required
                  onChange={(val) => handleChangeText("femail", val)}
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Amount </label>
                <input
                  name="famount"
                  type="text"
                  placeholder="Rs.XXXXX.XX"
                  title="Amount must be required"
                  required
                  onChange={(val) => handleChangeText("famount", val)}
                />
              </div>

              <div>
                <label>Method </label>
                <input
                  name="fmethod"
                  type="text"
                  placeholder="VISA/MASTER"
                  title="Method must be required"
                  required
                  onChange={(val) => handleChangeText("fmethod", val)}
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Expiry </label>
                <input
                  name="fexpiry"
                  type="text"
                  placeholder="MM/YY"
                  required
                  onChange={(val) => handleChangeText("fexpiry", val)}
                />
              </div>

              <div>
                <label>CVV </label>
                <input
                  name="fcvv"
                  type="text"
                  placeholder="Enter your 3 digit code here"
                  required
                  onChange={(val) => handleChangeText("fcvv", val)}
                />
              </div>

              </div>

              <div className="form__group">

              <div>
                <label>Type </label>
                <input
                  name="ftype"
                  type="text"
                  placeholder="Fundraise Type"
                  required
                  onChange={(val) => handleChangeText("ftype", val)}
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
                  onClick={() => navigate("/Fundraise")}
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
