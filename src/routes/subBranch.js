const subBranch = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const {branch, item, sub_branch} = new PrismaClient()


subBranch.get("/", async (req, res) => {
  const branches = await sub_branch.findMany({
    select: {
      name: true,
      items: true,
      branch: true
    }
  })
  return res.json(branches);
});
subBranch.get("/:subBranchName", async (req, res) => {
  const {subBranchName} = req.params
  const oneBranch = await sub_branch.findUnique({
    select: {
      name: true,
      items: true,
      branch: true
    },
    where: {
      name: subBranchName
    }
  })
  return res.json(oneBranch)
})

module.exports = subBranch;
