import React, { useState, useEffect } from "react";
import background from "../img/kanwil.jpg";
import logo from "../img/logo1.png";
import man from "../img/man.png";
import kumham from "../img/kumham.png";
import "../css/App.css";
import axios from "axios";
//import Cross from "./components/remove.png";
import { FaUserAlt } from "react-icons/fa";
import { BsLockFill } from "react-icons/bs";

const Login = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [User, setUser] = useState([]);
  const getdata = async () => {
    await axios
      .get(`http://localhost:3200/data_user`)
      .then((result) => setUser(result.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getdata();
  }, []);

  const handleSubmit = () => {
    let currentUser = User.filter((user) => user.username === Username && user.password === Password);
    currentUser.length ? window.location.replace("/beranda-admin") : alert("Wrong data");
  };

  console.log("Data User", User);
  console.log("Data onChange", Username, Password);

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
              <input type="text" className="login-input" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="login-field">
              <BsLockFill className="login-icon" />
              <input type="password" className="login-input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
          </form>
          <button className="button-custom" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
