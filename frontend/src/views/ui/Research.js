import React from "react";
import "../../styles/fundraise.css";   
import EducationTable from "../../UI/EducationTable";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const Research=() =>{
    const navigate = useNavigate();
    return(
     <div className="fundraise">
         <div className="fundraise__wrapper">
            <h2 className="fundraise__title">Education and Research</h2>
            
            
            <div className="btn">
            <Button variant="contained" onClick={() => navigate("/education/addEducation")}>Add</Button>
            </div>
            <div className="container">
            <EducationTable/>
            </div>
       

        
        </div>
    </div>


    );

};
export default Research;