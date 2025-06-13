import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const RecentActivities = () => {
  const activities = [
    {
      icon: "FileText",
      title: "Счёт #1024 отправлен",
      description: 'Провайдер: ООО "Телеком Плюс"',
      time: "10 минут назад",
      status: "sent",
    },
    {
      icon: "CreditCard",
      title: "Платёж получен",
      description: '250,000 ₽ от ООО "Связь Сервис"',
      time: "1 час назад",
      status: "paid",
    },
    {
      icon: "Users",
      title: "Новый провайдер добавлен",
      description: 'ООО "Мобильные Технологии"',
      time: "2 часа назад",
      status: "new",
    },
    {
      icon: "AlertTriangle",
      title: "Счёт просрочен",
      description: 'Счёт #1019 от ООО "Интернет Связь"',
      time: "3 часа назад",
      status: "overdue",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "sent":
        return "bg-blue-100 text-blue-800";
      case "paid":
        return "bg-green-100 text-green-800";
      case "new":
        return "bg-purple-100 text-purple-800";
      case "overdue":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Последние действия</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <Icon
                    name={activity.icon as any}
                    size={14}
                    className="text-gray-600"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.title}
                  </p>
                  <Badge className={getStatusColor(activity.status)}>
                    {activity.status}
                  </Badge>
                </div>
                <p className="text-sm text-gray-500">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivities;
