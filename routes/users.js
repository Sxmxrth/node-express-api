import express from "express"

const router = express.Router();

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

//all routes in here are starting with /users
router.get("/", (req, res) => {
    res.send("Hello")
    // console.log(users);
})

router.post("/", (req, res) => {
    console.log("POST ROUTE REACHED");
    console.log(req.body);
    users.push(req.body);
    console.log(users);
    res.send("POST ROUTE REACHED");
})

export default router;