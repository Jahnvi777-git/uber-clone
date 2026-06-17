import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const body = { email: email.trim().toLowerCase(), password: password };
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        body,
      );

      if (response.status === 200) {
        const data = response.data;
        setCaptain(data.captain);
        localStorage.setItem("token", data.token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
        navigate("/captain-home");
      }
    } catch (err) {
      console.error("Captain login failed:", err);
      const message =
        err?.response?.data?.message ||
        err?.response?.data?.errors?.[0]?.msg ||
        err.message ||
        "Login failed";
      setError(message);
    } finally {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="uber logo"
        />
        <form onSubmit={(e) => submitHandler(e)}>
          {error && <p className="text-red-600 mb-3">{error}</p>}
          <h3 className="text-lg mb-2">What's your email?</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeee] rounded px-4 py-2 border w-full placeholder:text-lg"
            required
            type="email"
            placeholder="email@example.com"
          />

          <h3 className="text-lg mb-2">Enter password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeee] rounded px-4 py-2 mb-5 border w-full placeholder:text-lg"
            type="password"
            required
            placeholder="Enter password"
          />

          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 text-lg w-full placeholder:text-base">
            Login
          </button>
        </form>
        <Link to="/captainsignup" className="text-blue-600">
          Register as a Captain
        </Link>
      </div>
      <div>
        <Link
          to="/userlogin"
          className="bg-[#ff8a3d] flex flex-center justify-center text-white font-semibold mb-7 rounded px-4 py-2 text-lg w-full placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
