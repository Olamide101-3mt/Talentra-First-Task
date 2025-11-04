import { Client, Account, ID } from "appwrite";

const client = new Client();

const APPWRITE_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT || "https://fra.cloud.appwrite.io/v1";
const APPWRITE_PROJECT = import.meta.env.VITE_APPWRITE_PROJECT_ID || "690590a40006263c28fe";

// ✅ Add this line — it tells Appwrite which domain the request is coming from
client
  .setEndpoint(APPWRITE_ENDPOINT)
  .setProject(APPWRITE_PROJECT)
  // .setPlatform(window.location.origin); // 👈 IMPORTANT for CORS + browser sessions

export const account = new Account(client);
export { ID };
