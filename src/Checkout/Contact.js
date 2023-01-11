import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";

import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";
import "./contact.scss";
import Payment from "../Payment";
import { Link, useNavigate } from "react-router-dom";
import { formatPrice } from '../utils/helpers';

import { useSelector } from "react-redux";
import { getAllCarts } from "../store/cartSlice";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);
  const [check, setcheck] = useState(false);

  const navigate = useNavigate();

  const carts = useSelector(getAllCarts);

  // useEffect(() => {
  //   console.log(carts);
  // }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);

    const products = (carts || []).map(({ id, quantity, totalPrice}) => ({
      id,
      quantity,
     totalPrice,
    }));
   
   
    try {
      await addDoc(collection(db, "contactsInfo"), {
        name,
        email,
        Address,
        pincode,
        phone,
        products,
      });
      if (setcheck === false) {
      }
      setName("");
      setEmail("");
      setAddress("");
      setPhone("");
      setPincode("");
    
      setDisableBtn(false);

      navigate("/success");
    } catch (error) {
      console.log(error);

      setDisableBtn(false);
      if (setcheck === false) {
      }
    }
  };

  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submitHandler}>
          <h2>SHIPPING ADDRESS</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Your Address"
            required
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="number"
            placeholder="Your Phone number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="number"
            placeholder="Your Area Pincode"
            required
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <div style={{ display: "flex" }}>
            {" "}
            <input
              style={{ marginLeft: -220 }}
              type="checkbox"
              placeholder="Your Area Pincode"
              required
              value="cash on delivery"
              defaultChecked={check}
            />
            <h1 style={{ fontSize: 20 }}>cash on delivery</h1>
          </div>
          <motion.button
            type="submit"
            disabled={disableBtn}
            className={disableBtn ? "disablebtn" : ""}
          >
            Confirm details
          </motion.button>
        </motion.form>
      </section>
      <aside></aside>
    </div>
  );
};

export default Contact;
