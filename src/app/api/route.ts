const db = require('../../database/config');

export async function GET() {
    try {
        const queryText = `SELECT * from companies`;
        const result = await db.query(queryText, ["", ""]);
        // return result.rows[0];
        return new Response("Hello")
    } catch (error) {
        console.log(error);
        // res.status(500).json({ error: 'Internal Server Error' })
    }
}