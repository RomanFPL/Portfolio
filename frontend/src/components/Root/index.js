import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "../ProfilePage";
import AppLayout from "../AppLayout";
import ProjectsPage from "../ProjectsPage";
import SkillsPage from "../SkillsPage";
import NotFound from "../NotFound";

import text from "../../mockText.json";

const Root = () => {
  return (
    <AppLayout>
      <Routes>
        <Route path={text.pageLinks.main} element={null} />
        <Route path={text.pageLinks.about} element={<ProfilePage />} />
        <Route path={text.pageLinks.projects} element={<ProjectsPage />} />
        <Route path={text.pageLinks.skills} element={<SkillsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppLayout>
  );
};

export default Root;
