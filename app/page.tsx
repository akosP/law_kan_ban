"use client"
import KanbanBoard from "@/components/board";
import KanbanColumn from "@/components/column";
import KanbanItem from "@/components/item";
import prisma from "@/lib/prisma";
import React,{useEffect,useState} from 'react'

interface Sag {
  id: number;
  typeid: number;
  periodeid: number;
  statusid: number;
  titel: string;
  // [key: string]: any; // To account for other properties in the response
}

export default function Home() {
  const [laws, setLaws] = useState<Sag[]>([]);
  useEffect(() => {
    async function getLaws() {
      const fetchedLaws: Sag[] = await prisma.law.findMany(); // Get data from database
      setLaws(fetchedLaws); // Update state with the fetched data
    }

    getLaws(); // Call the async function to fetch data

    console.log('Hello, World!');
    console.log('Fetched Laws:', laws); // This will log the state after it is updated
  }, []); // Empty dependency array to run only on page load or refresh
  
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
