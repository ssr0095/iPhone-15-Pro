import React from "react";
import * as Sentry from "@sentry/react";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HighLights from "./components/HighLights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <NavBar />
      <Hero />
      <HighLights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
