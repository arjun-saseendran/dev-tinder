import express from "express";
import dotenv from "dotenv";

// Config dotenv
dotenv.config();

// Config port
const PORT = process.env.PORT;

// Create app
const app = express();





// Create server
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
