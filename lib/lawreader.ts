import { Sag } from "@/app/types/laws";

export async function fetchAndFilterData() {
  try {
    // Fetch data from the API
    const response = await fetch("https://oda.ft.dk/api/Sag");

    if (!response.ok) {
      throw new Error(`Failed to fetch data. Status: ${response.status}`);
    }

    // Parse the JSON response
    const jsonResponse = await response.json();

    // Access the array in the "value" property
    const data = jsonResponse.value;
    // console.log(data);
    // Filter the data based on the requirements
    const filteredData = data.filter(
      // (item: Sag) => [3, 5, 9].includes(item.typeid) && item.periodeid == 160
      (item: Sag) => [3, 5, 9].includes(item.typeid) || item.periodeid == 160
    );

    //   console.log("Filtered Data:", filteredData);
    return filteredData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
