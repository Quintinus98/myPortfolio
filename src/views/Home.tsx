import React from "react";
import { AppHero } from "../features/Home/Hero";
import { AppAbout } from "../features/Home/About";

export const AppHome: React.FC = () => {

  return (
    <div className="main">
        <AppHero />
        <AppAbout />
    </div>
  )
}