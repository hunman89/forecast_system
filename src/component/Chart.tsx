import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

export default function Chart(props: any) {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart
                width={730}
                height={250}
                data={props.data}
                margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
            >
                <CartesianGrid strokeDasharray="4 1" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="2018"
                    stroke="#8884d8"
                    fill="#8884d8"
                    dot={false}
                />
                <Line
                    type="monotone"
                    dataKey="2019"
                    stroke="#82ca9d"
                    fill="#82ca9d"
                    dot={false}
                />
                <Line
                    type="monotone"
                    dataKey="2020"
                    stroke="#ff7300"
                    fill="#ff7300"
                    dot={false}
                />
                <Line
                    type="monotone"
                    dataKey="2021"
                    stroke="#000000"
                    fill="#000000"
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    );
}
