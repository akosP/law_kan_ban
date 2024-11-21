import cron from "node-cron";
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
      await prisma.law.upsert({
        where: { id: item.Id },
        update: {
            typeid: item.typeid,
            periodeid: item.periodeid,
            statusid: item.kategoriid,
            titel: item.titel,
            titelkort: item.titelkort,
            lovnummer: item.lovnummer,
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
};

// Schedule the cron job (every hour)
cron.schedule("0 * * * *", () => {
  console.log("Running scheduled database update...");
  updateDatabase();
});
