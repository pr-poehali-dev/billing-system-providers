import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const QuickActions = () => {
  const actions = [
    {
      icon: "FileText",
      label: "Создать счёт",
      color: "bg-purple-600 hover:bg-purple-700",
    },
    {
      icon: "Users",
      label: "Добавить провайдера",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: "CreditCard",
      label: "Записать платёж",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: "BarChart3",
      label: "Отчёт",
      color: "bg-orange-600 hover:bg-orange-700",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Быстрые действия</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {actions.map((action, index) => (
          <Button
            key={index}
            className={`w-full justify-start ${action.color}`}
          >
            <Icon name={action.icon as any} size={16} className="mr-2" />
            {action.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default QuickActions;
