import { useState, useRef } from "react";
import { FaUpload, FaImage, FaLink, FaTimes } from "react-icons/fa";

const ImageUploader = ({ onImageUpload, maxFiles = 1 }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadMode, setUploadMode] = useState("file"); // 'file', 'url'
  const [urlInput, setUrlInput] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFiles(files);
    }
  };

  const handleFiles = (files) => {
    const newImages = [];
    Array.from(files)
      .slice(0, maxFiles)
      .forEach((file) => {
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const imageData = {
              id: Date.now() + Math.random(),
              file: file,
              preview: e.target.result,
              name: file.name,
              size: file.size,
            };
            newImages.push(imageData);
            setUploadedImages((prev) => {
              const updated = [...prev, imageData].slice(0, maxFiles);
              onImageUpload && onImageUpload(updated);
              return updated;
            });
          };
          reader.readAsDataURL(file);
        }
      });
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    if (files) {
      handleFiles(files);
    }
  };

  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      const imageData = {
        id: Date.now(),
        url: urlInput.trim(),
        preview: urlInput.trim(),
        name: "URL图片",
        isUrl: true,
      };
      setUploadedImages((prev) => {
        const updated = [...prev, imageData].slice(0, maxFiles);
        onImageUpload && onImageUpload(updated);
        return updated;
      });
      setUrlInput("");
    }
  };

  const removeImage = (id) => {
    setUploadedImages((prev) => {
      const updated = prev.filter((img) => img.id !== id);
      onImageUpload && onImageUpload(updated);
      return updated;
    });
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* 上传模式切换 */}
      <div className="flex items-center justify-center mb-6">
        <div className="bg-gray-100 rounded-lg p-1 flex">
          <button
            onClick={() => setUploadMode("file")}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              uploadMode === "file"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            <FaImage className="inline mr-2" />
            文件上传
          </button>
          <button
            onClick={() => setUploadMode("url")}
            className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              uploadMode === "url"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            <FaLink className="inline mr-2" />
            URL输入
          </button>
        </div>
      </div>

      {/* 文件上传区域 */}
      {uploadedImages.length == 0 && uploadMode === "file" && (
        <div
          className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
            dragActive
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            multiple={maxFiles > 1}
            accept="image/*"
            onChange={handleFileInput}
            className="hidden"
          />

          <div className="space-y-4">
            <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
              <FaUpload className="text-2xl text-blue-600" />
            </div>

            <div>
              <p className="text-lg font-semibold text-gray-800 mb-2">
                拖拽图片到此处，或
                <button
                  onClick={openFileDialog}
                  className="text-blue-600 hover:text-blue-700 underline ml-1"
                >
                  点击上传
                </button>
              </p>
              <p className="text-sm text-gray-500">
                支持 JPG、PNG、WEBP 格式，
                {maxFiles > 1 ? `最多 ${maxFiles} 张图片` : "单张图片"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* URL输入区域 */}
      {uploadedImages.length == 0 && uploadMode === "url" && (
        <div className="space-y-4">
          <div className="flex space-x-2">
            <input
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="请输入图片URL地址..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              onKeyPress={(e) => e.key === "Enter" && handleUrlSubmit()}
            />
            <button
              onClick={handleUrlSubmit}
              disabled={!urlInput.trim()}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white font-medium rounded-lg transition-colors duration-200"
            >
              添加
            </button>
          </div>
          <p className="text-sm text-gray-500 text-center">
            请确保URL指向有效的图片文件
          </p>
        </div>
      )}

      {/* 已上传图片预览 */}
      {uploadedImages.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            已上传图片 ({uploadedImages.length})
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {uploadedImages.map((image) => (
              <div key={image.id} className="relative group">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={image.preview || image.url}
                    alt={image.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTgiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIiBmaWxsPSIjOTk5Ij7lm77niYfliqDovb3lpLHotKU8L3RleHQ+PC9zdmc+";
                    }}
                  />
                </div>

                <button
                  onClick={() => removeImage(image.id)}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <FaTimes className="text-xs" />
                </button>

                <div className="mt-2">
                  <p className="text-sm font-medium text-gray-800 truncate">
                    {image.name}
                  </p>
                  {image.size && (
                    <p className="text-xs text-gray-500">
                      {(image.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
