import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export function PublicRoute({ Component, props }) {
  // const user = useSelector((state) => state.Auth);
  const user = null;
  if (user) {
    // if (user.role === "Admin") {
    //   return <Redirect to="/adminDashboard" />;
    // } else {
    //   return <Redirect to="/dashboard" />;
    // }
  } else {
    return <Component {...props} />;
  }
}
