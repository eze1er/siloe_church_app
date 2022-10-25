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
  NavbarVideos,
  Hero,
  Footer,
  Feed,
  Loader,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
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
                  <Route path="/about" element={<About />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/youth" element={<Youth />} />
                  <Route path="/video/:id" element={<VideoDetail />} />
                  <Route path="/channel/:id" element={<ChannelDetail />} />
                  <Route path="/search/:searchTerm" element={<SearchFeed />} />
                  <Route path="/testimonials" element={<Testimonials />}
                  />
                  <Route path="/bornAgain" element={<BornAgain />} />
                  {/* <Route path="/videos" element={<Videos />} /> */}
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
