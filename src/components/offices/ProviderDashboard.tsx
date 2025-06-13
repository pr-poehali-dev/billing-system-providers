import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const ProviderDashboard = () => {
  const metrics = [
    {
      title: "Общий доход",
      value: "2,350,000 ₽",
      change: "+15.2%",
      icon: "DollarSign",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      title: "Активные клиенты",
      value: "1,247",
      change: "+23",
      icon: "Users",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      title: "MRR",
      value: "456,000 ₽",
      change: "+8.7%",
      icon: "Repeat",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      title: "Неоплаченные счета",
      value: "127,000 ₽",
      change: "-12.3%",
      icon: "FileText",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      title: "Время работы",
      value: "99.97%",
      change: "+0.02%",
      icon: "Activity",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      title: "Отток клиентов",
      value: "2.1%",
      change: "-0.3%",
      icon: "TrendingDown",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {metric.title}
            </CardTitle>
            <div className={`p-2 rounded-lg ${metric.bgColor}`}>
              <Icon
                name={metric.icon as any}
                size={20}
                className={metric.color}
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 mb-1">
              {metric.value}
            </div>
            <p className={`text-xs ${metric.color}`}>
              {metric.change} за месяц
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ProviderDashboard;
