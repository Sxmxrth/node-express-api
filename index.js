import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";


const app = express();
app.use(bodyParser.json());
const PORT = 5000;

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
    res.send("Hello from homepage")
})

app.listen(PORT, () => {
    console.log(`the server is up and running on port ${PORT}`);
})