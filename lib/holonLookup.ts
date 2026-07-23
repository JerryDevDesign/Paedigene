import { dtp } from "@/lib/dtp";

// Function to lookup concepts/genes using the initialized DTP client
export async function lookupGene(geneSymbol: string) {
  try {
    const hits = await dtp.holon.concepts.search(geneSymbol, {
      domain: "Gene",
    });
    return hits;
  } catch (error) {
    console.error("Error looking up gene:", error);
    throw error;
  }
}