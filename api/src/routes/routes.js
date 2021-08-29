import axios from "axios";
import { Router, response } from "express";
import Prisma from "@prisma/client";
/* import { v4 } from 'uuid'; */

const prisma = new Prisma.PrismaClient();

const path = Router();

path.get("/items", async (req, res) => {
  const items = await prisma.item.findMany();
  return res.json(items);
});

path.post("/addItem", async (req, res) => {
  try {
    const newItem = await prisma.item.create({
      data: {
        name: req.query.name.toLowerCase(),
      },
    });
    console.table(newItem)
    return res.json(newItem.name + " fue añadido al inventario");
  } catch (error) {
    console.error(error);
    return res.status(400).send("ERROR");
  }
});

path.get("/types", (req, res) => {
  return res.json("ITEM TYPES");
});

export default path;
