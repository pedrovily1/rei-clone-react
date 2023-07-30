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

// get all route
app.get("/product", async (REQ, RES) => {
    try {
        const results = await pool.query("SELECT * FROM product ORDER BY id ASC");
        RES.status(200).send(results.rows); return;
    }
    catch (error) {
        console.error("Server caught the following error: ", error.message);
        RES.status(500).send("Internal server error"); return;
    }
});

// get one route
app.get("/product/:id", async (REQ, RES) => {
    const { id } = REQ.params;
    try {
        const results = await pool.query("SELECT * FROM product WHERE id = $1", [id]);
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

// post one route
app.get("/product", async (REQ, RES) => {
    const { name, description, price, discount, sale_end_date, quantity, review_id, category_id, color_id, store_id } = REQ.body;
    if (!name || !description || !price || !discount || !sale_end_date || !quantity || !review_id || !category_id || !color_id || !store_id) {
        RES.status(400).send("Bad Request, include name, description, price, discount, sale_end_date, quantity, review_id, category_id, color_id, store_id"); return;
    }
    try {
        const results = await pool.query(
            "INSERT INTO product (name, description, price, discount, sale_end_date, quantity, review_id, category_id, color_id, store_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
            [name, description, price, discount, sale_end_date, quantity, review_id, category_id, color_id, store_id]
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

// put one route
app.put("/product/:id", async (REQ, RES) => {
    const { name, description, price, discount, sale_end_date, quantity, review_id, category_id, color_id, store_id } = REQ.body;
    const { id } = REQ.params;
    if (!name || !description || !price || !discount || !sale_end_date || !quantity || !review_id || !category_id || !color_id || !store_id) {
        RES.status(400).send("Bad Request, include name, description, price, discount, sale_end_date, quantity, review_id, category_id, color_id, store_id"); return;
    }
    try {
        const results = await pool.query(
            "UPDATE product SET name = $1, description = $2, price = $3, discount = $4, sale_end_date = $5, quantity = $6, review_id = $7, category_id = $8, color_id = $9, store_id = $10 WHERE id = $11 RETURNING *",
            [name, description, price, discount, sale_end_date, quantity, review_id, category_id, color_id, store_id, id]
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

// patch one
app.patch("/product/:id", async (REQ, RES) => {
    const { name, description, price, discount, sale_end_date, quantity, review_id, category_id, color_id, store_id } = REQ.body;
    const { id } = REQ.params;
    if (!name || !description || !price || !discount || !sale_end_date || !quantity || !review_id || !category_id || !color_id || !store_id) {
        RES.status(400).send("Bad Request, include name, description, price, discount, sale_end_date, quantity, review_id, category_id, color_id, store_id"); return;
    }
    try {
        const results = await pool.query(
            "UPDATE product SET name = $1, description = $2, price = $3, discount = $4, sale_end_date = $5, quantity = $6, review_id = $7, category_id = $8, color_id = $9, store_id = $10 WHERE id = $11 RETURNING *",
            [name, description, price, discount, sale_end_date, quantity, review_id, category_id, color_id, store_id, id]
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
app.delete("/product/:id", async (REQ, RES) => {
    const { id } = REQ.params;
    try {
        const results = await pool.query(
            "DELETE FROM product WHERE id = $1 RETURNING *",
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

// get all reviews
app.get("/review", async (REQ, RES) => {
    try {
        const results = await pool.query("SELECT * FROM review ORDER BY id ASC");
        RES.status(200).send(results.rows); return;
    }
    catch (error) {
        console.error("Server caught the following error: ", error.message);
        RES.status(500).send("Internal server error"); return;
    }
});

// get one review
app.get("/review/:id", async (REQ, RES) => {
    const { id } = REQ.params;
    try {
        const results = await pool.query("SELECT * FROM review WHERE id = $1", [id]);
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