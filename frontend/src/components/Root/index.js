import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProfilePage from "../ProfilePage";
import AppLayout from "../AppLayout";
import ProjectsPage from "../ProjectsPage";
import SkillsPage from "../SkillsPage";

const Root = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/about" element={<ProfilePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="*" element={<></>} />
      </Routes>
    </AppLayout>
  );
};

export default Root;
