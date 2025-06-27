import React from "react";

export default function ButtonGroups({ activeFilter, onFilterChange }) {
  const buttons = [
    { id: "all", label: "All" },
    { id: "active", label: "Active" },
    { id: "inactive", label: "Inactive" },
  ];

  return (
    <div className="space-x-3 flex">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => onFilterChange(button.id)}
          className={`border text-preset-3 rounded-full pt-2 pb-2.5 px-5 md:px-6 duration-200 ${
            activeFilter === button.id
              ? "bg-purple-600 text-white border-transparent"
              : "border-neutral-200 dark:border-neutral-600 bg-neutral-50 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-50 hover:bg-neutral-100 dark:hover:bg-neutral-600"
          }`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}
