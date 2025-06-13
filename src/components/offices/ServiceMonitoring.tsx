import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ServiceMonitoring = () => {
  const services = [
    {
      name: "Интернет-канал",
      status: "Активен",
      uptime: "99.98%",
      clients: 847,
      revenue: "1,250,000 ₽",
      usage: 85,
    },
    {
      name: "Хостинг услуги",
      status: "Активен",
      uptime: "99.95%",
      clients: 234,
      revenue: "680,000 ₽",
      usage: 67,
    },
    {
      name: "VPN сервисы",
      status: "Техработы",
      uptime: "98.12%",
      clients: 166,
      revenue: "420,000 ₽",
      usage: 45,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Активен":
        return "bg-green-100 text-green-800";
      case "Техработы":
        return "bg-yellow-100 text-yellow-800";
      case "Недоступен":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="Monitor" size={20} />
          Мониторинг услуг
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-medium text-gray-900">{service.name}</h3>
                  <Badge className={getStatusColor(service.status)}>
                    {service.status}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg text-gray-900">
                    {service.revenue}
                  </div>
                  <div className="text-sm text-gray-500">
                    {service.clients} клиентов
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Время работы:</span>
                  <span className="ml-2 font-medium text-green-600">
                    {service.uptime}
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Загрузка:</span>
                  <span className="ml-2 font-medium">{service.usage}%</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${service.usage}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceMonitoring;
