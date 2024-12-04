"use client";

import { ChartData } from "@/lib/dummy-data";
import {
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    BarChart as BarGraph
} from "recharts";

const BarChart = () => {
    return (
        <ResponsiveContainer width={"100%"} height={350}>
            <BarGraph data={ChartData}>
                <XAxis
                    dataKey={"name"}
                    tickLine={false}
                    axisLine={false}
                    stroke="#888888"
                    fontSize={12}
                />
                <YAxis
                    tickLine={false}
                    axisLine={false}
                    stroke="#888888"
                    fontSize={12}
                    tickFormatter={(value) => `$${value}`}
                />
                <Bar dataKey={"total"} radius={[4, 4, 0, 0]} />
            </BarGraph>
        </ResponsiveContainer>
    );
};

export default BarChart;