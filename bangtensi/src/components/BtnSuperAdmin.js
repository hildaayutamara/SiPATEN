import React from "react";
import { Button } from "react-bootstrap";
import "../css/App.css";
import { Link } from "react-router-dom";

const BtnSuperAdmin = () => {
  return (
    <>
      <Button className="btn-hasil">
        <Link className="button-text" to="/beranda-super-admin">
          Super Admin
        </Link>
      </Button>
    </>
  );
};

export default BtnSuperAdmin;
