const branchPath = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const {branch, item} = new PrismaClient()


branchPath.get("/", async (req, res) => {
  const branches = await branch.findMany({
    select: {
      name: true,
      items: true,
      sub_branches: true
    }
  })
  return res.json(branches);
});
branchPath.get("/:branchName", async (req, res) => {
  const {branchName} = req.params
  const oneBranch = await branch.findUnique({
    select: {
      name: true,
      items: true,
      sub_branches: true
    },
    where: {
      name: branchName
    }
  })
  return res.json(oneBranch)
})

module.exports = branchPath;
