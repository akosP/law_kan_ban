import React from 'react'

type Props = {
    status: number;
  };

const KanbanColumn = ({children,status}: React.PropsWithChildren<Props>) => {

    return (
    <div className="w-56 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium `}>Status Id: {status} </h3>
        <span className="rounded-lg w-10 bg-neutral-950 text-sm text-neutral-700 text-center">
          {children?.length}
        </span>
      </div>
      <div
        className={`h-full w-full transition-colors "bg-neutral-800/50" : "bg-neutral-800/0"}`}>
        {children}
      </div>
    </div>
  );
}

export default KanbanColumn