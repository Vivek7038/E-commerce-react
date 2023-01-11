import React from "react";
import { Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./confirm.css";
import {  useDispatch } from 'react-redux';

import { getAllCarts ,clearCart} from "../store/cartSlice";


const Confirmation = () => {
  const dispatch = useDispatch();

  const navigate=useNavigate();
 const handleclick=()=>{
  navigate("/")

  dispatch(clearCart())
 }     
  return (

    <>
      <div style={{ marginBottom: "30vh" }}>
        {" "}
        <div className="confirm">
          <div className="content">
            <Typography variant="h1">Success</Typography>
            <Typography variant="h4" className="text">
              Congratulations, on your purchase. The order has been received and
              is being processed
            </Typography>
            <Typography variant="h4">
              <em>
                This is for demo purposes only. You have not been charged, the
                order is not being processed.
              </em>
            </Typography>
            <div className="buttons">
              <Button variant="text "
                onClick={() => handleclick()
               
                }> Continue Shopping
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
