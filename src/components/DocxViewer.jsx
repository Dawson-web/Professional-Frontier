import React, { useEffect, useRef, useState } from "react";
import { renderAsync } from "docx-preview";
import { Spin } from "@arco-design/web-react";
import { IconFile } from "@arco-design/web-react/icon";

export const DocxViewer = ({ url }) => {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDocument = async () => {
      if (!containerRef.current) return;

      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        const blob = await response.blob();
        await renderAsync(blob, containerRef.current, containerRef.current, {
          className: "docx-viewer",
          inWrapper: true,
          defaultStyles: true,
        });
      } catch (error) {
        console.error("Error loading document:", error);
        setError("论文加载失败，请刷新页面重试");
      } finally {
        setLoading(false);
      }
    };

    loadDocument();
  }, [url]);

  return (
    <div className="relative min-h-[800px]">
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50">
          <div className="relative">
            <Spin dot className="mb-4" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 text-blue-600">
                <IconFile className="text-xl" />
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-500 mt-4">正在加载论文内容...</div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50">
          <div className="text-gray-400 text-4xl mb-4">⚠️</div>
          <div className="text-gray-600 text-sm">{error}</div>
        </div>
      )}

      <div ref={containerRef} className="w-full h-full bg-white" />

      <style jsx global>{`
        .docx-viewer {
          padding: 0;
          max-width: 100%;
          margin: 0 auto;
          opacity: 0;
          animation: fade-in 0.5s ease-out forwards;
          animation-delay: 0.2s;
        }

        .docx-viewer > section.docx {
          padding: 0;
          box-shadow: none;
          margin: 0;
          background: white;
        }

        .docx-viewer > section.docx > article {
          padding: 0;
          max-width: 100%;
          margin: 0 auto;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, sans-serif;
          line-height: 1.8;
          font-size: 15px;
          color: #333;
        }

        .docx-viewer h1 {
          font-size: 24px;
          font-weight: 500;
          margin: 2rem 0 1rem;
          color: #1a1a1a;
        }

        .docx-viewer h2 {
          font-size: 20px;
          font-weight: 500;
          margin: 1.5rem 0 1rem;
          color: #1a1a1a;
        }

        .docx-viewer p {
          margin: 1rem 0;
          text-align: justify;
        }

        .docx-viewer table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
        }

        .docx-viewer table td,
        .docx-viewer table th {
          border: 1px solid #f0f0f0;
          padding: 0.75rem;
          font-size: 14px;
        }

        .docx-viewer table th {
          background-color: #fafafa;
          font-weight: 500;
        }

        .docx-viewer img {
          max-width: 100%;
          height: auto;
          margin: 1.5rem auto;
          display: block;
        }

        @media (max-width: 768px) {
          .docx-viewer > section.docx > article {
            font-size: 14px;
          }

          .docx-viewer h1 {
            font-size: 20px;
          }

          .docx-viewer h2 {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
};
