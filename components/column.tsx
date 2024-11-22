import React from "react";

type Props = {
  status: number;
  count: number;
};

const KanbanColumn = ({
  children,
  status,
  count,
}: React.PropsWithChildren<Props>) => {
  return (
    <div className="w-56 shrink-0 h-full pr-2">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium `}>Status Id: {status} </h3>
        <span className="rounded-lg w-10 bg-neutral-950 text-sm text-neutral-700 text-center">
          {count}
        </span>
      </div>
      <div
        className={`h-full w-full transition-colors "bg-neutral-800/50" : "bg-neutral-800/0" overflow-x-hidden overflow-y-auto pr-2
          [&::-webkit-scrollbar]:w-1.5
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-track]:bg-gray-500
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-gray-500
          dark:[&::-webkit-scrollbar-track]:bg-neutral-700
          dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500}`}
      >
        {children}
      </div>
    </div>
  );
};

export default KanbanColumn;
