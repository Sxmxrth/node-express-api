import express from "express"
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

const users = []

//all routes in here are starting with /users
router.get("/", (req, res) => {
    res.send("Hello")
    // console.log(users);
})

router.post("/", (req, res) => {
    console.log("POST ROUTE REACHED");
    users.push({...req.body, ID : uuidv4()});
    console.log(users);
    res.send(`User with the name ${req.body.firstName} added to the database`);
})

export default router;