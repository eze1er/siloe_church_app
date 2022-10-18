import React from "react";
import styles from "./style";
import {   About,
  BornAgain,
  Donation,
  Events,
  Registration,
  Stats,
  Store,
  Testimonials,
  Videos,
  Youth,
  Navbar,
  Hero,
  Footer,
  CTA} from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <div className={`${styles.boxWidth}`}>
    <Navbar />
    </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
    <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
      <Stats />
      <About /> 
      <Youth /> 
      <Events /> 
      <Testimonials /> 
      <BornAgain /> 
      <Videos /> 
      <Store /> 
      <Registration /> 
      <CTA />
      <Donation /> 
      <Footer />
      </div>
    </div>

  </div>
);

export default App;
