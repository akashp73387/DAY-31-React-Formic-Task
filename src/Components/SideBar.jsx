import React from "react";
import { BookOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="logo">
      <div className="logo-icon">
        <Link to="/">
          <BookOutlined />
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
