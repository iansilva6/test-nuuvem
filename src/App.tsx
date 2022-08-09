import loadable from "@loadable/component"
import { Route, Routes } from "react-router-dom"

const Home = loadable(() => import("./pages/Home/"), {
  resolveComponent: (components) => components.Home,
});

const Search = loadable(() => import("./pages/Search/"), {
  resolveComponent: (components) => components.Search,
});

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
};

export default App
