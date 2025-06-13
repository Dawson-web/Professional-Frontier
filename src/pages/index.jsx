import React, { useState } from "react";
import { Button } from "@arco-design/web-react";
import { Avatar } from "@arco-design/web-react";
const AvatarGroup = Avatar.Group;
import {
  IconFile,
  IconEye,
  IconClockCircle,
  IconTag,
  IconArrowRight,
} from "@arco-design/web-react/icon";
import { DocxViewer } from "../components/DocxViewer";

const paperInfo = {
  title: "多模态大模型在医疗领域的应用与治理研究",
  file: "/多模态大模型在医疗领域的应用与治理研究.docx",
  abstract:
    "本研究深入探讨了多模态大模型在医疗领域的创新应用及其治理框架。通过系统分析当前医疗人工智能的发展现状，提出了一套完整的应用策略和管理方案，旨在推动医疗智能化的健康发展。",
  keywords: ["多模态大模型", "医疗AI", "智能医疗", "医疗治理", "人工智能"],
  date: "2025-06-15",
  author: "专业前沿小组",
  category: "医疗人工智能研究",
};

const qqID = [
  "3265908977",
  "1946480988",
  "3165729094",
  "2456714328",
  "3096567831",
  "1692250431",
  "1505367637",
  "2301295517",
];

export default function Home() {
  const [isReading, setIsReading] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航 */}
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50 !border-b-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <IconFile className="text-xl !text-white" />
              </div>
              <span className="ml-3 text-lg font-medium text-gray-900">
                论文阅读
              </span>
            </div>
            {isReading && (
              <Button
                type="secondary"
                icon={<IconArrowRight className="rotate-180 " />}
                className={"!rounded-lg"}
                onClick={() => setIsReading(false)}
              >
                返回详情
              </Button>
            )}
          </div>
        </div>
      </nav>

      {/* 主要内容区域 */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {!isReading ? (
            <div className="max-w-4xl mx-auto">
              {/* 论文标题区 */}
              <div className="text-center mb-12 animate-fade-in">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {paperInfo.title}
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-4 text-gray-500">
                  <span className="flex items-center gap-2">
                    <IconClockCircle /> {paperInfo.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <IconTag /> {paperInfo.category}
                  </span>
                  <span>{paperInfo.author}</span>
                </div>
              </div>
              <div className="flex pb-10  justify-center">
                {qqID.map((qq) => (
                  <img
                    key={qq}
                    alt={`QQ-${qq}`}
                    src={`https://q.qlogo.cn/g?b=qq&nk=${qq}&s=100`}
                    className="rounded-[50%] w-[48px]"
                  />
                ))}
              </div>
              {/* 论文信息卡片 */}
              <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-blue-600 p-4">
                      <IconFile className="text-3xl !text-white" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                      论文摘要
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {paperInfo.abstract}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {paperInfo.keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Button
                  type="primary"
                  size="large"
                  icon={<IconEye />}
                  className="w-full sm:w-auto bg-blue-600 border-0 !rounded-lg"
                  onClick={() => setIsReading(true)}
                >
                  阅读全文
                  <IconArrowRight className="ml-2" />
                </Button>
              </div>

              {/* 研究亮点 */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    研究价值
                  </h3>
                  <p className="text-gray-600">
                    深入探讨多模态大模型在医疗领域的应用前景，为医疗AI发展提供新思路。
                  </p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    创新点
                  </h3>
                  <p className="text-gray-600">
                    提出创新的治理框架，平衡技术发展与医疗安全，推动行业规范化发展。
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* 论文阅读区域 */
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-gray-100 px-6 py-4 ">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-semibold text-gray-900 truncate">
                      {paperInfo.title}
                    </h2>
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm text-gray-500">
                        {paperInfo.author}
                      </span>
                      <span className="text-sm text-gray-500">
                        {paperInfo.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <DocxViewer url={paperInfo.file} />
              </div>
            </div>
          )}
        </div>
      </main>

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
