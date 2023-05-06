import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {getMe} from '../../../api/UsersAPI';

const Admin = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (getMe().role !== "admin") {
      navigate("/login");
    }
  }, []);
  return <>{props.children}</>;
};

export default Admin;