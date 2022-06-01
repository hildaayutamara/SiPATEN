import React from "react";
import { Link } from "react-router-dom";
import background from "./components/kanwil.jpg";
import logo from "./components/logo1.png";
import man from "./components/man.png";
import kumham from "./components/kumham.png";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./components/App.css";

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
          <Form>
            <Form.Group as={Row} className="login-form">
              <Form.Label column sm="8">
                Username :
              </Form.Label>
              <Col sm="15">
                <Form.Control type="text" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="login-form" controlId="formPlaintextPassword">
              <Form.Label column sm="8">
                Password
              </Form.Label>
              <Col sm="15">
                <Form.Control type="password" />
              </Col>
            </Form.Group>
          </Form>
          <Button className="button-custom">
            <Link to="/pengembangan">
              <span className="login-text1">Login</span>
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
