import axios from 'axios';
import { Router, response } from 'express';
/* import { v4 } from 'uuid'; */


const path = Router();

path.get("/items", (req, res) => {
    return res.json("ITEMS")
})

path.get("/types", (req, res) => {
    return res.json("ITEM TYPES")
})


export default path