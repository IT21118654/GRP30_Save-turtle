import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert2";
import axios from "axios";
import FundraiseService from "../services/FundraiseService";

export default function FundraiseUpdate() {
  const mystyle = { backgroundColor: "#FAFAFA" };

  const { _id } = useParams();
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

  useEffect(() => {
    const getFundraiseById = () => {
      FundraiseService.getItemById(_id).then((res) => {
        setFundraise(res.data);
        console.log(res.data);
      });
    };
    getFundraiseById();
  }, []);

  const handleChangeText = (ffname, value) => {
    setFundraise({ ...fundraise, [ffname]: value.target.value });
    console.log(fundraise);
  };

  const UpdateFundraise = (e) => {
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
      .put(`http://localhost:5000/fundraise/${_id}`, fund)
      .then(() => {
        swal.fire(` succesfully updated`);
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
          <h2 className="profile__title">Update Fundraise</h2>
          <form onSubmit={UpdateFundraise}>
            <div className="form__group">
              <div>
                <label>First Name </label>
                <input
                  name="ffname"
                  type="text"
                  placeholder="Steve"
                  title="First Name must be required"
                  required
                  value={fundraise.ffname}
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
                  value={fundraise.flname}
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
                  value={fundraise.faddress}
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
                  value={fundraise.femail}
                  onChange={(val) => handleChangeText("femail", val)}
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Amount</label>
                <input
                  name="famount"
                  type="text"
                  placeholder="Rs.XXXXX.XX"
                  title="Amount must be required"
                  required
                  value={fundraise.famount}
                  onChange={(val) => handleChangeText("famount", val)}
                />
              </div>

              <div>
                <label>Method</label>
                <input
                  name="fmethod"
                  type="text"
                  placeholder="Method must be required"
                  required
                  value={fundraise.fmethod}
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
                  required
                  placeholder="Expiry must be required"
                  value={fundraise.fexpiry}
                  onChange={(val) => handleChangeText("fexpiry", val)}
                />
              </div>

              <div>
                <label>CVV </label>
                <input
                  name="fcvv"
                  type="text"
                  required
                  value={fundraise.fcvv}
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
                  required
                  placeholder="Type of Fundraise must be required"
                  value={fundraise.ftype}
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
