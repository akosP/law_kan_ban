import KanbanBoard from "@/components/board";
import KanbanColumn from "@/components/column";
import { KanbanItem } from "@/components/item";
import prisma from "@/lib/prisma";
import React from 'react'

interface Sag {
  id: number;
  typeid: number;
  periodeid: number;
  statusid: number;
  titel: string;
  // [key: string]: any; // To account for other properties in the response
}

async function getLaws() {
  const laws : Sag[] = await prisma.law.findMany();
  return laws;
}

export default async function Home() {
  const laws = await getLaws();
  console.log(laws)
  const status: number[] = [... new Set(laws?.map((x: Sag)=>x.typeid))]
  
  return (
    <div className="h-screen w-full bg-neutral-900 text-neutral-50">
      <KanbanBoard>
         {status?.map((s:number) => {
              return (
                <KanbanColumn
                key={s.toString()}
                status={s}
                count={laws.filter((law:Sag) =>law.typeid==s).length}
                 >
                 {laws.filter((law:Sag) =>law.typeid==s)?.map((l:Sag) => {
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
