import React from "react";
import { MainLayout } from "./src/layouts/MainLayout";
import { AdminLayout } from "./src/layouts/AdminLayout";

export const wrapPageElement = ({ element, props }) => {
  const path = props.location.pathname;

  if (path.startsWith("/admin")) {
    return <AdminLayout>{element}</AdminLayout>;
  }

  return <MainLayout>{element}</MainLayout>;
};
