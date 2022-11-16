import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();
app.use(bodyParser.urlencoded({extended : true}));
const PORT = 5000;

const users = [
    {
        firstName : "Samarth",
        lastName : "Gupta",
        age : "20"
    },
    {
        firstName : "Navneet",
        lastName : "Nair",
        age : "19"
    }

]

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
    console.log(users);
    res.send("Hello from homepage")
})


app.listen(PORT, () => {
    console.log(`the server is up and running on port ${PORT}`);
})