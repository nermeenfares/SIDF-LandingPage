import React from "react";
import { ChevronLeft, Home } from "lucide-react";

function BottomNavigationSection() {
  return (
    <div className="w-full flex gap-4 mt-8">
      <div className="flex-1">
        <div
          className="bg-gray-400 hover:bg-primary transition-colors duration-300 h-20 flex items-center justify-center text-white cursor-pointer group"
          style={{
            clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 100%, 0 100%)",
          }}
        >
          <div className="flex items-center gap-3 px-6">
            <ChevronLeft
              size={24}
              className="text-white group-hover:text-white transition-colors duration-300"
            />
            <div className="text-right">
              <div className="text-lg font-semibold">الموضوع التالي</div>
              <div className="text-sm opacity-90">مجلس الإدارة</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div
          className="bg-gray-400 hover:bg-primary transition-colors duration-300 h-20 flex items-center justify-center text-white cursor-pointer group"
          style={{
            clipPath: "polygon(30px 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <div className="flex items-center gap-3 px-6">
            <div className="text-right">
              <div className="text-lg font-semibold">الصفحة الرئيسية</div>
              <div className="text-sm opacity-90">التقرير التفاعلي 2023</div>
            </div>
            <Home
              size={24}
              className="text-white group-hover:text-white transition-colors duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomNavigationSection;
