import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Панель управления",
      description: "Обзор ключевых метрик и аналитики",
      icon: "BarChart3",
      path: "/dashboard",
      color: "bg-purple-600 hover:bg-purple-700",
    },
    {
      title: "Провайдеры",
      description: "Управление провайдерами и их данными",
      icon: "Users",
      path: "/providers",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "Биллинг",
      description: "Биллинговые циклы и управление",
      icon: "Calculator",
      path: "/billing",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "Счета",
      description: "Создание и отслеживание счетов",
      icon: "FileText",
      path: "/invoices",
      color: "bg-orange-600 hover:bg-orange-700",
    },
    {
      title: "Платежи",
      description: "История и управление платежами",
      icon: "CreditCard",
      path: "/payments",
      color: "bg-indigo-600 hover:bg-indigo-700",
    },
    {
      title: "Отчёты",
      description: "Аналитика и отчёты по биллингу",
      icon: "TrendingUp",
      path: "/reports",
      color: "bg-pink-600 hover:bg-pink-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Биллинговая система
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Современное решение для управления провайдерами, счетами и платежами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sections.map((section, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 cursor-pointer group"
              onClick={() => navigate(section.path)}
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto rounded-full ${section.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon
                    name={section.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{section.description}</p>
                <Button
                  className={`w-full ${section.color} text-white`}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(section.path);
                  }}
                >
                  Открыть
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Быстрый старт</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                Начните с панели управления для обзора системы или перейдите к
                управлению провайдерами
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => navigate("/dashboard")}
                >
                  <Icon name="BarChart3" size={20} className="mr-2" />
                  Панель управления
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/providers")}
                >
                  <Icon name="Users" size={20} className="mr-2" />
                  Провайдеры
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
