import React from "react";
import loadable from "@loadable/component";
import { Route, Routes } from "react-router-dom";
import { Container } from "./components/Container";

const Home = loadable(() => import("./pages/Home/"), {
  resolveComponent: (components) => components.Home,
});

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
};

export default App;
