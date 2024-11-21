import KanbanBoard from "@/components/board";
import KanbanColumn from "@/components/column";
import { KanbanItem } from "@/components/item";
import { fetchAndFilterData } from "@/lib/lawreader";
import prisma from "@/lib/prisma";
import React from 'react'

async function test() {
  // await prisma.law.create({
  //   data: {id: 3, typeid: 3,
  //   periodeid: 3,
  //   titel: 'asd'}})
  const laws = await prisma.law.findMany();
  return laws;
}

export default async function Home() {
  const laws = await test();
  // console.log(laws);
  const status = [... new Set(laws.map(x=>x.typeid))]
  const lawsByStatus = laws.filter(law =>law.typeid==5)
  // console.log(laws)
  // const lawStatus = React.useMemo(() => {

  //   // prepare unassigned stage
  //   const grouped = laws.map((law) => ({
  //     ...law,
  //     laws: laws.filter((law) => law.statusid?.toString() === stage.id),
  //   }));

  //   return {
  //     columns: grouped,
  //   };
  // }, [tasks, stages]);
// console.log(lawsByStatus.map(x=>x))
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
      <KanbanBoard>
         {status?.map((s) => {
              return (
                <KanbanColumn
                key={s}
                status={s}
                 >
                 {laws.filter(law =>law.typeid==s)?.map((l) => {
              return (
                <KanbanItem
                key={l.id}
                id={l.id}
                title={l.titel}
                 >
                 
                 </KanbanItem>

              );
            })}
                 </KanbanColumn>

              );
            })}
      </KanbanBoard>
    </div>
  );
}
