import React from "react";
import "../../styles/advocacy.css";   
import AdvocacyTable from "../../UI/AdvocacyTable";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


const advocacies=() =>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    return(
     <div className="advocacy">
         <div className="advocacy__wrapper">
            <h2 className="advocacy__title">Advocacy</h2>
            
            
            <div className="btn">
            <Button variant="contained" onClick={() => navigate("/advocacy/addAdvocacy")}>Add</Button>
            </div>
            <div className="container">
            <AdvocacyTable/>
            </div>
       

        
        </div>
    </div>


    );

};
export default advocacies;