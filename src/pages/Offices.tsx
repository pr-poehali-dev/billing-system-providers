import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import ProviderDashboard from "@/components/offices/ProviderDashboard";
import ClientsTable from "@/components/offices/ClientsTable";
import ServiceMonitoring from "@/components/offices/ServiceMonitoring";
import BillingOverview from "@/components/offices/BillingOverview";

const Offices = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Биллинговая система провайдера
            </h1>
            <p className="text-gray-600">
              Управление клиентами, услугами и платежами
            </p>
          </div>
          <div className="flex gap-2">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="FileText" size={16} className="mr-2" />
              Создать счет
            </Button>
            <Button variant="outline">
              <Icon name="Download" size={16} className="mr-2" />
              Отчет
            </Button>
          </div>
        </div>

        <ProviderDashboard />

        <BillingOverview />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <ServiceMonitoring />
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="TrendingUp" size={20} />
                Доходы по услугам
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="font-medium">Интернет</span>
                  <span className="text-blue-600 font-bold">1,250,000 ₽</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="font-medium">Хостинг</span>
                  <span className="text-green-600 font-bold">680,000 ₽</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="font-medium">VPN услуги</span>
                  <span className="text-purple-600 font-bold">420,000 ₽</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <ClientsTable />
      </div>
    </div>
  );
};

export default Offices;
