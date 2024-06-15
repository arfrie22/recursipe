import { server } from "./server.js";
import dotenv from "dotenv";

dotenv.config();

console.log("Starting server...");
server();
