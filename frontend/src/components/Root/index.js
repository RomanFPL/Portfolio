import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "../ProfilePage";
import AppLayout from "../AppLayout";
import ProjectsPage from "../ProjectsPage";
import SkillsPage from "../SkillsPage";
import NotFound from "../NotFound";

const Root = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/about" element={<ProfilePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppLayout>
  );
};

export default Root;
