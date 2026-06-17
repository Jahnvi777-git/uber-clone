import React, { useContext, useEffect, useState } from "react";
import { UserDataContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserProtectedWrapper = ({ children }) => {
  const { user, setUser } = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/userlogin");
      return;
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.user);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        localStorage.removeItem("token");
        navigate("/userlogin");
      });
  }, [navigate, setUser, token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default UserProtectedWrapper;
