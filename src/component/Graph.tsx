import { gql, useQuery } from "@apollo/client";
import { Line } from "react-chartjs-2";
import { chartData } from "../__generated__/chartData";

const CHART_DATA_QUERY = gql`
  query chartData {
    chartData {
      labels
      kamisData
      predictedData
    }
  }
`;

export const Graph = () => {
  const { data } = useQuery<chartData>(CHART_DATA_QUERY);

  const chartData = {
    labels: data?.chartData.labels,
    datasets: [
      {
        label: "가격",
        data: data?.chartData.kamisData,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "예측값",
        data: data?.chartData.predictedData,
        fill: false,
        backgroundColor: "rgb(54, 162, 235)",
        borderColor: "rgba(54, 162, 235, 0.2)",
      },
    ],
  };

  const options = {
    layout: {
      padding: 20,
    },
    scales: {
      x: {
        ticks: { stepSize: 200 },
      },
    },
  };
  return (
    <>
      <div className="flex justify-center pt-24">
        <p className="text-3xl font-bold text-green-700 px-2">한우 가격</p>
        <p className="text-3xl font-bold text-red-700 px-2">예측</p>
        <p className="text-3xl px-2">&#x1F680;</p>
      </div>
      <Line className=" p-32" data={chartData} options={options} />
    </>
  );
};
