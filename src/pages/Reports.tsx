import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import ReportsChart from "@/components/reports/ReportsChart";
import ReportFilters from "@/components/reports/ReportFilters";
import ReportSummary from "@/components/reports/ReportSummary";

const Reports = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Отчёты</h1>
            <p className="text-gray-600">Аналитика и отчёты по биллингу</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Icon name="Download" size={16} className="mr-2" />
              Экспорт
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Icon name="FileText" size={16} className="mr-2" />
              Создать отчёт
            </Button>
          </div>
        </div>

        <ReportFilters />
        <ReportSummary />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Доходы по периодам</CardTitle>
            </CardHeader>
            <CardContent>
              <ReportsChart type="revenue" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Платежи по провайдерам</CardTitle>
            </CardHeader>
            <CardContent>
              <ReportsChart type="providers" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Reports;
