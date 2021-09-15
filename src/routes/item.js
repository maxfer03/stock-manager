const itemPath = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const {branch, item} = new PrismaClient()


itemPath.get("/", async (req, res) => {
  const items = await item.findMany()
  return res.json(items);
});
itemPath.get("/:itemName", async (req, res) => {
  const {itemName} = req.params
  const oneItem = await item.findUnique({
    where: {
      name: itemName
    }
  })
  return res.json(oneItem)
})

module.exports = itemPath;
