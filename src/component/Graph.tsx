import { Line } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "가격",
      data: [12, 19, 3, 5, NaN, NaN],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
    {
      label: "예측값",
      data: [NaN, NaN, NaN, 5, 6, 7],
      fill: false,
      backgroundColor: "rgb(54, 162, 235)",
      borderColor: "rgba(54, 162, 235, 0.2)",
    },
  ],
};

const options = {
  scales: {},
};

export const Graph = () => {
  return (
    <>
      <div className="flex justify-center pt-24">
        <p className="text-3xl font-bold text-green-700 px-2">한우 가격</p>
        <p className="text-3xl font-bold text-red-700 px-2">예측</p>
        <p className="text-3xl px-2">&#x1F680;</p>
      </div>
      <Line data={data} options={options} />
    </>
  );
};
