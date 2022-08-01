import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth/useAuth";

const DashboardPage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleClick = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <button style={{ backgrounColor: "lightblue" }} onClick={handleClick}>
        Cerrar Sesión
      </button>
    </div>
  );
};

export default DashboardPage;
