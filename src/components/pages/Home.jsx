
import HeroSection from "../herosection/HeroSection";
import MarketCapData from "../MarketCap/MarketCapData";
import TrendingCoins from "../trendingcoins/TrendingCoins";

import React from 'react'

function Home() {
    return (
        <>
            <HeroSection />
            <TrendingCoins />
            <MarketCapData />
        </>
    )
}

export default Home