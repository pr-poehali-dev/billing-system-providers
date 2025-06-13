import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const ClientsTable = () => {
  const clients = [
    {
      id: 1,
      name: "ООО 'Техносвязь'",
      plan: "Корпоративный",
      status: "Активен",
      balance: 45000,
      lastPayment: "2024-01-15",
      services: ["Интернет", "Хостинг"],
    },
    {
      id: 2,
      name: "ИП Сидоров А.В.",
      plan: "Бизнес",
      status: "Просрочен",
      balance: -12000,
      lastPayment: "2023-12-20",
      services: ["Интернет"],
    },
    {
      id: 3,
      name: "ООО 'Стройком'",
      plan: "Премиум",
      status: "Активен",
      balance: 78000,
      lastPayment: "2024-01-10",
      services: ["Интернет", "VPN", "Хостинг"],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Активен":
        return "bg-green-100 text-green-800";
      case "Просрочен":
        return "bg-red-100 text-red-800";
      case "Приостановлен":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center gap-2">
            <Icon name="Users" size={20} />
            Управление клиентами
          </CardTitle>
          <div className="flex gap-2">
            <Input placeholder="Поиск клиентов..." className="w-64" />
            <Button variant="outline" size="sm">
              <Icon name="Filter" size={16} />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Клиент
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Тарифный план
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Статус
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Баланс
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Услуги
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Действия
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-b border-gray-100">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-medium text-gray-900">
                        {client.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        ID: {client.id}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge variant="outline">{client.plan}</Badge>
                  </td>
                  <td className="py-4 px-4">
                    <Badge className={getStatusColor(client.status)}>
                      {client.status}
                    </Badge>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={
                        client.balance >= 0
                          ? "text-green-600 font-medium"
                          : "text-red-600 font-medium"
                      }
                    >
                      {client.balance.toLocaleString()} ₽
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1">
                      {client.services.map((service, index) => (
                        <Badge key={index} variant="secondary">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Icon name="Eye" size={14} />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Icon name="FileText" size={14} />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Icon name="CreditCard" size={14} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientsTable;
