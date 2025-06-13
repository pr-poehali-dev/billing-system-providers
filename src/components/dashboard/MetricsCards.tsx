import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MetricsCards = () => {
  const metrics = [
    {
      title: "Общий доход",
      value: "2,450,000 ₽",
      change: "+12.5%",
      icon: "TrendingUp",
      positive: true,
    },
    {
      title: "Активные провайдеры",
      value: "24",
      change: "+3",
      icon: "Users",
      positive: true,
    },
    {
      title: "Ожидают оплаты",
      value: "8",
      change: "-2",
      icon: "Clock",
      positive: true,
    },
    {
      title: "Просроченные",
      value: "2",
      change: "+1",
      icon: "AlertTriangle",
      positive: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {metric.title}
            </CardTitle>
            <Icon
              name={metric.icon as any}
              size={20}
              className={metric.positive ? "text-green-600" : "text-red-600"}
            />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {metric.value}
            </div>
            <p
              className={`text-xs ${metric.positive ? "text-green-600" : "text-red-600"}`}
            >
              {metric.change} за месяц
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MetricsCards;
