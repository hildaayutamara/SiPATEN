import React from "react";
import background from "../img/kanwil.jpg";
import logo from "../img/logo1.png";
import man from "../img/man.png";
import kumham from "../img/kumham.png";
import "../css/App.css";
//import axios from "axios";
//import Cross from "./components/remove.png";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { BsLockFill } from "react-icons/bs";

const Login = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${background})` }} className="background-image">
        <img src={logo} alt="logo" className="logo" />
        <img src={kumham} alt="kumham" className="kumham" />
        <div className="parent">
          <img src={man} alt="avatar1" className="avatar1" />
          <h2 className="login-text">Login</h2>
          <p className="welcome-text">
            Selamat Datang ! <br></br> Di Sistem Pencatatan Pengembangan Kompetensi ASN <br></br> Silahkan Login untuk dapat mengakses SIPATEN
          </p>
          <form className="login">
            <div className="login-field">
              <FaUserAlt className="login-icon" />
              <input type="text" className="login-input" placeholder="Username" />
            </div>
            <div className="login-field">
              <BsLockFill className="login-icon" />
              <input type="password" className="login-input" placeholder="Password" />
            </div>
          </form>
          <button className="button-custom">
            <Link className="button-text" to="/beranda-admin">
              Login
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
