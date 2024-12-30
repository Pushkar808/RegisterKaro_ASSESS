// /pages/api/company.js
import { pool } from '../../lib/db'; // Ensure you have a pool setup for your DB connection

export default async function handler(req, res) {
    try {
        const client = await pool.connect(); // Connect to the database
        const result = await client.query('SELECT * FROM public.companies'); // Fetch data from the companies table
        client.release(); // Release the connection

        res.status(200).json({ data: result.rows }); // Send the data as a response
    } catch (error) {
        console.error('Error fetching data from the database:', error);
        res.status(500).json({ error: 'Internal Server Error' }); // Send error if query fails
    }
}