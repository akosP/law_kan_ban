import prisma from "@/lib/prisma";

export async function GET() {
  try {
    // Fetch laws from the database using Prisma
    const laws = await prisma.law.findMany();
    console.log("asd");
    return new Response(JSON.stringify(laws), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error fetching laws" }), {
      status: 500,
    });
  }
}
