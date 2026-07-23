import { DTP } from "@ontomorph/dtp-sdk";

export const dtp = new DTP({
  apiKey: process.env.DTP_KEY || "holon_e7aae7056dba37f94c1a0fc00ed26536ac7cab9efef397bebb4759d9704fa980",
  holonApiUrl: process.env.HOLON_API_URL || "https://holon-api.ontomorph.com",
  holonApiKey: process.env.HOLON_KEY || "holon_e7aae7056dba37f94c1a0fc00ed26536ac7cab9efef397bebb4759d9704fa980",
});