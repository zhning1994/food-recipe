import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from './routes/posts.js'


const app = express();
app.use('/posts', postRoutes);
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cors());
const CONNECTION_URL = 'mongodb+srv://appadmin:6xsHG8IRzmqD7Ehc@cluster0.e1iew.mongodb.net/recipedb?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))).catch((err) => console.log(err.message))
//6xsHG8IRzmqD7Ehc

