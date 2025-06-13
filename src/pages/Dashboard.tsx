import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import MetricsCards from "@/components/dashboard/MetricsCards";
import RevenueChart from "@/components/dashboard/RevenueChart";
import RecentActivities from "@/components/dashboard/RecentActivities";
import QuickActions from "@/components/dashboard/QuickActions";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Панель управления
          </h1>
          <p className="text-gray-600">
            Обзор биллинговой системы и ключевые метрики
          </p>
        </div>

        <MetricsCards />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>

        <RecentActivities />
      </div>
    </div>
  );
};

export default Dashboard;
