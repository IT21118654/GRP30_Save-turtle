import React from "react";
import "../../styles/fundraise.css";   
import FundraiseTable from "../../UI/FundraiseTable";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const Fundraises=() =>{
    const navigate = useNavigate();
    return(
     <div className="fundraise">
         <div className="fundraise__wrapper">
            <h2 className="fundraise__title">Fundraise</h2>
            
            
            <div className="btn">
            <Button variant="contained" onClick={() => navigate("/fundraise/addFundraise")}>Add</Button>
            </div>
            <div className="container">
            <FundraiseTable/>
            </div>
       

        
        </div>
    </div>


    );

};
export default Fundraises;


