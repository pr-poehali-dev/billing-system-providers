import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import PaymentStats from "@/components/payments/PaymentStats";
import PaymentsTable from "@/components/payments/PaymentsTable";
import PaymentMethods from "@/components/payments/PaymentMethods";

const Payments = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Платежи</h1>
            <p className="text-gray-600">Отслеживание и управление платежами</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Icon name="CreditCard" size={16} className="mr-2" />
            Добавить платёж
          </Button>
        </div>

        <PaymentStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>История платежей</CardTitle>
                  <div className="flex gap-2">
                    <Input placeholder="Поиск платежей..." className="w-64" />
                    <Button variant="outline">
                      <Icon name="Filter" size={16} />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <PaymentsTable />
              </CardContent>
            </Card>
          </div>
          <div>
            <PaymentMethods />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
