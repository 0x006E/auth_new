import React from "react";

function ContainerBox({ children }) {
  return (
    <div className="bg-white p-8 flex flex-col w-full shadow-xl rounded-xl">
      {children}
    </div>
  );
}

export default ContainerBox;
