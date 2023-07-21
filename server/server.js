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
        const results = await pool.query("SELECT * FROM Color ORDER BY id ASC;");
        RES.json(results.rows); return;
    }
    catch (error) {
        console.error(error.message);
        RES.status(500).send("Internal Server Error!");
    }
});

// get all route (replace table names)
app.get("/table", async (REQ, RES) => {
    try {
        const results = await pool.query("SELECT * FROM [table_name] ORDER BY id ASC");
        RES.status(200).send(results.rows); return;
    }
    catch (error) {
        console.error("Server caught the following error: ", error.message);
        RES.status(500).send("Internal server error"); return;
    }
});

// get one route (replace table names)
app.get("/table/:id", async (REQ, RES) => {
    const { id } = REQ.params;
    try {
        const results = await pool.query("SELECT * FROM [table_name] WHERE id = $1", [id]);
        if (results.rowCount === 0) {
            RES.status(404).send("No resource found"); return;
        } else {
            RES.status(200).json(results.rows[0]); return;
        }
    }
    catch (error) {
        console.error("Server caught the following error: ", error.message);
        RES.status(500).send("Internal server error"); return;
    }
});

// post one route (replace table names and query statement)
app.get("/table", async (REQ, RES) => {
    const {/* stuff destructed from request object */ } = REQ.body;
    if (/* data validation fails */ !REQ.body) {
        RES.status(400).send("Bad Request" /* tell user what to include in POST request */); return;
    }
    try {
        const results = await pool.query(
            "INSERT INTO [table_name] (colums) VALUES (values) RETURNING *",
            [/*stuff destructed from request object*/]
        );
        if (results.rowCount === 0) {
            RES.status(500).send("Unable to POST"); return;
        } else {
            RES.status(201).json(results.rows[0]); return;
        }
    }
    catch (error) {
        console.error("Server caught the following error: ", error.message);
        RES.status(500).send("Internal server error"); return;
    }
});

// put one route (replace table names and query statement)
app.put("/table/:id", async (REQ, RES) => {
    const {/* stuff destructed from request object */ } = REQ.body; const { id } = REQ.params;
    if (/* data validation fails */ !REQ.body) {
        RES.status(400).send("Bad Request" /* tell user what to include in POST request */); return;
    }
    try {
        const results = await pool.query(
            "UPDATE [table_name] SET [column] = $1, [column] = $2 WHERE id = $3 RETURNING *",
            [/*stuff destructed from request object*/, id]
        );
        if (results.rowCount === 0) {
            RES.status(404).send("No resource found"); return;
        } else {
            RES.status(200).json(results.rows[0]); return;
        }
    }
    catch (error) {
        console.error("Server caught the following error: ", error.message);
        RES.status(500).send("Internal server error"); return;
    }
});

// patch one (replace table names and query statement)
app.patch("/table/:id", async (REQ, RES) => {
    const {/* stuff destructed from request object */ } = REQ.body; const { id } = REQ.params;
    if (/* data validation fails */ !REQ.body) {
        RES.status(400).send("Bad Request" /* tell user what to include in POST request */); return;
    }
    try {
        const results = await pool.query(
            "UPDATE [table_name] SET [column] = $1, [column] = $2 WHERE id = $3 RETURNING *",
            [/*stuff destructed from request object*/, id]
        );
        if (results.rowCount === 0) {
            RES.status(404).send("No resource found"); return;
        } else {
            RES.status(200).json(results.rows[0]); return;
        }
    }
    catch (error) {
        console.error("Server caught the following error: ", error.message);
        RES.status(500).send("Internal server error"); return;
    }
});

// delete one
app.delete("/table/:id", async (REQ, RES) => {
    const { id } = REQ.params;
    try {
        const results = await pool.query(
            "DELETE FROM [table_name] WHERE id = $1 RETURNING *",
            [id]
        );
        if (results.rowCount === 0) {
            RES.status(404).send("No resource found"); return;
        } else {
            RES.status(200).json(results.rows[0]); return;
        }
    }
    catch (error) {
        console.error("Server caught the following error: ", error.message);
        RES.status(500).send("Internal server error"); return;
    }
});

// listener
app.listen(PORT, () => {
    console.log("Server running, port...", PORT);
})