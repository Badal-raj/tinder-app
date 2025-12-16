import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const [open, setOpen] = useState(false);
  //   const navigate = useNavigate();

  const handleToggleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="header-container">
      <div className="nav-link fw-bold px-3">DevTinder 🔥</div>
      <div className="d-flex right-side px-2 gap-2">
        <div className="welcome-user">👋 Welcome, Harikesh!</div>
        <div className="dropdown">
          <div
            className="rounded-circle d-flex align-items-center justify-content-center"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              width: "44px",
              height: "44px",
              cursor: "pointer",
              border: "1px solid white",
            }}
            onClick={handleToggleClick}
          >
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-circle"
              style={{ width: "36px", height: "36px", objectFit: "cover" }}
            />
          </div>

            <ul
              className={`dropdown-menu ${open ? "show" : ""} dropdown-menu-end`}
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item text-danger" href="#">
                  Logout
                </a>
              </li>
            </ul>
        </div>
      </div>
    </div>
  );
};
