import React from "react";
import Hero from "../components/hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import OurPolicy from "../components/OurPolicy";
import NewsLetter from "../components/NewsLetter";
import ShopNow from "../components/ShopNow";

const home = () => {
  return (
    <div>
      <Hero />
      <ShopNow/>
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetter />
    </div>
  );
};

export default home;
