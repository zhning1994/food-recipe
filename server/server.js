import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use('/posts', postRoutes);
// const CONNECTION_URL = 'mongodb+srv://appadmin:6xsHG8IRzmqD7Ehc@cluster0.e1iew.mongodb.net/recipedb?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL).then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))).catch((err) => console.log(err.message))


