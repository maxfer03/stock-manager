const itemPath = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const { branch, item } = new PrismaClient();

itemPath.get("/", async (req, res) => {
  const items = await item.findMany();
  return res.json(items);
});
itemPath.get("/:itemName", async (req, res) => {
  const { itemName } = req.params;
  const oneItem = await item.findUnique({
    where: {
      name: itemName,
    },
  });
  return res.json(oneItem);
});

itemPath.post("/addItem", async (req, res) => {
  const data = req.body;

  let calculatedFinalCost = data.cost + data.cost * (data.taxPercent / 100);
  let calculatedPrice =
    calculatedFinalCost + calculatedFinalCost * (data.profit / 100);
  let calculatedpriceCash =
    calculatedPrice - calculatedPrice * (data.cashDiscount / 100);

  let calculatedData = {
    //empty_at: null,
    // created_at: "2021-12-06T21:24:43.748Z",
    // updated_at: "2021-12-06T21:23:17.234Z",
  };
  const newItem = await item.create({
    data: {
      name: data.name,
      desc: data.desc,
      stock: data.stock,
      brand: data.brand,
      provider: data.provider,
      branch_name: data.branchName,
      sub_branch_name: data.subBranchName,
      size: data.size,
      cost: data.cost,
      tax_percent: data.taxPercent || 21,
      profit: data.profit,
      cash_discount: data.cashDiscount || 15,
      final_cost: Math.floor(calculatedFinalCost),
      price: Math.floor(calculatedPrice),
      price_cash: Math.floor(calculatedpriceCash),
      total_sold: data.totalSold || 0,
    },
  });
  return res.json(newItem);
});

module.exports = itemPath;
