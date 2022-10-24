import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import styles from "./style";

import {
  About,
  BornAgain,
  Donation,
  Events,
  GoodWorks,
  Registration,
  Stats,
  Store,
  Testimonials,
  Videos,
  Youth,
  Navbar,
  Hero,
  Footer,
  CTA,
} from "./components";

const App = () => (
  <div>
    <BrowserRouter>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
            <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Routes>
                  <Route path="/" exact element={<Hero />} />
                  <Route path="/about" exact element={<About />} />
                  <Route path="/events" exact element={<Events />} />
                  <Route path="/youth" exact element={<Youth />} />
                  <Route
                    path="/testimonials"
                    exact
                    element={<Testimonials />}
                  />
                  <Route path="/bornAgain" exact element={<BornAgain />} />
                  <Route path="/videos" exact element={<Videos />} />
                </Routes>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
