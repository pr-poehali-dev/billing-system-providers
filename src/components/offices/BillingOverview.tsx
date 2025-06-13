import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const BillingOverview = () => {
  const recentInvoices = [
    {
      id: "INV-2024-001",
      client: "ООО 'Техносвязь'",
      amount: 45000,
      status: "Оплачен",
      date: "2024-01-15",
    },
    {
      id: "INV-2024-002",
      client: "ИП Сидоров А.В.",
      amount: 12000,
      status: "Просрочен",
      date: "2024-01-10",
    },
    {
      id: "INV-2024-003",
      client: "ООО 'Стройком'",
      amount: 78000,
      status: "Отправлен",
      date: "2024-01-12",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Оплачен":
        return "bg-green-100 text-green-800";
      case "Просрочен":
        return "bg-red-100 text-red-800";
      case "Отправлен":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      <Card className="lg:col-span-2">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <Icon name="FileText" size={20} />
              Последние счета
            </CardTitle>
            <Button variant="outline" size="sm">
              Все счета
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentInvoices.map((invoice) => (
              <div
                key={invoice.id}
                className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow"
              >
                <div>
                  <div className="font-medium text-gray-900">{invoice.id}</div>
                  <div className="text-sm text-gray-500">{invoice.client}</div>
                  <div className="text-xs text-gray-400">{invoice.date}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg text-gray-900 mb-1">
                    {invoice.amount.toLocaleString()} ₽
                  </div>
                  <Badge className={getStatusColor(invoice.status)}>
                    {invoice.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Zap" size={20} />
            Быстрые действия
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Button className="w-full justify-start" variant="outline">
              <Icon name="Plus" size={16} className="mr-2" />
              Создать счет
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Icon name="Send" size={16} className="mr-2" />
              Отправить напоминание
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Icon name="Users" size={16} className="mr-2" />
              Добавить клиента
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Icon name="BarChart3" size={16} className="mr-2" />
              Генерация отчета
            </Button>
            <Button className="w-full justify-start" variant="outline">
              <Icon name="Settings" size={16} className="mr-2" />
              Настройки тарифов
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingOverview;
