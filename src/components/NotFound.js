import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 1500);
  });

  return <div>404 Dragon Not Found</div>;
}
