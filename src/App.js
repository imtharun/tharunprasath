import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Header = lazy(() => import("./components/Header"));
const Main = lazy(() => import("./components/Main"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));

function App() {
  return (
    <main className="relative min-h-screen  gradient">
      <Header />
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Suspense>
    </main>
  );
}

export default App;
