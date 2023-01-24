import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";

const Header = lazy(() => import("./components/Header"));
const Main = lazy(() => import("./components/Main"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Error = lazy(() => import("./components/Error"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route
          path="/"
          element={
            <main className="relative min-h-screen  gradient">
              <Header />
              <Main />
            </main>
          }
        />
        <Route
          path="/skills"
          element={
            <main className="relative min-h-screen  gradient">
              <Header />
              <Skills />
            </main>
          }
        />
        <Route
          path="/projects"
          element={
            <main className="relative min-h-screen  gradient">
              <Header />
              <Projects />
            </main>
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Suspense>
  );
}

export default App;
