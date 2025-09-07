import React from "react";
import { Card } from "@/components/ui/card";

const CustomCard = ({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) => {
  return (
    <Card className="w-[500px] bg-sidebar rounded-2xl shrink-0 h-fit  border-card-custom-border">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-card-custom-text mb-4">
          {title}
        </h2>

        {content}
      </div>
    </Card>
  );
};

export default CustomCard;
