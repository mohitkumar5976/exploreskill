import React, { useContext } from "react";
import "./Header.css";
import img1 from "../images/aurat.png";
import { UserContext } from "../Context/UserAuthContext";
import { useNavigate } from "react-router-dom";

function LoginHeader() {
  const { logOut } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogOut = async (e) => {
    e.preventDefault();

    try {
      await logOut();
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div className="container-fluid topBar">
        <div className="topBar-left ">
          <ul className="topLeft-ul ">
            <li className="topLeft-links">
              <a href="/dashboard" className="text-decoration-none text-white">
                Home
              </a>
            </li>
            <li className="topLeft-links">
              <a
                href="/dashboard/products"
                className="text-decoration-none text-white"
              >
                Products
              </a>
            </li>
            <li className="topLeft-links">
              <a
                href="/dashboard/superwomen"
                className="text-decoration-none text-white"
              >
                Super Women
              </a>
            </li>
            <li className="topLeft-links">
              <a
                href="/dashboard/about"
                className="text-decoration-none text-white"
              >
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="topBar-center">
          <div className="logo">
            <a href="/">
              <img
                src={img1}
                alt=""
                className="rounded-circle"
                style={{
                  width: "70px",
                  height: "50px",
                }}
              />
            </a>
          </div>
          <div className="site-name">
            <a href="/dashboard" className="text-decoration-none text-white ">
              ExploreSkills
            </a>
          </div>
        </div>

        <div className="topRight ">
          <ul className="topRight-ul">
            <li className="topRight-links">
              <a
                href="/dashboard/donate"
                className="text-decoration-none text-white "
              >
                <button className="btn btn-info text-white">Donate</button>
              </a>
            </li>
            <li className="topRight-links">
              <a href="/login">
                <button className="btn btn-success" onClick={handleLogOut}>
                  Logout
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default LoginHeader;
