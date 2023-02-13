import React, { lazy, Suspense } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import LoadingSpinner from "./components/LoadingSpinner";

const Header = lazy(() => import("./components/Header"));
const Main = lazy(() => import("./components/Main"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Error = lazy(() => import("./components/Error"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <HashRouter basename="/">
        <Routes>
          <Route
            path="/"
            element={
              <main className="relative min-h-screen gradient">
                <Header screen="home" />
                <Main />
              </main>
            }
          />
          <Route
            path="/skills"
            element={
              <main className="relative min-h-screen gradient">
                <Header screen="" />
                <Skills />
              </main>
            }
          />
          <Route
            path="/projects"
            element={
              <main className="relative min-h-screen bg-light">
                <Header screen="others" />
                <Projects />
              </main>
            }
          />
          <Route path="/*" element={<Error />} />
        </Routes>
      </HashRouter>
    </Suspense>
  );
}

export default App;
