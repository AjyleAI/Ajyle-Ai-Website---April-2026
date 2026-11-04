/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, type ReactNode } from "react";
import { SiteNav, SiteFooter } from "./site/layout";
import HomePage from "./site/HomePage";
import PacePage from "./site/PacePage";
import AboutPage from "./site/AboutPage";
import LetsTalkPage from "./site/LetsTalkPage";
import Training from "./pages/Training";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ReclaimYourTime from "./pages/ReclaimYourTime";
import ReclaimYourTimeBootcamp from "./pages/ReclaimYourTimeBootcamp";
import ReclaimYourTimeWebinar from "./pages/ReclaimYourTimeWebinar";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

function Titled({ title, children }: { title: string; children: ReactNode }) {
  useEffect(() => {
    document.title = title;
  }, [title]);
  return <>{children}</>;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Full-screen campaign pages: no navbar/footer */}
        <Route path="/reclaimyourtime" element={<ReclaimYourTime />} />
        <Route path="/reclaim-your-time-workshop" element={<ReclaimYourTimeBootcamp />} />
        <Route path="/hidden-cost" element={<ReclaimYourTimeWebinar />} />

        {/* Main site with navbar and footer */}
        <Route
          path="*"
          element={
            <div className="flex min-h-screen flex-col bg-white">
              <SiteNav />
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/pace" element={<PacePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/lets-talk" element={<LetsTalkPage />} />
                  <Route path="/training" element={<Titled title="AI training for teams | Ajyle AI"><div className="pt-6"><Training /></div></Titled>} />
                  <Route path="/privacy-policy" element={<Titled title="Privacy policy | Ajyle AI"><PrivacyPolicy /></Titled>} />
                  {/* Old addresses */}
                  <Route path="/home" element={<Navigate to="/" replace />} />
                  <Route path="/solutions" element={<Navigate to="/pace" replace />} />
                  <Route path="/contact" element={<Navigate to="/lets-talk" replace />} />
                  <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
              </div>
              <SiteFooter />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
