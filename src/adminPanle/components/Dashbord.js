import React from "react";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  PieController,
  DoughnutController,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  PieController,
  DoughnutController,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
const colors = [
  "#FF0000", // Red
  "#00FF00", // Green
  "#0000FF", // Blue
  "#FF00FF", // Magenta
  "#FFFF00", // Yellow
  // Add more colors as needed
];

const Dashboard = () => {
  const [covidAll, setCovidAll] = useState([]);
  const [covidCountries, setCovidCountries] = useState([]);
  const [covidHistorical, setCovidHistorical] = useState([]);
  const [label, setLabelData] = useState([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ]);
  const [dataSet, setDataSet] = useState([
    {
      label: "Dataset 1",
      data: Array.from({ length: 7 }).map(() => Math.random() * 1000),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: Array.from({ length: 7 }).map(() => Math.random() * 1000),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ]);
  const [data, setData] = useState({ labels: label, datasets: dataSet });
  const [barData, setBarData] = useState({ labels: label, datasets: dataSet });
  const [pieData, setPieData] = useState({ labels: label, datasets: dataSet });
  const [doughnutData, setDoughnutData] = useState({
    labels: label,
    datasets: dataSet,
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };
  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  useEffect(() => {
    if (Object.keys(covidHistorical).length !== 0) {
      const dts = Object.values(covidHistorical).map((item, i) => ({
        label: Object.keys(covidHistorical)[i],
        data: Object.values(covidHistorical.cases),
        borderColor: colors[i],
        backgroundColor: colors[i],
      }));
      const lbl = Object.values(covidHistorical.cases);
      setLabelData(lbl);
      setDataSet(dts);
      setData({ labels: lbl, datasets: dts });
      setBarData({ labels: lbl, datasets: dts });
      setPieData({ labels: lbl, datasets: dts });
      setDoughnutData({ labels: lbl, datasets: dts });
    }
  }, [covidHistorical]);

  return (
    <div className=" ">
      <div className="w-full flex justify-center px-10">
        <div className="w-full lg:w-1/2 xl:w-1/3 mx-auto">
          {data && <Line options={options} data={data} />}
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/3 mx-auto mr-24">
          {barData && <Bar options={barOptions} data={barData} />}
        </div>
      </div>

      <div className="w-full flex justify-center mb-8 px-10">
        <div className="w-full lg:w-1/2 xl:w-1/3 mx-auto p-8 ">
          {pieData && <Pie options={pieOptions} data={pieData} />}
        </div>
        <div className="w-full lg:w-1/2 xl:w-1/3 mx-auto mr-24 p-8 ">
          {doughnutData && (
            <Doughnut options={doughnutOptions} data={doughnutData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
