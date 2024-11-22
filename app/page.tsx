"use client";
import KanbanBoard from "@/components/board";
import KanbanColumn from "@/components/column";
import KanbanItem from "@/components/item";
import React, { useEffect, useState } from "react";
import { Sag } from "@/app/types/laws";
import Header from "@/components/header";

export default function Home() {
  const [laws, setLaws] = useState<Sag[]>([]);
  useEffect(() => {
    const fetchLaws = async () => {
      const response = await fetch("/api/getLaws");
      const data = await response.json();
      setLaws(data); // Set the fetched laws to the state
    };

    fetchLaws(); // Fetch laws when the page loads
  }, []); // Empty dependency array ensures this runs on page load and refresh

  const status: number[] = [...new Set(laws?.map((x: Sag) => x.typeid))];

  return (
    <div className="h-screen">
      <Header />
      <div className="h-full w-full bg-neutral-900 text-neutral-50">
        <KanbanBoard>
          {status?.map((s: number) => {
            return (
              <KanbanColumn
                key={s.toString()}
                status={s}
                count={laws.filter((law: Sag) => law.typeid == s).length}
              >
                {laws
                  .filter((law: Sag) => law.typeid == s)
                  ?.map((l: Sag) => {
                    return (
                      <KanbanItem
                        key={l.id}
                        id={l.id}
                        title={l.titel}
                      ></KanbanItem>
                    );
                  })}
              </KanbanColumn>
            );
          })}
        </KanbanBoard>
      </div>
    </div>
  );
}
