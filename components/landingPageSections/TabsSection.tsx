"use client";
import React, { useState } from "react";

const tabsData = [
  {
    id: 1,
    title: "كلمة سمو الرئيس التنفيذي",
    content: {
      title: "كلمة سمو الرئيس التنفيذي",
      description:
        "نرحب بكم في التقرير السنوي لصندوق التنمية الصناعية السعودي، والذي يعكس إنجازاتنا ومساهماتنا في دعم القطاع الصناعي والاقتصاد الوطني.",
      timeline: [
        {
          year: "2023",
          value: "150",
          unit: "مليار ريال",
          label: "إجمالي الاستثمارات",
        },
        {
          year: "2022",
          value: "85",
          unit: "مليار ريال",
          label: "القروض المقدمة",
        },
        {
          year: "2021",
          value: "60",
          unit: "مليار ريال",
          label: "رأس المال المدفوع",
        },
      ],
    },
  },
  {
    id: 2,
    title: "كلمة معالي رئيس مجلس الإدارة",
    content: {
      title: "كلمة معالي رئيس مجلس الإدارة",
      description:
        "يسعدني أن أقدم لكم هذا التقرير الذي يوضح الدور المحوري للصندوق في تحقيق أهداف رؤية المملكة 2030 في التنمية الصناعية المستدامة.",
      timeline: [
        {
          year: "2023",
          value: "200",
          unit: "مشروع",
          label: "المشاريع المدعومة",
        },
        {
          year: "2022",
          value: "180",
          unit: "مشروع",
          label: "المشاريع الجديدة",
        },
        {
          year: "2021",
          value: "160",
          unit: "مشروع",
          label: "المشاريع المكتملة",
        },
      ],
    },
  },
  {
    id: 3,
    title: "الهيكل التنظيمي",
    content: {
      title: "الهيكل التنظيمي",
      description:
        "يتكون الصندوق من عدة إدارات متخصصة تعمل بتناغم لتحقيق الأهداف الاستراتيجية وتقديم أفضل الخدمات للعملاء في القطاع الصناعي.",
      timeline: [
        {
          year: "2023",
          value: "12",
          unit: "إدارة",
          label: "الإدارات الرئيسية",
        },
        { year: "2022", value: "500", unit: "موظف", label: "إجمالي الموظفين" },
        { year: "2021", value: "8", unit: "فروع", label: "الفروع الإقليمية" },
      ],
    },
  },
  {
    id: 4,
    title: "مجلس الإدارة",
    content: {
      title: "مجلس الإدارة",
      description:
        "يضم مجلس الإدارة نخبة من الخبراء والمتخصصين في القطاع المصرفي والصناعي، ويعمل على وضع الاستراتيجيات والسياسات التي تحقق أهداف الصندوق.",
      timeline: [
        { year: "2023", value: "9", unit: "عضو", label: "أعضاء المجلس" },
        {
          year: "2022",
          value: "24",
          unit: "اجتماع",
          label: "الاجتماعات السنوية",
        },
        {
          year: "2021",
          value: "15",
          unit: "قرار",
          label: "القرارات الاستراتيجية",
        },
      ],
    },
  },
  {
    id: 5,
    title: "الصندوق في سطور",
    content: {
      title: "الصندوق في سطور",
      description:
        "تأسس صندوق التنمية الصناعية السعودي في عام 1394هـ (1974م)، برأس مال مبدئي بلغ 500 مليون ريال، بغرض دعم التنمية الصناعية لاقتصاد المملكة عن طريق تقديم قروض متوسطة وطويلة أجل للمنشآت الصناعية الجديدة والقائمة. تم رفع رأس المال تدريجياً حتى أصبح 105 مليارات ريال في عام 1440هـ (2019م). وقام الصندوق الصناعي على مدار 50 عاماً بتقديم الدعم الصناعي وفقاً لاحتياجات كل مرحلة من خلال تعزيز فرص الاستثمار الصناعي وتطوير الصناعة المحلية ورفع مستوى أدائها، وتطوير المؤسسات التنافسية، ودعم المبادرات الاستراتيجية، فضلاً عن توسعه في نطاق الدعم ليشمل عدداً من القطاعات الواعدة في مجالات الصناعة والطاقة والتعدين والخدمات اللوجستية، ليكون الممكن المالي الرئيسي للتحول الصناعي والمساهمة في تنمية وتطوير الاقتصاد الوطني.",
      timeline: [
        { year: "عام 2019م", value: "105", unit: "مليار ريال", label: "" },
        { year: "عام 2005م", value: "20", unit: "مليار ريال", label: "" },
        {
          year: "تأسس عام برأس مال مبدئي",
          value: "500",
          unit: "مليون ريال",
          label: "",
        },
      ],
    },
  },
];

function AngledTabsSection() {
  const [activeTab, setActiveTab] = useState(5);

  interface TimelineItem {
    year: string;
    value: string;
    unit: string;
    label: string;
  }

  interface TabContent {
    title: string;
    description: string;
    timeline: TimelineItem[];
  }

  interface TabData {
    id: number;
    title: string;
    content: TabContent;
  }

  const handleTabClick = (tabId: number): void => {
    setActiveTab(tabId);
  };

  const activeTabData = tabsData.find((tab) => tab.id === activeTab);

  return (
    <div className="w-full" dir="rtl">
      {/* Tabs Navigation */}
      <div className="flex gap-1 mb-8">
        {tabsData.map((tab, index) => {
          const isActive = activeTab === tab.id;
          const isLast = index === tabsData.length - 1;

          return (
            <div
              key={tab.id}
              className="flex-1 cursor-pointer"
              onClick={() => handleTabClick(tab.id)}
            >
              <div
                className={`
                  h-12 flex items-center justify-center text-center px-4 transition-all duration-300 group
                  ${
                    isActive
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-green-600 hover:text-white"
                  }
                  ${isLast ? "" : "border-r border-gray-200"}
                `}
                style={{
                  clipPath: isLast
                    ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                    : "polygon(0 0, calc(100% - 15px) 0, 100% 100%, 0 100%)",
                }}
              >
                <span className="text-sm font-medium whitespace-nowrap">
                  {tab.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Tab Content */}
      {activeTabData && (
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Timeline */}
            <div className="lg:w-1/3 space-y-4">
              {activeTabData.content.timeline.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="text-right text-gray-600 text-sm min-w-[120px]">
                    {item.year}
                  </div>
                  <div
                    className="bg-green-600 text-white px-4 py-2 text-center min-w-[100px] font-bold"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 15px) 0, 100% 100%, 0 100%)",
                    }}
                  >
                    <div className="text-lg">{item.value}</div>
                    <div className="text-xs opacity-90">{item.unit}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-green-600 mb-6">
                {activeTabData.content.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {activeTabData.content.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AngledTabsSection;
