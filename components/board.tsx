import React from 'react'

const KanbanBoard = ({children}: React.PropsWithChildren) => {
  return (
    <div className="flex h-full w-full gap-3 overflow-scroll p-12">      
      {children}
    </div>
  );
}

export default KanbanBoard