import prisma from "@/lib/prisma";
import { fetchAndFilterData } from "@/lib/lawreader";

// Function to update the database
export async function GET(request: Request) {
  try {
    console.log("Starting database update...");

    // Fetch and filter data
    const filteredData = await fetchAndFilterData();

    if (filteredData.length === 0) {
      console.log("No data to update.");
      return;
    }

    // Update or insert data into the database
    for (const item of filteredData) {
      console.log(item.id);
      await prisma.law.upsert({
        where: { id: item.id },
        update: {
          typeid: item.typeid,
          periodeid: item.periodeid,
          statusid: item.kategoriid,
          titel: item.titel,
        },
        create: {
          id: item.id,
          typeid: item.typeid,
          periodeid: item.periodeid,
          statusid: item.kategoriid,
          titel: item.titel,
        },
      });
    }

    console.log("Database updated successfully.");
  } catch (error) {
    console.error("Error during database update:", error);
  } finally {
    await prisma.$disconnect();
  }
}
