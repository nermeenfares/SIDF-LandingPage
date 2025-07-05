import { MockData } from "@/constants";
import React from "react";
import InfoCard from "../cards/InfoCard";

function InfoTemplate({ title }: { title: String }) {
  return (
    <section className="gap-4 flex flex-col pt-3">
      <p className="font-semibold text-heading text-primary">{title}</p>
      <div className="gap-4 flex flex-col">
        {MockData.map((data, index) => {
          return (
            <>
              <InfoCard
                value={data.value}
                unit={data.unit}
                time={data.time}
                name={data.name}
                key={index}
              />
            </>
          );
        })}
      </div>
    </section>
  );
}

export default InfoTemplate;
