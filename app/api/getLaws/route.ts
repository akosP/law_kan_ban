import { fetchAndFilterData } from "@/lib/lawreader";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    // Fetch laws from the database using Prisma
    const filteredData = await fetchAndFilterData();
    const laws = await prisma.law.findMany();
    console.log(filteredData.length);
    return new Response(JSON.stringify(laws), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error fetching laws" }), {
      status: 500,
    });
  }
}
