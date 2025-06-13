import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

import BillingCycle from "@/components/billing/BillingCycle";
import BillingActions from "@/components/billing/BillingActions";

const Billing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Биллинг</h1>
            <p className="text-gray-600">
              Обзор текущего биллингового периода и управление
            </p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Icon name="FileText" size={16} className="mr-2" />
            Создать счёт
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Текущий баланс
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">₽12,450</div>
              <p className="text-xs text-gray-500 mt-1">
                +2.5% от прошлого месяца
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Расходы за месяц
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">₽8,320</div>
              <p className="text-xs text-gray-500 mt-1">
                -1.2% от прошлого месяца
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-gray-600">
                Следующий платёж
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">₽5,200</div>
              <p className="text-xs text-gray-500 mt-1">15 июня 2025</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BillingCycle />
          <BillingActions />
        </div>
      </div>
    </div>
  );
};

export default Billing;
