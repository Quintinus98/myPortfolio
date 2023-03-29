import React from "react";
import { AppHero } from "../features/Home/Hero";
import { AppAbout } from "../features/Home/About";
import { AppProjects } from "../features/Home/Projects";

export const AppHome: React.FC = () => {

  return (
    <div className="main">
        <AppHero />
        <AppAbout />
        <AppProjects />
    </div>
  )
}