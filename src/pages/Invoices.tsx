import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import InvoicesTable from "@/components/invoices/InvoicesTable";
import InvoiceStats from "@/components/invoices/InvoiceStats";

const Invoices = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Счета</h1>
            <p className="text-gray-600">
              Управление всеми счетами и их статусами
            </p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Icon name="Plus" size={16} className="mr-2" />
            Новый счёт
          </Button>
        </div>

        <InvoiceStats />

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Все счета</CardTitle>
              <div className="flex gap-2">
                <Input placeholder="Поиск счетов..." className="w-64" />
                <Button variant="outline">
                  <Icon name="Download" size={16} className="mr-2" />
                  Экспорт
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="mb-4">
              <TabsList>
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="sent">Отправлены</TabsTrigger>
                <TabsTrigger value="paid">Оплачены</TabsTrigger>
                <TabsTrigger value="overdue">Просрочены</TabsTrigger>
              </TabsList>
              <TabsContent value="all">
                <InvoicesTable />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Invoices;
