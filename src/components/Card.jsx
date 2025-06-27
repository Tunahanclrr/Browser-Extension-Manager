import React from "react";
import ToggleSwitch from "./ToggleSwitch";

export default function Card({ extension, onDelete, onToggle }) {
  const handleDelete = () => {
    onDelete(extension.id);
  };

  const handleToggle = (isActive) => {
    onToggle(extension.id);
  };

  return (
    <div className="">
      <article className="border h-[200px] flex flex-col border-neutral-200 dark:border-neutral-600 rounded-[20px] p-5 bg-neutral-50 dark:bg-neutral-800">
        <div className="flex items-center gap-4">
          <img 
            src={extension.logo} 
            alt={`${extension.name} logo`} 
            width={60} 
            height={60} 
            className="w-15 h-15 object-contain"
          />
          <div>
            <h2 className="text-neutral-900 dark:text-neutral-50 text-preset-2 mb-2">
              {extension.name}
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {extension.description}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-5">
          <button 
            onClick={handleDelete}
            className="border rounded-full py-2 px-4 cursor-pointer hover:text-neutral-50 hover:bg-red-700 dark:hover:text-neutral-900 dark:hover:bg-red-400 hover:border-transparent transition-all border-neutral-300 dark:border-neutral-600 text-sm"
          >
            Remove
          </button>
          <ToggleSwitch 
            isActive={extension.isActive} 
            onChange={handleToggle}
          />
        </div>
      </article>
    </div>
  );
}
