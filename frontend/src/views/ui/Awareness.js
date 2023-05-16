import React from "react";
import "../../styles/awareness.css";   
import AwarenessTable from "../../UI/AwarenessTable";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const Awareness=() =>{
    const navigate = useNavigate();
    return(
     <div className="awareness">
         <div className="awareness__wrapper">
            <h2 className="awareness__title">Awareness</h2>
            
            
            <div className="btn">
            <Button variant="contained" onClick={() => navigate("/awareness/addAwareness")}>Add</Button>
            </div>
            <div className="container">
            <AwarenessTable/>
            </div>
       

        
        </div>
    </div>


    );

};
export default Awareness;


