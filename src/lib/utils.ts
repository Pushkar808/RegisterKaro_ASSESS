import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import pool from "@/database/config";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// export async function GetCompanyData() {
//   try {
//     const client = await pool.connect();
//     console.log("connected")
//     const result = await client.query("Select * from public.companies")
//     console.log("fetchedData", result.rows)
//     const data = result?.rows;
//   } catch (error) {
//     console.log(error)
//   }
// }