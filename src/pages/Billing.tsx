import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import BillingOverview from "@/components/billing/BillingOverview";
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

        <BillingOverview />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <BillingCycle />
          <BillingActions />
        </div>
      </div>
    </div>
  );
};

export default Billing;
