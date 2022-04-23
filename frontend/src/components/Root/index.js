import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import AppLayout from "../AppLayout";

const Root = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </AppLayout>
  );
};

export default Root;
