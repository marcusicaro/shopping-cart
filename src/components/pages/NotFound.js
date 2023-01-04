import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return <h1>404 Dragon Not Found</h1>;
}
