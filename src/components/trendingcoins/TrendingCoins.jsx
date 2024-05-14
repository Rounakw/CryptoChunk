import React, { useEffect, useState } from 'react'
import CoinCard from './CoinCard'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function TrendingCoins() {
    const settings = {
        // dots: true,
        // fade: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll:2,
        waitForAnimate: false,
        pauseOnHover: false
      };
    const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=gecko_desc&sparkline=false&price_change_percentage=24h;'

    let [trendCoins, setTrendCoins] = useState()

    async function getTrendCoins() {
        const response = await fetch(URL)
        const data = await response.json()
        setTrendCoins(data)
    }
    useEffect(() => {
        getTrendCoins()
    }, [])


    return (
        <div className="slider-container mx-10 m-auto my-5">
      <Slider {...settings}>
            {
                trendCoins?.slice(0,10).map((coinsData, idx) => {
                    return <CoinCard name={coinsData.symbol} difference={coinsData.market_cap_change_percentage_24h} image={coinsData.image} price={coinsData.current_price}/>
                })
            }
         </Slider>
    </div>
    )
}

export default TrendingCoins
