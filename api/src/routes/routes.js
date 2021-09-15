import axios from "axios";
import { Router, response } from "express";
import Prisma from "@prisma/client";
/* import { v4 } from 'uuid'; */

const prisma = new Prisma.PrismaClient();

const path = Router();

path.get("/items", async (req, res) => {
  return res.json("Items");
});

path.post("/addItem", async (req, res) => {
  return "addItem"
});

path.get("/types", (req, res) => {
  return res.json("ITEM TYPES.");
});

export default path;
