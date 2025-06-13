import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";
import ProvidersTable from "@/components/providers/ProvidersTable";
import ProviderStats from "@/components/providers/ProviderStats";

const Providers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Провайдеры
            </h1>
            <p className="text-gray-600">
              Управление провайдерами и их биллинговой информацией
            </p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Icon name="Plus" size={16} className="mr-2" />
            Добавить провайдера
          </Button>
        </div>

        <ProviderStats />

        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Список провайдеров</CardTitle>
              <div className="flex gap-2">
                <Input placeholder="Поиск провайдеров..." className="w-64" />
                <Button variant="outline">
                  <Icon name="Filter" size={16} />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ProvidersTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Providers;
