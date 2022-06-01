import React, { useState } from "react";
import background from "./components/kanwil.jpg";
import logo from "./components/logo1.png";
import man from "./components/man.png";
import kumham from "./components/kumham.png";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./components/App.css";
import axios from "axios";
import Cross from "./components/remove.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const body = { username: username, password: password };
    const Swal = require("sweetalert2");
    try {
      const res = await axios.post("http://localhost:3200/data_user", body).then((resp) => {
        localStorage.setItem("token", resp.data.data.token);
        localStorage.setItem("id", resp.data.data.id);
        localStorage.setItem("role", resp.data.data.role);
        localStorage.setItem("username", resp.data.data.username);
        window.location.replace("/pengembangan");
      });

      console.log("respond api", res.data);
    } catch (error) {
      if (error.response.status === 400) {
        // console.log("ini error", error.response.data.errors[0]);
        Swal.fire({
          imageUrl: `${Cross}`,
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: "Custom image",
          width: 450,
          confirmButtonText: "Ok",
          confirmButtonColor: "#625BAD",
          title: error.response.data.errors[0],
          text: "Please Check Again",
        });
      }
      if (error.response.status === 401) {
        // console.log("ini error", error.response.data.errors[0]);
        Swal.fire({
          imageUrl: `${Cross}`,
          imageWidth: 100,
          imageHeight: 100,
          imageAlt: "Custom image",
          width: 450,
          confirmButtonText: "Ok",
          confirmButtonColor: "#625BAD",
          title: error.response.data.errors[0],
          text: "Please Check Again",
        });
      }
      if (error.response.status === 403) {
        alert(`Sesi anda habis, mohon login kembali`);
        if (error.response.status === 500) {
          alert(`Sepertinya ada yang salah`);
        }
      }
    }
  };
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
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm="8">
                Username :
              </Form.Label>
              <Col sm="15">
                <Form.Control className="login-form" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="8">
                Password
              </Form.Label>
              <Col sm="15">
                <Form.Control className="login-form" type="password" placeholder="password" autoComplete="current-password" onChange={(e) => setPassword(e.target.value)} />
              </Col>
            </Form.Group>
          </Form>
          <Button className="button-custom" onClick={handleLogin}>
            <Link to="/pengembangan">Login</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
