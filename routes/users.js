import express from "express"
import { v4 as uuidv4 } from "uuid";
//used to generate ID 

const router = express.Router();

const users = []

//all routes in here are starting with /users
router.get("/", (req, res) => {
    res.send("Hello")
    console.log(users);
})

router.post("/", (req, res) => {
    console.log("POST ROUTE REACHED");
    users.push({...req.body, ID : uuidv4()});
    console.log(users);
    res.send(`User with the name ${req.body.firstName} added to the database`);
})

router.get("/:id", (req, res) => {
    console.log(users.find((user) => user.ID === req.params.id));
})

router.delete("/:id", (req, res) => {
    console.log(users.filter((user) => user.ID != req.params.id));
    res.send(`Deleted user with ID = ${req.params.id}`)
})

router.patch("/:id", (req, res) => {
    let user = users.find((user) => user.ID = req.params.id)
    let {firstName, lastName, age} = req.body;

    if(firstName) user.firstName = firstName
    if(lastName) user.lastName = lastName
    if(age) user.age = age

    res.send(`User with ${req.params.id} has been updated`)
})

export default router;