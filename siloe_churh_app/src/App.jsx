import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import styles from "./style";

import {
  // About,
  BornAgain,
  Donation,
  // Events,
  GoodWorks,
  Registration,
  Stats,
  Store,
  Testimonials,
  Videos,
  Youth,
  Navbar,
  NavbarVideos,
  Footer,
  Feed,
  Loader,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
  CTA,
} from "./components";

const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Events = lazy(() => import("./components/Events"));

const App = () => (
  <div>
    <BrowserRouter>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
            <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Suspense fallback={<h1>lOADING..</h1>}>
                  <Routes>
                    <Route path="/" exact element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/events" element={<Events />} />
                    {/* <Route path="/youth" element={<Youth />} />
                  <Route path="/video/:id" element={<VideoDetail />} />
                  <Route path="/channel/:id" element={<ChannelDetail />} />
                  <Route path="/search/:searchTerm" element={<SearchFeed />} />
                  <Route path="/donation" element={<Donation />} />
                  <Route path="/testimonials" element={<Testimonials />}
                  />
                  <Route path="/bornAgain" element={<BornAgain />} />
                  <Route path="/videos" element={<Feed />} /> */}
                  </Routes>
                </Suspense>
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
