import React from "react";
import MainContainer from "../cards/MainContainer";
import { values } from "@/constants";
import ValueCard from "../cards/ValueCard";

function ValuesComponent() {
  return (
    <MainContainer
      title="القيم"
      Icon={<img src="/svg/value-icon.svg" alt="icon" className="h-6 w-6" />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 p-6">
        {values.map((value, index) => (
          <ValueCard
            key={index}
            icon={value.icon}
            header={value.header}
            description={value.description}
            color={value.color}
          />
        ))}
      </div>
    </MainContainer>
  );
}

export default ValuesComponent;
