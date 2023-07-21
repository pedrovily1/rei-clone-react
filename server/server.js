/* This is the file that gets run by the web service Start Command
It uses middleware to link to the 'dist' folder (which is constructed
by running "npm run build" before deployment). */

// import dependencies
import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';
import cors from 'cors';

// initialize app
const app = express();

// configure environment variables
dotenv.config();
const PORT = 3939 || process.env.PORT; // defaults to 3939
const DATABASE_URL = process.env.DATABASE_URL;

// initialize data pool
const { Pool } = pg;
const pool = new Pool({ connectionString: DATABASE_URL });

// utilize middleware
app.use(
    express.static('dist'), // connects to a 'dist' folder
    express.json(), // parser
    cors({ origin: '*' }) // cors
);

// test endpoint (will be deleted after 7/24/2023)
app.get("/test", async (REQ, RES) => {
    try {
        const results = await pool.query("SELECT * FROM testTable ORDER BY id ASC;");
        RES.json(results.rows); return;
    }
    catch (error) {
        console.error(error.message);
        RES.status(500).send("Internal Server Error!");
    }
});

// listener
app.listen(PORT, () => {
    console.log("Server running, port...", PORT);
})