import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router";

import styles from "./main.module.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className={styles.mainLayout}>
              <nav className={styles.nav}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/stories">Stories</Link>
              </nav>
              <main>
                <Outlet />
              </main>
            </div>
          }
        >
          <Route index element={<div>home</div>} />
          <Route path="about" element={<div>about</div>} />
          <Route path="stories" element={<div>stories</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
