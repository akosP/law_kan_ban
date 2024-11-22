import React from "react";

type Props = {
  id: number;
  title: string;
};

const KanbanItem = ({ id, title }: React.PropsWithChildren<Props>) => {
  return (
    <div className="rounded border border-neutral-700 bg-neutral-800 my-3 p-3 ">
      <p className="rounded-lg size-fit px-2 bg-red-700 text-sm text-neutral-50 text-center">
        {id}
      </p>
      <p className="text-sm text-neutral-100">{title}</p>
    </div>
  );
};

export default KanbanItem;
