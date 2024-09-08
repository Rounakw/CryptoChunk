import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Chart() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  async function fetchCoinDetails() {
    const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=1`;
    const response = await fetch(url);
    const data = await response.json();
    setData(data.prices); 
  }

  useEffect(() => {
    fetchCoinDetails();
  }, [id]);

  const chartData = {
    labels: data.map((item) => new Date(item[0]).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })),
    datasets: [
      {
        label: `${id} Price (INR)`,
        data: data.map((item) => item[1]), 
        borderColor: '#F3BA2F',
        backgroundColor: 'rgba(243, 186, 47, 0.2)',
        fill: true,
        tension: 0,
        pointRadius: 1,  
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: `Price of ${id} (Last 24 Hours)`,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
          text: 'Time',
        },
      },
      y: {
        title: {
          display: false,
          text: 'Price (INR)',
        },
      },
    },
  };

  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[500px] xl:w-[50rem] p-4 ">
      <div className="h-full w-full">
        {data.length > 0 ? (
          <Line data={chartData} options={options} />
        ) : (
          <p>Loading chart...</p>
        )}
      </div>
    </div>
  );
}

export default Chart;
