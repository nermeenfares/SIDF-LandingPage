import React from "react";

function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white w-full shadow-[4px_4px_10px_rgba(0,0,0,0.1)] rounded-none">
      {children}
    </div>
  );
}

export default MainContainer;
