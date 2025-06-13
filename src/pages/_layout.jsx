import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "@arco-design/web-react";

const { Header, Content } = Layout;

export default function AppLayout() {
  return (
    <Layout className="min-h-screen">
      <Header className="bg-white border-b">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">论文文档预览系统</h1>
        </div>
      </Header>
      <Content className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <Outlet />
        </div>
      </Content>
    </Layout>
  );
}
