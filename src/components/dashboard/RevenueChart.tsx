import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RevenueChart = () => {
  const data = [
    { month: "Янв", revenue: 180000, expenses: 120000 },
    { month: "Фев", revenue: 220000, expenses: 140000 },
    { month: "Мар", revenue: 250000, expenses: 160000 },
    { month: "Апр", revenue: 280000, expenses: 180000 },
    { month: "Май", revenue: 320000, expenses: 200000 },
    { month: "Июн", revenue: 380000, expenses: 230000 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Динамика доходов</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip
              formatter={(value) => [`${value.toLocaleString()} ₽`, ""]}
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#9b87f5"
              strokeWidth={3}
              name="Доходы"
            />
            <Line
              type="monotone"
              dataKey="expenses"
              stroke="#f97316"
              strokeWidth={2}
              name="Расходы"
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
