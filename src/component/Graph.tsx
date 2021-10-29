import Chart from "react-google-charts";

export const Graph = () => {
    return (
        <>
            <div className="flex justify-center pt-24">
                <p className="text-3xl font-bold text-green-700 px-2">
                    한우 가격
                </p>
                <p className="text-3xl font-bold text-red-700 px-2">예측</p>
                <p className="text-3xl px-2">&#x1F680;</p>
            </div>

            <div className="flex items-center justify-center">
                <Chart
                    width={1000}
                    height={600}
                    chartType="LineChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        [
                            { type: "number", label: "x" },
                            { type: "number", label: "values" },
                            { id: "i0", type: "number", role: "interval" },
                            { id: "i1", type: "number", role: "interval" },
                            { id: "i2", type: "number", role: "interval" },
                            { id: "i2", type: "number", role: "interval" },
                            { id: "i2", type: "number", role: "interval" },
                            { id: "i2", type: "number", role: "interval" },
                        ],
                        [1, 100, 90, 110, 85, 96, 104, 120],
                        [2, 120, 95, 130, 90, 113, 124, 140],
                        [3, 130, 105, 140, 100, 117, 133, 139],
                        [4, 90, 85, 95, 85, 88, 92, 95],
                        [5, 70, 74, 63, 67, 69, 70, 72],
                        [6, 30, 39, 22, 21, 28, 34, 40],
                        [7, 80, 77, 83, 70, 77, 85, 90],
                        [8, 100, 90, 110, 85, 95, 102, 110],
                    ]}
                    options={{
                        intervals: { style: "sticks" },
                        legend: "none",
                    }}
                />
                <div className="font-bold text-lg text-gray-600">
                    3개월 예측값
                    <p>22.10.29 : 80,100</p>
                    <p>22.10.29 : 80,100</p>
                    <p>22.10.29 : 80,100</p>
                    <p>22.10.29 : 80,100</p>
                </div>
            </div>
        </>
    );
};
