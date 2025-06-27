import React from "react";

export default function ExtensionHeader({ children }) {
  return (
    <>
      <div className="container gap-6 sm:flex-row flex-col flex justify-between mb-3 sm:mb-8 items-center  sm:py-3 sm:px-4">{children}</div>
    </>
  );
}
